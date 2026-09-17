// Module ID: 12269
// Function ID: 12270
// Name: useFetchDeveloperActivityShelfItems
// Dependencies: [19, 9010, 9656, 1936, 504, 9658, 2]
// Exports: useFetchDeveloperActivityShelfItems

// Module 12269 (useFetchDeveloperActivityShelfItems)
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9658 */;
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 9010 */;

require = fn;
const DevShelfFetchState = fn(9010).DevShelfFetchState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useFetchDeveloperActivityShelfItems.tsx");

export const useFetchDeveloperActivityShelfItems = function useFetchDeveloperActivityShelfItems() {
  isActivitiesEnabledForCurrentPlatform = isActivitiesEnabledForCurrentPlatform(setting[2]).useIsActivitiesEnabledForCurrentPlatform();
  const DeveloperMode = isActivitiesEnabledForCurrentPlatform(setting[3]).DeveloperMode;
  setting = DeveloperMode.getSetting();
  let obj = isActivitiesEnabledForCurrentPlatform(setting[2]);
  const items = [DeveloperActivityShelfStore];
  const stateFromStores = isActivitiesEnabledForCurrentPlatform(setting[4]).useStateFromStores(items, () => fetchState.getFetchState(), []);
  const items1 = [isActivitiesEnabledForCurrentPlatform, stateFromStores, setting];
  const effect = stateFromStores.useEffect(() => {
    let tmp = isActivitiesEnabledForCurrentPlatform;
    if (isActivitiesEnabledForCurrentPlatform) {
      tmp = setting;
    }
    if (tmp) {
      tmp = stateFromStores === DevShelfFetchState.INITIALIZED;
    }
    if (tmp) {
      const developerApplications = EmbeddedActivitiesActionCreators.fetchDeveloperApplications();
    }
  }, items1);
  return null;
};
