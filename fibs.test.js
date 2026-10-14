import fibs from "./fibs.js";

test('create a fibonacci sequence and return it in an array with "n" elements',
    ()=>{
        expect(fibs(4)).toEqual([0,1,1,2]);
})
test('return an empty array',
    ()=>{
        expect(fibs([])).toEqual([]);
})