"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
test('Generate Query text', () => {
    expect(index_1.generateQuery({ a: 1, b: 2, c: 3 }).text).toBe("a=1&b=2&c=3");
});
test('Count params', () => {
    expect(index_1.generateQuery({ a: 1, b: 2, c: 3 }).paramCount).toBe(3);
});
