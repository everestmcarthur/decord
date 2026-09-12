// Module ID: 14389
// Function ID: 14390
// Dependencies: []

// Module 14389

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
