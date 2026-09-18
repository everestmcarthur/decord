// Module ID: 14566
// Function ID: 14567
// Dependencies: []

// Module 14566

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
