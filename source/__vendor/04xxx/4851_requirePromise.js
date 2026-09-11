// Module ID: 4851
// Function ID: 4852
// Name: requirePromise
// Dependencies: []

// Module 4851 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
