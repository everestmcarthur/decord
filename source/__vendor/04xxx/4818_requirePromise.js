// Module ID: 4818
// Function ID: 4819
// Name: requirePromise
// Dependencies: []

// Module 4818 (requirePromise)

export default function requirePromise() {
  if (typeof Promise !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
    throw typeError;
  }
};
