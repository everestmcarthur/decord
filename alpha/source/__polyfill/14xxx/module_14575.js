// Module ID: 14575
// Function ID: 14576
// Dependencies: []

// Module 14575

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
