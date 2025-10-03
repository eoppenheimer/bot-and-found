export interface GoogleSpreadsheet {
    /** 
     * 1/4 layers of descent into the sheet.
     * 
     * Must use `0` to index.
    */
    sheets: GoogleSpreadsheetSheet[];
}

interface GoogleSpreadsheetSheet {
    /** 
     * 2/4 layers of descent into the sheet.
     * 
     * Must use `0` to index.
    */
    data: GoogleSpreadsheetData[];
}

interface GoogleSpreadsheetData {
    /** 
     * 3/4 layers of descent into the sheet.
     * 
     * List of rows. Index with a number.
    */
    rowData: GoogleSpreadsheetRowData[];
}

interface GoogleSpreadsheetRowData {
    /** 
     * 4/4 layers of descent into the sheet.
     * 
     * List of each cell. Index with a number.
    */
    values: GoogleSpreadsheetCell[];
}

export interface GoogleSpreadsheetCell {
    /** The value written as a plain-text readable string, without any formatting applied. */
    formattedValue?: string;
    /** The format of this cell at the very beginning. Used because `textFormatRuns` neglects the beginning stylization. */
    effectiveFormat?: GoogleSpreadsheetEffectiveFormat;
    /** The format of this cell as it progresses. Used because `effectiveFormat` neglects to update its stylization. */
    textFormatRuns?: GoogleSpreadsheetTextFormatRuns[];
}

export interface GoogleSpreadsheetTextFormatRuns {
    /** The format of this cell as it progresses. */
    format?: Partial<GoogleSpreadsheetTextFormat> | object;
    /** Does not show up for the first entry! */
    startIndex?: number;
}

export interface GoogleSpreadsheetTextFormat {
    strikethrough: boolean;
    bold: boolean;
    underline: boolean;
    fontSize: number;
    fontFamily: string;
    italic: boolean;
    foregroundColor: GoogleSpreadsheetColor;
    foregroundColorStyle: {
        rgbColor: GoogleSpreadsheetColor;
    };
    link: {uri: string};
}

export interface GoogleSpreadsheetEffectiveFormat {
    verticalAlignment: "BOTTOM" | "MIDDLE" | "TOP";
    backgroundColor: GoogleSpreadsheetColor;
    horizontalAlignment?: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFY";
    textFormat: GoogleSpreadsheetTextFormat;
    hyperlinkDisplayType?: "PLAIN_TEXT" | "LINKED";
    backgroundColorStyle: {
        rgbColor: GoogleSpreadsheetColor;
    };
    padding: {
        left: number;
        bottom: number;
        right: number;
        top: number;
    };
    borders?: object;
    wrapStrategy?: "WRAP" | "OVERFLOW_CELL" | "CLIP";
}

export type GoogleSpreadsheetColor = {
    /** Must be between 0.0 and 1.0. */
    red?: number;
    /** Must be between 0.0 and 1.0. */
    green?: number;
    /** Must be between 0.0 and 1.0. */
    blue?: number;
} | object;

