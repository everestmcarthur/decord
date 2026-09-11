// Module ID: 14354
// Function ID: 14355
// Dependencies: []

// Module 14354

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
