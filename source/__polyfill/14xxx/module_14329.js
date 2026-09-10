// Module ID: 14329
// Function ID: 14330
// Dependencies: []

// Module 14329

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
