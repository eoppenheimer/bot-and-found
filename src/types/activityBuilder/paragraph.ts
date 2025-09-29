/**
 * @fileoverview Interface of paragraphs in activites.
 * This is kinda hellish so I've put it aside in its own file.
 * Hopefully you never need to use this.
 * @author {Ezra Oppenheimer}
 */

/** Interface for pargraphs in activites. */
export interface Paragraph {
    /** Beginning of the content sinkhole. */
    content: ContentStart;
    /** Schema key. Use `"document"` for inside activites. Use `"heading"` and `"section"` for collection dividers. Use `"lesson"` for activity commits. */
    schemaKey: "document" | "heading" | "section" | "lesson";
    /** Version number of the paragraph. */
    version: number;
}

/**
 * Initializes a content block.
 * 
 * This is kinda hellish so I hope you never need to use it.
*/
export interface ContentStart {
    /** Type of content. This can only be `"doc"` from the looks of it. */
    type: "doc";
    /** Content sinkhole. */
    content?: ContentElement[];
}

/** Descends. */
export type ContentElement = Heading | BulletList | ParagraphElement;

/** Declares a heading. */
export interface Heading {
    /** Type of content. */
    type: "heading";
    /** Content sinkhole. */
    content?: ContentField[];
    /** Attributes of the heading. */
    attrs: HeadingAttributes;
}

/** Attributes of `Heading`. */
export interface HeadingAttributes {
    /** 1 is biggest. 2 is semi big. 3 is even smaller, although I have only discovered it within lesson plans. */
    level: 1 | 2 | 3;
    /** How to align the heading. If `undefined` then assume `"left"`. */
    alignment?: "center" | "left" | "right";
}

/** Initializes a bullet list. */
export interface BulletList {
    /** Type of content. */
    type: "bullet_list";
    /** Content sinkhole. */
    content: (BulletItem | ContentField)[];
}

/** Individual bullet of a list. */
export interface BulletItem {
    /** Type of content. */
    type: "list_item";
    /** Content sinkhole.
     * 
     * Note: It is VERY UNLIKELY that this will yield another `BulletList`.
     * 
     * While it is technically able to occur, I generally advise against worrying about this. It can only happen in the teacher tips anyways. */
    content: (BulletList | ParagraphElement | ContentText)[];
}

/** Details of paragraph. */
export interface ParagraphElement {
    /** Type of content. */
    type: "paragraph";
    /** Content sinkhole. */
    content?: ContentField[];
}

/** Begininng of markdown for a paragraph. */
export type ContentField = ContentMathQuill | ContentText | AnnotationToken | InterpretiveToken | InlineMathToken | ImageContent;


/** MathQuill to render LaTeX math. */
export interface ContentMathQuill {
    /** Type of content. */
    type: "mq";
    /** Content sinkhole. */
    content: ContentText[];
    /** List of possible styles, including underlined, bold, or italicized. */
    marks?: MarkText[];
}

/** Content text of an annotation token. */
export interface AnnotationToken {
    /** Type of content. */
    type: "annotation";
    /** Attribute data of this annotation token, including its CL variable name. */
    attrs: AnnotationAttributes;
    /** Access with `.content[0]`, since there exists only one entry. */
    content: ContentText[];
}

/** Content of a dynamic CL variable to draw from. */
export interface InterpretiveToken {
    /** Type of content. */
    type: "interp";
    /** Attribute data of this dynamic CL variable. */
    attrs: {interpExpr: string};
    /** List of possible styles, including underlined, bold, or italicized. */
    marks?: MarkText[];
}

export interface InlineMathToken {
    /** Type of content. */
    type: "inlineMath";
    /** Attribute data of this inline math. */
    attrs: {
        /** The identifier of this inline math. @example "in1" */
        inlineId: string;
        isIdSet: boolean;
    }
}

/** Attribute info of an annotation token. */
export interface AnnotationAttributes {
    /** The CL identifier of this annotation. */
    name: string;
    /** 24 character identifier of this annotation. */
    id: string;
    /** Is this annotation invalid? */
    isInvalid: boolean;
}

/** Text label info of an annotation token.  */
export interface AnnotationAttributes {
    /** The CL identifier of this annotation. */
    name: string;
    /** 24 character identifier of this annotation. */
    id: string;
    /** Is this annotation invalid? */
    isInvalid: boolean;
}

/** Content text of a paragraph. */
export interface ContentText {
    /** Type of content. */
    type: "text";
    /** Text content. Kinda annoying that this is optional but have to be EXTRA sure I guess... */
    text?: string;
    /** List of possible styles, including underlined, bold, or italicized. */
    marks?: MarkText[];
}

/** Markup interface possibilities. */
export type MarkText = MarkHyperlink | MarkStyle | MarkColor;

/** Styles text as underlined, bold, or italicized. */
export interface MarkStyle {
    /** Type of style. */
    type: "em" | "strong" | "underline";
    /** @deprecated There shouldn't be any reason to call on this. */
    attrs?: object;
}

/** Markup for hyperlink. */
export interface MarkHyperlink {
    type: "link";
    attrs: Hyperlink;
}

export interface MarkColor {
    type: "color";
    attrs: Color;
}

/** Details of hyperlink */
export interface Hyperlink {
    /** URL to the destination. */
    href: string;
    /** Text stand in for the hyperlink. */
    title: string | null;
    // Unsure.
    target: string;
}

/** Content text of a paragraph. */
export interface ImageContent {
    /** Type of content. */
    type: "image";
    /** The attributes of the image used here. */
    attrs?: ImageContentAttribute;
    /** List of possible styles, including underlined, bold, or italicized. */
    marks?: MarkText[];
}

export interface ImageContentAttribute {
    src: string;
    alt?: string | null;
    title?: string | null;
}

/** Details of color. */
export interface Color {
    /** Hex code of a color. @example 'rgb(0, 105, 228)' @example '#a3f9bc' */
    hex: string;
}

