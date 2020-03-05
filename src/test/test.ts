import {generateQuery} from '../index';

test('Generate Query text', ()=>{
    expect(generateQuery({a : 1, b : 2, c : 3}).text).toBe("a=1&b=2&c=3");
});

test('Count params', ()=>{
    expect(generateQuery({a : 1, b : 2, c : 3}).paramCount).toBe(3);
});

