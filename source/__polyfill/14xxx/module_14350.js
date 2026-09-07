// Module ID: 14350
// Function ID: 14351
// Dependencies: []

// Module 14350

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
