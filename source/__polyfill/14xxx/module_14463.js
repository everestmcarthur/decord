// Module ID: 14463
// Function ID: 14464
// Dependencies: []

// Module 14463

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
