// Module ID: 12281
// Function ID: 12282
// Name: useActivityShelfItems
// Dependencies: [19, 9094, 504, 12282, 12283, 12284, 2]
// Exports: default

// Module 12281 (useActivityShelfItems)
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 9094 */;

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
  const activityShelfData = flag(12282).useActivityShelfData(enableFilter.guildId);
  const tmp2 = filter(12283)(activityShelfData);
  dependencyMap = tmp2;
  const obj2 = flag(12282);
  const developerActivityShelfItems = flag(12284).useDeveloperActivityShelfItems();
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
