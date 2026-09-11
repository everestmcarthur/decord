// Module ID: 14356
// Function ID: 14357
// Dependencies: []

// Module 14356

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
