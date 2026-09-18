// Module ID: 14304
// Function ID: 14305
// Dependencies: []

// Module 14304

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
