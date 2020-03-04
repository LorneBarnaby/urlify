import {GenerateQuery} from '../index';

test('Generate Query text', ()=>{
    expect(GenerateQuery({a : 1, b : 2, c : 3}).text).toBe("a=1&b=2&c=3");
});

test('Count params', ()=>{
    expect(GenerateQuery({a : 1, b : 2, c : 3}).paramCount).toBe(3);
});

