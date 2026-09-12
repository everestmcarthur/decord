// Module ID: 14435
// Function ID: 14436
// Dependencies: []

// Module 14435

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
