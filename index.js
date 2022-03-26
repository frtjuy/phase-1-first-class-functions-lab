// Code your solution in this file!

function returnFirstTwoDrivers(array) {
    return array.slice(0,2);
};

function returnLastTwoDrivers(array) {
    return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; //= [returnFirstTwoDrivers(), returnLastTwoDrivers()];

function createFareMultiplier(multiplier) {
    return function(fare){
        return fare*multiplier
    }
};

function selectDifferentDrivers(arrayOfDrivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    };
    if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    };
};

function fareDoubler(fare) {
    return createFareMultiplier(fare)(2)
}

function fareTripler(fare) {
    return createFareMultiplier(fare)(3)
}