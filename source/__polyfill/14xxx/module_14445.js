// Module ID: 14445
// Function ID: 14446
// Dependencies: []

// Module 14445

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
