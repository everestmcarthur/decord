// Module ID: 1548
// Function ID: 1549
// Name: arrayStartsWith
// Dependencies: []
// Exports: arrayStartsWith

// Module 1548 (arrayStartsWith)

export const arrayStartsWith = function arrayStartsWith(routeNames, routeNames2) {
  closure_0 = routeNames;
  return routeNames2.length <= routeNames.length && routeNames2.every((item, index) => item === closure_0[index]);
};
