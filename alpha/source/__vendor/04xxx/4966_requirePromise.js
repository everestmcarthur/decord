// Module ID: 4966
// Function ID: 4967
// Name: requirePromise
// Dependencies: []

// Module 4966 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
