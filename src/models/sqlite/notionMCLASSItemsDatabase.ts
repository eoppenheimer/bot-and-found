import { SQLiteModel, _CheckIfSatisfiesBindings } from "./Model";

export interface INotionMCLASSItemsDatabaseModel {
    id: string;
    "Descriptive Title": string;
    "6-8 IC Nov 24": string;
    "A1/M1 24-25": string;
    "Answer": string;
    "Answer Type": string;
    "Assignee": string;
    "BOY 25 Short / Screener": string;
    "BOY FS Fall 24": string;
    "BOY PM": string;
    "CL Tuneup Applier": string;
    "CL Tuneup Doc": string;
    "CL Tuneup Reviewer": string;
    "CL Tuneup Status": string;
    "Calc Domain (Do Not use)": string;
    "Domain": string;
    "Domain (Do not Use)": string;
    "EOY FS 24": string;
    "Financial Literacy": string;
    "Form": string;
    "Form Type": string;
    "Forms from...Forms": string;
    "Future Correct Answer": string;
    "Grade": string;
    "Grade (DO NOT USE)": string;
    "Graph Tune-up Reviewer": string;
    "Grapher": string;
    "ID Prototype": string;
    "Image Bynder Link": string;
    "Item Bank Link": string;
    "Item ID": string;
    "Item Links in Forms": string;
    "Item Number": string;
    "Item Number 1": string;
    "Item Number 2": string;
    "Item Number 3": string;
    "Jul RS": string;
    "Last edited by": string;
    "Last edited time": string;
    "MOY FS 24": string;
    "MOY PM": string;
    "Marketing": string;
    "Needs Alt-Text?": string;
    "Needs Graph?": string;
    "OLD Item ID": string;
    "Old Item Number": string;
    "PM Tag in Item": string;
    "Parent Desmos Link": string;
    "Parent Item Bank Link": string;
    "Parent Item ID": string;
    "Parent Item/Children Items": string;
    "Parent's Domain": string;
    "Prototype Status": string;
    "Prototype by": string;
    "Related mCLASS Math Items Database": string;
    "Standard Check": string;
    "Status of Parent/Children Item": string;
    "TOY": string;
    "TOY from Forms": string;
    "👻 mC Math Forms": string;
}

const bindings = {
    id: [String, true],
    "Descriptive Title": [String, true],
    "6-8 IC Nov 24": [String, true],
    "A1/M1 24-25": [String, true],
    "Answer": [String, true],
    "Answer Type": [String, true],
    "Assignee": [String, true],
    "BOY 25 Short / Screener": [String, true],
    "BOY FS Fall 24": [String, true],
    "BOY PM": [String, true],
    "CL Tuneup Applier": [String, true],
    "CL Tuneup Doc": [String, true],
    "CL Tuneup Reviewer": [String, true],
    "CL Tuneup Status": [String, true],
    "Calc Domain (Do Not use)": [String, true],
    "Domain": [String, true],
    "Domain (Do not Use)": [String, true],
    "EOY FS 24": [String, true],
    "Financial Literacy": [String, true],
    "Form": [String, true],
    "Form Type": [String, true],
    "Forms from...Forms": [String, true],
    "Future Correct Answer": [String, true],
    "Grade": [String, true],
    "Grade (DO NOT USE)": [String, true],
    "Graph Tune-up Reviewer": [String, true],
    "Grapher": [String, true],
    "ID Prototype": [String, true],
    "Image Bynder Link": [String, true],
    "Item Bank Link": [String, true],
    "Item ID": [String, true],
    "Item Links in Forms": [String, true],
    "Item Number": [String, true],
    "Item Number 1": [String, true],
    "Item Number 2": [String, true],
    "Item Number 3": [String, true],
    "Jul RS": [String, true],
    "Last edited by": [String, true],
    "Last edited time": [String, true],
    "MOY FS 24": [String, true],
    "MOY PM": [String, true],
    "Marketing": [String, true],
    "Needs Alt-Text?": [String, true],
    "Needs Graph?": [String, true],
    "OLD Item ID": [String, true],
    "Old Item Number": [String, true],
    "PM Tag in Item": [String, true],
    "Parent Desmos Link": [String, true],
    "Parent Item Bank Link": [String, true],
    "Parent Item ID": [String, true],
    "Parent Item/Children Items": [String, true],
    "Parent's Domain": [String, true],
    "Prototype Status": [String, true],
    "Prototype by": [String, true],
    "Related mCLASS Math Items Database": [String, true],
    "Standard Check": [String, true],
    "Status of Parent/Children Item": [String, true],
    "TOY": [String, true],
    "TOY from Forms": [String, true],
    "👻 mC Math Forms": [String, true],
} satisfies _CheckIfSatisfiesBindings;

class NotionMCLASSItemsDatabaseModel extends SQLiteModel<INotionMCLASSItemsDatabaseModel> {}

export const notionMCLASSItemsDatabaseModel = new NotionMCLASSItemsDatabaseModel("notionMCLASSItemsDatabase", bindings);