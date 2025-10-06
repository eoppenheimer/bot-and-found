
-- This creates the database of Amplify activites.
-- Includes their metadatas and most recent commit.
CREATE TABLE IF NOT EXISTS activities (
    id BLOB PRIMARY KEY,
    idCommit BLOB,
    timestampSnapshot TEXT,
    categories TEXT,
    metaSnapshot TEXT,
    commitSnapshot TEXT
) WITHOUT ROWID;

-- This creates the database of Amplify items from the Item Bank.
-- Includes their metadatas and most recent commit.
CREATE TABLE IF NOT EXISTS abItems (
    id BLOB PRIMARY KEY,
    idCommit BLOB,
    timestampSnapshot TEXT,
    categories TEXT,
    metaSnapshot TEXT,
    commitSnapshot TEXT
) WITHOUT ROWID;

-- This creates the database of Google Spreadsheet files downloaded.
-- Includes their JSON structure and the time they were snapshotted.
CREATE TABLE IF NOT EXISTS googleSpreadsheets (
    id BLOB PRIMARY KEY,
    idSpreadsheet TEXT,
    gid TEXT,
    range TEXT,
    title TEXT,
    timestampSnapshot TEXT,
    categories TEXT,
    sheets TEXT
) WITHOUT ROWID;

-- This creates the database for BPL data tracking.
-- Includes all lesson development and review information.
CREATE TABLE IF NOT EXISTS notionBPLDevelopmentBoard (
    id TEXT PRIMARY KEY,
    `Name` TEXT,
    `Activity (ALP)` TEXT,
    `Assign` TEXT,
    `Audio QA - Internal` TEXT,
    `Audio Re-review` TEXT,
    `Audio/Dictionary Notes` TEXT,
    `Batch` TEXT,
    `CL Tune-up Doc` TEXT,
    `CL Tune-up Reviewer` TEXT,
    `CL Tune-up Status` TEXT,
    `CL specialist` TEXT,
    `Connections` TEXT,
    `Content Author(s)` TEXT,
    `Content Tune-up Status` TEXT,
    `Content tune up` TEXT,
    `Design QA Status` TEXT,
    `Design Requests` TEXT,
    `Design Support` TEXT,
    `Development Dates` TEXT,
    `Editorial Audit` TEXT,
    `Feature tracker` TEXT,
    `Grade` TEXT,
    `Graph Support` TEXT,
    `Graph Tune-up Reviewer` TEXT,
    `Graph Tune-up Status` TEXT,
    `Intervention Support` TEXT,
    `Item Map` TEXT,
    `Milestone` TEXT,
    `Needs Dictionary` TEXT,
    `Parent Collection Text Updates` TEXT,
    `Parent item` TEXT,
    `Precursor Status` TEXT,
    `Precursor Ticket` TEXT,
    `Reference Item` TEXT,
    `Reviewer-audio QA` TEXT,
    `Status` TEXT,
    `Sub-item` TEXT,
    `Text Update Notes` TEXT,
    `Unit Link - Parent Collection` TEXT,
    `Update Category` TEXT,
    `Updated Precursor Screen Audio` TEXT
) WITHOUT ROWID;


-- This creates the database for mCLASS items tracking.
-- Includes all item development, review, and form assignment information.
CREATE TABLE IF NOT EXISTS notionMCLASSItemsDatabase (
    id TEXT PRIMARY KEY,
    `Descriptive Title` TEXT,
    `6-8 IC Nov 24` TEXT,
    `A1/M1 24-25` TEXT,
    `Answer` TEXT,
    `Answer Type` TEXT,
    `Assignee` TEXT,
    `BOY 25 Short / Screener` TEXT,
    `BOY FS Fall 24` TEXT,
    `BOY PM` TEXT,
    `CL Tuneup Applier` TEXT,
    `CL Tuneup Doc` TEXT,
    `CL Tuneup Reviewer` TEXT,
    `CL Tuneup Status` TEXT,
    `Calc Domain (Do Not use)` TEXT,
    `Domain` TEXT,
    `Domain (Do not Use)` TEXT,
    `EOY FS 24` TEXT,
    `Financial Literacy` TEXT,
    `Form` TEXT,
    `Form Type` TEXT,
    `Forms from...Forms` TEXT,
    `Future Correct Answer` TEXT,
    `Grade` TEXT,
    `Grade (DO NOT USE)` TEXT,
    `Graph Tune-up Reviewer` TEXT,
    `Grapher` TEXT,
    `ID Prototype` TEXT,
    `Image Bynder Link` TEXT,
    `Item Bank Link` TEXT,
    `Item ID` TEXT,
    `Item Links in Forms` TEXT,
    `Item Number` TEXT,
    `Item Number 1` TEXT,
    `Item Number 2` TEXT,
    `Item Number 3` TEXT,
    `Jul RS` TEXT,
    `Last edited by` TEXT,
    `Last edited time` TEXT,
    `MOY FS 24` TEXT,
    `MOY PM` TEXT,
    `Marketing` TEXT,
    `Needs Alt-Text?` TEXT,
    `Needs Graph?` TEXT,
    `OLD Item ID` TEXT,
    `Old Item Number` TEXT,
    `PM Tag in Item` TEXT,
    `Parent Desmos Link` TEXT,
    `Parent Item Bank Link` TEXT,
    `Parent Item ID` TEXT,
    `Parent Item/Children Items` TEXT,
    `Parent's Domain` TEXT,
    `Prototype Status` TEXT,
    `Prototype by` TEXT,
    `Related mCLASS Math Items Database` TEXT,
    `Standard Check` TEXT,
    `Status of Parent/Children Item` TEXT,
    `TOY` TEXT,
    `TOY from Forms` TEXT,
    `👻 mC Math Forms` TEXT
) WITHOUT ROWID;

-- This creates the database of BPL Details for each Boost lesson.
-- Includes their VT scripts and precusor information.
CREATE TABLE IF NOT EXISTS bplItemDetails (
    id TEXT PRIMARY KEY,
    timestampSnapshot TEXT,
    idGoogleSpreadsheet TEXT,
    urlGoogleSpreadsheet TEXT,
    milestone TEXT,
    grade INTEGER,
    unit INTEGER,
    subunit INTEGER,
    lesson INTEGER,
    title TEXT,
    standardsBuildingOn TEXT,
    standardsAddressing TEXT,
    goalTeacherFacing TEXT,
    goalStudentFacing TEXT,
    introVT TEXT,
    criticalItems TEXT,
    interventionBeginVT TEXT,
    interventionEndVT TEXT,
    precusorLesson TEXT,
    precursorItems TEXT,
    postInterventionItems TEXT,
    celebrationVT TEXT
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

