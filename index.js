// Code your solution in this file!
 const returnFirstTwoDrivers = (arrayFirst) => {
    return arrayFirst.slice(0, 2)
 }
 const returnLastTwoDrivers = (arrayLast) => {
    return arrayLast.slice(-2)
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 const createFareMultiplier = (n1) => {
    return function () { return n1 * n1}
 }

 const fareDoubler = (n2) => {
    return n2 * 2
 }

 const fareTripler = (n3) => {
    return n3 * 3
 }

 const selectDifferentDrivers = (arrayOfDrivers, func) => {
    return func(arrayOfDrivers)
 }