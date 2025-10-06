import { SQLiteModel, _CheckIfSatisfiesBindings } from "./Model";

export interface INotionBPLDevelopmentBoardModel {
    id: string;
    "Name": string;
    "Activity (ALP)": string;
    "Assign": string;
    "Audio QA - Internal": string;
    "Audio Re-review": string;
    "Audio/Dictionary Notes": string;
    "Batch": string;
    "CL Tune-up Doc": string;
    "CL Tune-up Reviewer": string;
    "CL Tune-up Status": string;
    "CL specialist": string;
    "Connections": string;
    "Content Author(s)": string;
    "Content Tune-up Status": string;
    "Content tune up": string;
    "Design QA Status": string;
    "Design Requests": string;
    "Design Support": string;
    "Development Dates": string;
    "Editorial Audit": string;
    "Feature tracker": string;
    "Grade": string;
    "Graph Support": string;
    "Graph Tune-up Reviewer": string;
    "Graph Tune-up Status": string;
    "Intervention Support": string;
    "Item Map": string;
    "Milestone": string;
    "Needs Dictionary": string;
    "Parent Collection Text Updates": string;
    "Parent item": string;
    "Precursor Status": string;
    "Precursor Ticket": string;
    "Reference Item": string;
    "Reviewer-audio QA": string;
    "Status": string;
    "Sub-item": string;
    "Text Update Notes": string;
    "Unit Link - Parent Collection": string;
    "Update Category": string;
    "Updated Precursor Screen Audio": string;
}

const bindings = {
    id: [String, true],
    "Name": [String, true],
    "Activity (ALP)": [String, true],
    "Assign": [String, true],
    "Audio QA - Internal": [String, true],
    "Audio Re-review": [String, true],
    "Audio/Dictionary Notes": [String, true],
    "Batch": [String, true],
    "CL Tune-up Doc": [String, true],
    "CL Tune-up Reviewer": [String, true],
    "CL Tune-up Status": [String, true],
    "CL specialist": [String, true],
    "Connections": [String, true],
    "Content Author(s)": [String, true],
    "Content Tune-up Status": [String, true],
    "Content tune up": [String, true],
    "Design QA Status": [String, true],
    "Design Requests": [String, true],
    "Design Support": [String, true],
    "Development Dates": [String, true],
    "Editorial Audit": [String, true],
    "Feature tracker": [String, true],
    "Grade": [String, true],
    "Graph Support": [String, true],
    "Graph Tune-up Reviewer": [String, true],
    "Graph Tune-up Status": [String, true],
    "Intervention Support": [String, true],
    "Item Map": [String, true],
    "Milestone": [String, true],
    "Needs Dictionary": [String, true],
    "Parent Collection Text Updates": [String, true],
    "Parent item": [String, true],
    "Precursor Status": [String, true],
    "Precursor Ticket": [String, true],
    "Reference Item": [String, true],
    "Reviewer-audio QA": [String, true],
    "Status": [String, true],
    "Sub-item": [String, true],
    "Text Update Notes": [String, true],
    "Unit Link - Parent Collection": [String, true],
    "Update Category": [String, true],
    "Updated Precursor Screen Audio": [String, true],
} satisfies _CheckIfSatisfiesBindings;


class NotionBPLDevelopmentBoardModel extends SQLiteModel<INotionBPLDevelopmentBoardModel> {}

export const notionBPLDevelopmentBoardModel = new NotionBPLDevelopmentBoardModel("notionBPLDevelopmentBoard", bindings);
