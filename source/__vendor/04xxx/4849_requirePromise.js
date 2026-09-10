// Module ID: 4849
// Function ID: 4850
// Name: requirePromise
// Dependencies: []

// Module 4849 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
