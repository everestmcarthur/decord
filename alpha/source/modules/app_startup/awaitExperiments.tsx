// Module ID: 14465
// Function ID: 14466
// Name: awaitExperiments
// Dependencies: [9406, 2]
// Exports: beginLoadedExperimentsTimeout, getPromise, onExperimentsLoaded

// Module 14465 (awaitExperiments)
import Future from "Future" /* 9406 */;
import size from "module_2" /* 2 */;

const future = new Future.Future();
let closure_1 = null;
const result = size.fileFinishedImporting("modules/app_startup/awaitExperiments.tsx");

export const beginLoadedExperimentsTimeout = function beginLoadedExperimentsTimeout() {
  const timeout = setTimeout(() => {
    future.resolve();
    c1 = null;
  }, 1000);
};
export const onExperimentsLoaded = function onExperimentsLoaded() {
  if (null != closure_1) {
    future.resolve();
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_1);
  }
};
export const getPromise = function getPromise() {
  return future.promise;
};
