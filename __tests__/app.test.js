import {
  // methods,
  // methods,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
} from '../app'

// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

//double
describe('doubleArray Test', ()=> {
  test('doubleArray, make sure it doubled the array', ()=>{
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8])
  })
})

//even
describe('evenArray Test', ()=> {
  test('return array on even only', ()=>{
    expect(evensOnlyArray([1,2,3,4,5,6,7,8])).toEqual([2,4,6,8])
  })
})

//sum
describe("return on the sum", ()=> {
  test('return the sum of the array', ()=>{
    expect(arraySum([1,2,3,4])).toEqual(10)
  })
})

// return true if every item < 0
describe('greater than 0', ()=> {
  test('return true if every item is greater than 0', ()=>{
    expect(allNumbersGreaterThanZero([1, 2, 3, 4])).toEqual(true)
  })
})

describe('return true if one or more items in array are odd', ()=>{
  test('return true if one of more items are odd', ()=>{
  expect(someNumbersAreOdd([1,2,3,4])).toEqual(true)
  })
})

describe('double and even', ()=> {
  test('return array that are doubled and is even',()=>{
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8])
  })
})
