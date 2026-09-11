// Module ID: 13005
// Function ID: 13006
// Dependencies: []
// Exports: getSDKSource, isBrowserBundle

// Module 13005

export function getSDKSource() {
  return "npm";
}
export const isBrowserBundle = function isBrowserBundle() {
  let prop = typeof globalThis.__SENTRY_BROWSER_BUNDLE__ !== "undefined";
  if (typeof globalThis.__SENTRY_BROWSER_BUNDLE__ !== "undefined") {
    prop = globalThis.__SENTRY_BROWSER_BUNDLE__;
  }
  return prop;
};
