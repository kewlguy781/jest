import {
  // methods,
  // methods,
  originalArray,
  doubleArray,
  evensOnlyArray,
} from '../app'

// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('doubleArray Test', ()=> {
  test('doubleArray, make sure it doubled the array', ()=>{
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8])
  })
})

describe("return array with all even numbers", ()=> {
  test("evensOnlyArray",()=> {
    expect (evensOnlyArray([1,2,3,4,5,6,7,8])).toEqual([2,4,6,8])
  })
})

