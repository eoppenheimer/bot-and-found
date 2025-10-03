
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
    id TEXT PRIMARY KEY,
    timestampSnapshot TEXT,
    categories TEXT,
    range TEXT,
    gid TEXT,
    sheets TEXT
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

