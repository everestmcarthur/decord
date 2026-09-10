// Module ID: 14378
// Function ID: 14379
// Dependencies: []

// Module 14378

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
