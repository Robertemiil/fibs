import merge from "./merge.js";

test('return the array sorted in ascending order',()=>{
    expect(merge([33,5,8])).toEqual([5,8,33]);
})