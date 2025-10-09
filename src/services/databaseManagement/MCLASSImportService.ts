import fs from "fs/promises";
import path from "path";
import { INotionMCLASSItemsDatabaseModel, notionMCLASSItemsDatabaseModel } from "../../models";

type Enumerate<N extends number, Acc extends number[] = []> = 
  Acc["length"] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc["length"]]>;

// Helper to add 1 to a number (up to reasonable limits)
type Inc<N extends number> = 
    N extends 0 ? 1 :
    N extends 1 ? 2 :
    N extends 2 ? 3 :
    N extends 3 ? 4 :
    N extends 4 ? 5 :
    N extends 5 ? 6 :
    N extends 6 ? 7 :
    N extends 7 ? 8 :
    N extends 8 ? 9 :
    N extends 9 ? 10 :
    N extends 10 ? 11 :
    N extends 11 ? 12 :
    N extends 12 ? 13 :
    N extends 13 ? 14 :
    N extends 14 ? 15 :
    N extends 15 ? 16 :
    never;

type Range<Min extends number, Max extends number> = 
    Exclude<Enumerate<Inc<Max>>, Enumerate<Min>>;



type mCLASSAnswer = {input: string, itemId?: string} & (ChoiceSingle | ChoiceMultiple | SingleNumberSole | SingleNumberRange | ExpressionExpandedForm | ExpressionExpression | EquationEquation | EquationFraction | Coordinate | WithVariableExpression | WithVariableInequality | WithVariableEquation | Uncategorized);


interface ChoiceSingle {
    type: "choice-single";
    grade: Range<0,12>;
    choice: string;
}

interface ChoiceMultiple {
    type: "choice-multiple";
    grade: Range<0,12>;
    choices: string[];
}

interface SingleNumberSole {
    type: "single-number-sole";
    grade: Range<0,12>;
    answerKey: number[];
}

interface SingleNumberRange {
    type: "single-number-range";
    grade: Range<2,12>;
    keyLower: number;
    keyUpper: number;
    inclusivity: "inclusive" | "exclusive"
}

interface ExpressionExpandedForm {
    type: "expression-expanded-form";
    grade: Range<2,12>;
    keyValues: number[];
}

interface ExpressionExpression {
    type: "expression-expression";
    grade: Range<2,12>;
    keyValues: number[];
}

interface EquationEquation {
    type: "equation-equation";
    grade: Range<2,12>;
    keyValues: number[];
}

interface EquationFraction {
    type: "equation-fraction";
    grade: Range<2,12>;
    keyValues: number[];
}

interface Coordinate {
    type: "coordinate";
    grade: Range<4,12>;
    keyX: number;
    keyY: number;
}

interface WithVariableExpression {
    type: "with-variable-expression";
    grade: Range<6,12>;
    var: string;
    fnSolution: string;
}

interface WithVariableInequality {
    type: "with-variable-inequality";
    grade: Range<6,12>;
    var: string;
    fnSolution: string;
}

interface WithVariableEquation {
    type: "with-variable-equation";
    grade: Range<6,12>;
    var1: string;
    var2: string;
    /** Use LaTeX. */
    solutions: string;
}

interface Uncategorized {
    type: "uncategorized";
}

function findGCF(a: number, b: number, iterations=0) {
    if (iterations >= 100) throw Error("Maximum gcf recursion reached.");
    if (b === 0) {
        return a;
    }
    return findGCF(b, a % b, iterations + 1);
}

const unicodeFractionsMap = new Map([
    [/¼/g, "1/4"],
    [/½/g, "1/2"], 
    [/¾/g, "3/4"],
    [/⅐/g, "1/7"],
    [/⅑/g, "1/9"],
    [/⅒/g, "1/10"],
    [/⅓/g, "1/3"],
    [/⅔/g, "2/3"],
    [/⅕/g, "1/5"],
    [/⅖/g, "2/5"],
    [/⅗/g, "3/5"],
    [/⅘/g, "4/5"],
    [/⅙/g, "1/6"],
    [/⅚/g, "5/6"],
    [/⅛/g, "1/8"],
    [/⅜/g, "3/8"],
    [/⅝/g, "5/8"],
    [/⅞/g, "7/8"],
    [/⅟/g, "1/"]
]);



const NUMBER = String.raw`(?:-?(?:\d+(?:\.\d+)?|\.\d+)(?:\/(?:\d+(?:\.\d+)?|\.\d+))?)`;


export class MCLASSImportService {

    run() {
        const all: mCLASSAnswer[] = [];
        for (const entry of notionMCLASSItemsDatabaseModel.findAll()) {
            const categorized = this.categorizeAnswer(entry);
            categorized.itemId = entry["Item ID"];
            all.push(categorized);
            if (categorized.type === "uncategorized") continue;
            //console.log(categorized);
        }

        this.debug(all);
    }
    
    /** Writes a list of results to TSV files to be shared to others. */
    async debug(all: mCLASSAnswer[]) {

        const {DATABASE_PATH} = process.env;
        if (!DATABASE_PATH) throw Error("Missing DATABASE_PATH from env file.");

        const categoriesToWrite = new Set(all.map(x=>x.type));

        
        for (const name of categoriesToWrite) {

            const fh = await fs.open(path.join(DATABASE_PATH, "_mCLASSDebuging", `${name}.tsv`), "w");
            const write = (...strings: string[]) => fh.writeFile([...strings, "\n"].join("\t"));

            const found = all.find(x=>x.type===name);
            if (!found) {
                console.log("Cannot find any", name);
                continue;
            }

            let keys = Object.keys(found).filter(x=> x !== "type" && x !== "itemId" && x !== "grade" && x !== "input");

            keys = ["itemId", "grade", "input", ...keys];

            await write(...keys);

        
            for (const entry of all) {
                if (entry.type !== name) continue;
                if (!entry.input || !entry.type) continue;

                const mapped = keys.map(x=>JSON.stringify(entry[x as keyof typeof entry]!));
                await write(...mapped);
            }
        
            await fh.close();

        }
    }

    categorizeAnswer(entry: INotionMCLASSItemsDatabaseModel): mCLASSAnswer {

        const itemId = entry["Item ID"];
        const answerType = entry["Answer Type"];
        let input = entry["Answer"];

        
        // Apply fraction replacement immediately.
        input = input.trim();
        for (const [regex, replacement] of unicodeFractionsMap) {
            input = input.replace(regex, replacement);
        }

        /** Obtain the grade used here */
        const gradeMap: Map<string, Range<0,8>> = new Map([
            ["00", 0],
            ["10", 1], 
            ["20", 2],
            ["30", 3],
            ["40", 4],
            ["50", 5],
            ["60", 6],
            ["70", 7],
            ["80", 8]
        ]);
        const prefix = itemId.substring(0, 2);
        const grade = gradeMap.get(prefix);
        // If the grade was not obtained, we are not safe to proceed.
        if (grade === undefined) return {
            type: "uncategorized", 
            input
        };
        

        //-------- STAGE ONE: COLLECT ALL THE BOOLEAN VALUES --------//

        /** Is this a single choice answer? */
        const isChoiceSingle = answerType === "MC - Single" || answerType === "MC - Single, 📈 Static Graph";

        /** Is this a multiple choice answer? */
        const isChoiceMultiple = answerType === "MC - Multiple" || answerType === "MC - Multiple, 📈 Static Graph";
        
        /** Is this a single lone value? */
        const isSingleNumberSole = (new RegExp(`^${NUMBER}$`)).test(input);

        /** Is the solution between two numbers? */
        const isSingleNumberRange = /exclusive|inclusive|between/i.test(input);
        /** Is the range simply on its own? */
        const matchSingleNumberRangeSimple = input.match(/^(\d+)-(\d+)$/);

        let x: mCLASSAnswer;

        /** Is this an expression to be written as expanded form? */
        const isExpressionExpandedForm = (new RegExp(`^${NUMBER}`)).test(input) && /equiv(alent)? expression/.test(input);

        /** Is this an expression to be written as another expression form? */
        const isExpressionExpression = (new RegExp(`^${NUMBER}`)).test(input) && /and equivalents?/.test(input);


        /** Is this an expression to be written as an equation? */
        const isEquationEquation = (new RegExp(`^${NUMBER}`)).test(input) && /with equations?/.test(input);

        /** Is this detecting a fraction? */
        const isEquationFraction = ((new RegExp(`^${NUMBER}`)).test(input) && /equivalents?\/equations?/.test(input)) || (new RegExp(`^${NUMBER} or equivalent`)).test(input);

        const isEquation = isEquationEquation || isEquationFraction;

        
        
        //-------- STAGE TWO: RETURN BASED ON BOOLEAN VALUES --------//

        if (entry["Item ID"] === "00106") console.log(input, isEquationEquation, isEquation);

        // Knock out the multiple choices, since these are trivial.
        if (isChoiceSingle) {
            return {
                type: "choice-single",
                choice: input,
                grade,
                input
            };
        }
        else if (isChoiceMultiple) {

            /** The formatted string getting rid of all English words. */
            const formatted = input.replace(/;|(,?\s+and\b)/g, ",").replace(/^selects /, "");
            const choices: string[] = [];
            let accumulated = "";
            let bracket = 0;
            let i=-1;

            // We need to perform a brief parse in order to eliminate any point solutions.
            for (const char of formatted) {
                i++;

                if (char === "(") bracket--;
                else if (char === ")") bracket++;
                // Check that this is not inside a bracket, and this is not a 100s place comma.
                else if (char === "," && bracket === 0 && !(/\d/.test(formatted[i-1]) && /\d/.test(formatted[i+1]))) {
                    choices.push(accumulated.trim());
                    accumulated = "";
                    continue;
                }
                accumulated += char;
            }

            // Add the last straggler.
            if (accumulated) choices.push(accumulated.trim());

            return {
                type: "choice-multiple",
                choices: choices,
                grade,
                input
            };

        }

        // Immediately if this is grade 0 or 1, it can only yield a single type.
        else if (grade === 0 || grade === 1) {

            const match = input.match(new RegExp(`${NUMBER}`, "g"));

            /** These are no longer input graphs. Thus treat them as uncategorized. */
            const isUncategorized = /stepper interaction|creates/i.test(input);

            // There is nothing left to do here, no more options exist.
            if (!match || isUncategorized) return {
                type: "uncategorized",
                input
            };
            
            const answerKey = match.map(x=>parseFloat(x));

            return {
                type: "single-number-sole",
                answerKey,
                grade,
                input,
            };
        }

        // This is such a simple case that we can knock it out right here.
        else if (matchSingleNumberRangeSimple) return {
            type: "single-number-range",
            keyLower: parseInt(matchSingleNumberRangeSimple[1]),
            keyUpper: parseInt(matchSingleNumberRangeSimple[2]),
            inclusivity: "exclusive",
            grade,
            input
        };

        // The fraction needs to be rooted out immediately, so this will go first.
        else if (isEquation) {
            if (entry["Item ID"] === "00106") console.log(input, isEquationEquation, isEquation);
            //console.log(input);
            
            const matchFraction = input.match(/(-?\d+)\s*\/\s*(\d+)/);

            if (matchFraction) {
                let numerator = parseInt(matchFraction[1]);
                const denominator = parseInt(matchFraction[2]);

                const remaining = input.slice(0, matchFraction.index!).match(/\d+/);
                if (remaining) numerator += parseInt(remaining[0]) * denominator;

                const isDecimalsAllowed = !/no decimals?/i.test(input);

                return {
                    type: "equation-fraction",
                    keyValues: [numerator, denominator],
                    grade,
                    input,
                };
            }

            const matchDecimal = input.match(/(-?\d+)\.(\d+)/);

            if (matchDecimal) {

                const isNegative = matchDecimal[1].startsWith("-");
            
                const before = Math.abs(parseInt(matchDecimal[1]));
                const after = parseInt(matchDecimal[2]);

                const integer = before * (10 ** matchDecimal[2].length) + after;
                const decimal = (10 ** matchDecimal[2].length);

                const gcf = findGCF(integer, decimal);
                const numerator = integer / gcf * (isNegative ? -1 : 1);
                const denominator = decimal / gcf;

                return {
                    type: "equation-fraction",
                    keyValues: [numerator, denominator],
                    grade,
                    input
                };

            }

            // Otherwise just perform a regular match.

            const match = input.match(new RegExp(`${NUMBER}`, "g"));
            if (!match) throw Error("You've done really bad. " + input);
            const keyValues = match.map(x=>parseFloat(x));

            return {
                type: "equation-equation",
                keyValues,
                grade,
                input,
            };
        }

        // Let's get the number range out of the way.
        else if (isSingleNumberRange) {

            const matchInclusivity = input.toLowerCase().match(/exclusive|inclusive|between/);
            if (!matchInclusivity || !(matchInclusivity[0] === "exclusive" || matchInclusivity[0] === "inclusive" || matchInclusivity[0] === "between")) throw Error("You've done really bad.");

            /** Keyword matched. */
            const mode = matchInclusivity[0];

            /** The string slice that we are checking. */
            const slice = mode === "between" ? input.slice(matchInclusivity.index) : input;
        
            const matchNumber = slice.match(new RegExp(`${NUMBER}`, "g"));
            if (!matchNumber) throw Error(`Failed to find any number despite using '${mode}' as a keyword: ${JSON.stringify(slice)}`);

            const min = parseFloat(matchNumber[0]);
            const max = parseFloat(matchNumber[1]);

            return {
                type: "single-number-range",
                keyLower: min,
                keyUpper: max < min ? -max : max,
                inclusivity: mode === "inclusive" ? mode : "exclusive",
                grade,
                input
            };

        }



        else if (isExpressionExpandedForm) {

            const match = input.match(new RegExp(`${NUMBER}`, "g"));
            if (!match) throw Error("You've done really bad. " + input);
            const keyValues = match.map(x=>parseFloat(x));

            return {
                type: "expression-expanded-form",
                keyValues,
                grade,
                input,
            };
        }

        else if (isExpressionExpression) {
            const match = input.match(new RegExp(`${NUMBER}`, "g"));
            if (!match) throw Error("You've done really bad. " + input);
            const keyValues = match.map(x=>parseFloat(x));

            return {
                type: "expression-expression",
                keyValues,
                grade,
                input,
            };
        }

        // This one is the last, since it has such a broad criteria.
        else if (isSingleNumberSole) {
            const match = input.match(new RegExp(`${NUMBER}`, "g"));
            if (!match) throw Error("You've done really bad. " + input);
            const answerKey = match.map(x=>parseFloat(x));
            return {
                type: "single-number-sole",
                grade,
                input,
                answerKey
            };
        }


        else return {
            type: "uncategorized",
            input
        };

    }
}