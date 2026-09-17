// Module ID: 14425
// Function ID: 14426
// Dependencies: []

// Module 14425

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
