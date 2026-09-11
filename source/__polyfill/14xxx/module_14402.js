// Module ID: 14402
// Function ID: 14403
// Dependencies: []

// Module 14402

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
