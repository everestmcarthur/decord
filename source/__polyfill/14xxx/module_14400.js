// Module ID: 14400
// Function ID: 14401
// Dependencies: []

// Module 14400

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
