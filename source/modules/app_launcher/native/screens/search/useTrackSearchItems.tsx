// Module ID: 12176
// Function ID: 12177
// Name: useTrackSearchItems
// Dependencies: [19, 11287, 8838, 1250, 7575, 2]
// Exports: useTrackSearchItems

// Module 12176 (useTrackSearchItems)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/useTrackSearchItems.tsx");

export const useTrackSearchItems = function useTrackSearchItems(callback3, memo1, set) {
  _require = callback3;
  dependencyMap = memo1;
  noop = set;
  const entrypoint = require("AppLauncherContext").useAppLauncherContext().entrypoint;
  closure_4 = noop.useRef({});
  noop.useRef(set);
  let obj2 = { handleViewableItemsChanged: null };
  const items = [entrypoint, callback3, memo1, set];
  obj2.handleViewableItemsChanged = noop.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (ref.current !== current) {
      ref.current = current;
      ref.current = {};
    }
    const item = viewableItems.forEach((isViewable) => {
      if (isViewable.isViewable) {
        const tmp2 = callback3(isViewable.item);
        if (null != tmp2) {
          if (null == ref.current[tmp2]) {
            ref.current[tmp2] = true;
            ({ applicationId, commandId } = dependencyMap(isViewable.item));
            const tmp5 = dependencyMap(isViewable.item);
            const obj2 = { type: closure_0(1250).ImpressionTypes.VIEW, name: closure_0(1250).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM, properties: null };
            const obj3 = { location: closure_0(7575).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application_id: applicationId, command_id: commandId, search_results_position: isViewable.index, query, source };
            obj2.properties = obj3;
            closure_0(8838).trackImpression(obj2, false);
            const obj = closure_0(8838);
          }
        }
      }
    });
  }, items);
  return obj2;
};
