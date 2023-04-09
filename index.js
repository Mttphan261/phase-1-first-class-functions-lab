// Code your solution in this file!
const returnFirstTwoDrivers = function([Antonia, Nuru, Amari, Mo]) {
    return [Antonia, Nuru ];
}
const returnLastTwoDrivers = function([Antonia, Nuru, Amari, Mo]) {
    return [Amari, Mo ];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareMultiplier) {
    return function(fare) {
        return fare * fareMultiplier;
    }
}

const initialFare = createFareMultiplier();

function fareDoubler(initialFare) {
    return initialFare * 2;
}

function fareTripler(initialFare) {
    return initialFare * 3;
}

function selectDifferentDrivers([Antonia, Nuru, Amari, Mo], driverFunction) {
    if (driverFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers ([Antonia, Nuru, Amari, Mo])
    }
    else if (driverFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers ([Antonia, Nuru, Amari, Mo])

    }
}

