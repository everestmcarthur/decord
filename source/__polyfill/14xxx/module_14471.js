// Module ID: 14471
// Function ID: 14472
// Dependencies: []

// Module 14471

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
