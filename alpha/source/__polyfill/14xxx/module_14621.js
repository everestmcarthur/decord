// Module ID: 14621
// Function ID: 14622
// Dependencies: []

// Module 14621

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
