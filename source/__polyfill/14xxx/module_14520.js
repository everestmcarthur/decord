// Module ID: 14520
// Function ID: 14521
// Dependencies: []

// Module 14520

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
