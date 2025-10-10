import readline from "readline";
import crypto from "crypto";
import csv from "csv-parser";
import fs from "fs";

/**
 * Converts a JSON so that it is no longer cyclic. This way it can be successfully stringified.
 * @param pruneThis The object to prune.
 * @param iterations How many iterations to prune.
 * @returns 
 */
export function pruneJSON(pruneThis: any, iterations=4) {
    const prunedItems = new Set();

    const skipThesePrototypes = new Set(["toString","toLocaleString","join","reverse","sort","push","pop","shift","unshift","splice","concat","slice","lastIndexOf","indexOf","forEach","map","filter","reduce","reduceRight","some","every","find","findIndex","copyWithin","fill","entries","keys","values","includes","flatMap","flat","at","findLast","findLastIndex","toReversed","toSorted","toSpliced","with","constructor","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","ownHandleDispatch","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__"]);

    function logPrototypeChain(instance: any) {
        // Start with the prototype of the instance
        let prototype = Object.getPrototypeOf(instance);

        const output = new Set();
    
        // Traverse the prototype chain
        while (prototype !== null) {
            //console.log('Prototype:', prototype);
    
            // Get all property names of the current prototype
            const propertyNames = Object.getOwnPropertyNames(prototype);
    
            // Log function names only
            for (const name of propertyNames) {
                if (skipThesePrototypes.has(name)) continue;
                let current;
                try {
                    current = prototype[name];
                }
                catch {
                    //console.log('failed', name, 'from', prototype);
                    continue;
                }
                if (typeof current === "function") {
                    output.add(name);
                }
            }

            // Move up the prototype chain
            prototype = Object.getPrototypeOf(prototype);
        }

        return output;
    }


    function pruneJSONInner(obj: any, depth=0) {

        if (depth > iterations) return;

        const output: any = {};

        for (const key of Object.keys(obj)) {

            const value = obj[key];

            if (value === null) continue;

            if (prunedItems.has(value)) {
                
                if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
                    output[key] = value;
                }
                else {
                    output[key] = "<recurse>";
                }
                
            }
            else {
                prunedItems.add(value);
                if (key === "script") {
                    output[key] = "<insert CL script here>";
                }
                else if (typeof value === "object") {
                    output[key] = pruneJSONInner(value, depth+1);
                }
                else if (typeof value === "function") {
                    output[key] = "<fn>";
                }
                else if (typeof value !== "symbol") {
                    output[key] = value;
                }
            }

            
        }

        for (const functionName of logPrototypeChain(obj)) {
            output[functionName as any] = "<prototype>";
        }

        const severed = JSON.parse(JSON.stringify(output));
        return promoteToList(severed, Object.keys(severed as object));
    }

    function promoteToList(obj: any, keysOfObj: any, parent=undefined as any, parentKey=undefined as any) {
        const isList = parent !== undefined && keysOfObj.length > 0 && keysOfObj.every((x: string)=>/^\d+$/.test(x));

        const collected = [];
        for (const key of keysOfObj) {
            let value = obj[key];
            if (value === null) return obj;
            if (typeof value === "object") {
                value = promoteToList(value, Object.keys(value), obj, key);
            };
            if (isList) collected.push(value);
        }
            
        if (isList) parent[parentKey] = collected;

        return obj;
    }

    return pruneJSONInner(pruneThis);
}


/**
 * Halts the server to ask for user input.
 * @param query The question to appear on screen to ask the user.
 * @returns The text that the user types into this field.
 */
export function prompt(query: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }));
}


/**
 * Create a hash function used to generate ids throughout.
 * @param strings The strings to generate hash from.
 * @url https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
 * @returns Hash of the supplied strings.
 */
export function generateHash(...strings: string[]) {
    const secret = strings.join(" ");
    const hash = crypto.createHmac("sha1", secret).update("I make hashes for Ezra").digest();
    return hash;
}

/**
 * Outputs a list of duplicates that appears in this list.
 * @param array The array we want to find duplicates of. 
 * @returns The duplicates of this array.
 */
export function findDuplicates<T>(array: T[]) {
    const seen = new Map();
    const duplicates: Set<T> = new Set();
            
    array.forEach(item => {
        if (seen.has(item)) {
            duplicates.add(item);
        }
        else {
            seen.set(item, true);
        }
    });
            
    return Array.from(duplicates);
}

/**
 * Returns a completed CSV file compiled into different columns, with the first row as the header.
 * @param filePath The path to read the string at.
 * @param PutYourInterfaceHere The output of the CSV should follow this type.
 * @returns 
 */
export function parseCSV<PutYourInterfaceHere>(filePath: string) {

    const results: PutYourInterfaceHere[] = [];

    return new Promise<PutYourInterfaceHere[]>(resolve => {
        fs.createReadStream(filePath)
            .pipe(csv({
                mapHeaders: ({ header }) => header.trim(),
                mapValues: ({ value }) => value.trim()
            }))
            .on("data", (data: PutYourInterfaceHere) => results.push(data))
            .on("end", () => {
                resolve(results);
            });
    });
}

/** Shorthand to create for loops that retains the original TypeScript types. */
export function entriesOf<T extends object>(object: T): [keyof T, T[keyof T]][] {
    return Object.entries(object) as [keyof T, T[keyof T]][];
}

/** Shorthand to yield positive if a string exists include of an array. */
export function arrayIncludes<T extends readonly string[]>(
    value: string,
    arr: T
): value is T[number] {
    return (arr as readonly string[]).includes(value);
}

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

/** Generates a range of numbers, given a min and a max. Only works from 0-16. */
export type RangeInt<Min extends number, Max extends number> = 
    Exclude<Enumerate<Inc<Max>>, Enumerate<Min>>;
