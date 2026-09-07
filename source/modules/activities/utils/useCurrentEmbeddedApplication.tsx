// Module ID: 9637
// Function ID: 9638
// Name: useCurrentEmbeddedApplication
// Dependencies: [32, 9638, 7168, 2]
// Exports: default

// Module 9637 (useCurrentEmbeddedApplication)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7168 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 9638 */;
import closure_2 from "_slicedToArray" /* 32 */;

const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

export default function useCurrentEmbeddedApplication() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = useCurrentEmbeddedActivityDefault();
  if (null == tmp) {
    let items = [];
  } else {
    items = [tmp.applicationId];
  }
  const first = callback(useGetOrFetchApplicationsDefault(items, flag), 1)[0];
  return first;
};
