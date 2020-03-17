const returnFirstTwoDrivers = drivers => {
  const newArr = drivers.slice(0, 2);
  return newArr;
};
const returnLastTwoDrivers = drivers => {
  const newArr = drivers.slice(-2);
  return newArr;
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = multiplyValue => {
  return function(value) {
    return multiplyValue * value;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (drivers, whichDrivers) => {
    return whichDrivers(drivers);
  };
