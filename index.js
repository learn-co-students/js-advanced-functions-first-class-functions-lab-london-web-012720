// Code your solution in this file!

const returnFirstTwoDrivers = input => {
  return input.slice(0, 2);
};

const returnLastTwoDrivers = input => {
  return input.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplyValue => {
  return function(value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, whichDrivers) {
  return whichDrivers(drivers);
};
