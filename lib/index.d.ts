interface QueryString {
    text?: string;
    paramCount?: number;
    original?: object;
}
export declare const generateQuery: (parameters: object) => QueryString;
export {};
