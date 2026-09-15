// Module ID: 4883
// Function ID: 4884
// Name: requirePromise
// Dependencies: []

// Module 4883 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
