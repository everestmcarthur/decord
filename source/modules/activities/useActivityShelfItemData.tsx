// Module ID: 17226
// Function ID: 17227
// Name: useActivityShelfItemData
// Dependencies: [19, 12134, 2]
// Exports: useActivityShelfItemData

// Module 17226 (useActivityShelfItemData)
import useActivityShelfItemsDefault from "useActivityShelfItems" /* 12134 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = function useActivityShelfItemData(guild_id1, applicationId) {
  closure_0 = applicationId;
  const tmp = useActivityShelfItemsDefault({ guildId: guild_id1 });
  closure_1 = tmp;
  const items = [tmp, applicationId];
  return noop.useMemo(() => {
    let found = closure_1.find((application) => application.application.id === applicationId);
    if (found == null) {
      found = null;
    }
    return found;
  }, items);
};
