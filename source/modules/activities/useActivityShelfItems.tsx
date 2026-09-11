// Module ID: 12132
// Function ID: 12133
// Name: useActivityShelfItems
// Dependencies: [19, 8945, 504, 12133, 12134, 12135, 2]
// Exports: default

// Module 12132 (useActivityShelfItems)
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8945 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityShelfItems.tsx");

export default function useActivityShelfItems(enableFilter) {
  let flag = enableFilter.enableFilter;
  if (flag === undefined) {
    flag = false;
  }
  let items = [DeveloperActivityShelfStore];
  const filter = flag(504).useStateFromStoresObject(items, () => ({ filter: filter.getFilter() })).filter;
  const obj = flag(504);
  const activityShelfData = flag(12133).useActivityShelfData(enableFilter.guildId);
  const tmp2 = filter(12134)(activityShelfData);
  dependencyMap = tmp2;
  const obj2 = flag(12133);
  const developerActivityShelfItems = flag(12135).useDeveloperActivityShelfItems();
  const items1 = [developerActivityShelfItems, flag, filter, tmp2];
  return developerActivityShelfItems.useMemo(() => {
    function shouldKeepShelfItem(application) {
      let tmp = !flag;
      if (flag) {
        let hasItem = "" === filter;
        if (!hasItem) {
          const formatted = application.application.name.toLowerCase();
          hasItem = formatted.includes(str.toLowerCase());
        }
        tmp = hasItem;
        str = filter;
      }
      return tmp;
    }
    const items = [...developerActivityShelfItems];
    const found = items.filter(shouldKeepShelfItem);
    for (const item10023 of closure_2) {
      let tmp = item10023;
      let hasItem = set.has(item10023.application.id);
      let shouldKeepShelfItemResult = !hasItem;
      if (!hasItem) {
        shouldKeepShelfItemResult = shouldKeepShelfItem(tmp);
      }
      if (shouldKeepShelfItemResult) {
        let arr = found.push(tmp);
      }
      continue;
    }
    return found;
  }, items1);
};
