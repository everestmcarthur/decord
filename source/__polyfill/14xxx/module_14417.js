// Module ID: 14417
// Function ID: 14418
// Dependencies: []

// Module 14417

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
