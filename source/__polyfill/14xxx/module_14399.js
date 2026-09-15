// Module ID: 14399
// Function ID: 14400
// Dependencies: []

// Module 14399

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
