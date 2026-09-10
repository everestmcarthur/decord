// Module ID: 14424
// Function ID: 14425
// Dependencies: []

// Module 14424

export default Math.trunc || (function trunc(arg0) {
  return 0 < +arg0 ? floor : ceil(+arg0);
});
