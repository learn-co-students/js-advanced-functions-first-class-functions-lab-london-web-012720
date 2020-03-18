// Code your solution in this file!
function returnFirstTwoDrivers(arr){
    return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(arr.length - 2, arr.length);
}

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(returnLastTwoDrivers(days));

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier(multiply_value){
    return function(value){
        return value * multiply_value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func){
    if (func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers);
    }else if (func === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}