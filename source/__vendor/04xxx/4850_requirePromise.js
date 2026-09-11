// Module ID: 4850
// Function ID: 4851
// Name: requirePromise
// Dependencies: []

// Module 4850 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
