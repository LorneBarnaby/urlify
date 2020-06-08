"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQuery = (parameters) => {
    const query = {};
    query.original = parameters;
    const keys = Object.keys(parameters);
    query.paramCount = keys.length;
    query.text = '';
    const params = Object(parameters);
    if (keys.length > 0) {
        query.text += `${keys[0]}=${encodeURIComponent(params[keys[0]])}`;
        keys.shift();
        for (const param of keys) {
            query.text += `&${param}=${encodeURIComponent(params[param])}`;
        }
    }
    return query;
};
