// Module ID: 4884
// Function ID: 4885
// Name: requirePromise
// Dependencies: []

// Module 4884 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
