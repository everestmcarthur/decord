// Module ID: 12134
// Function ID: 12135
// Name: useActivityShelfItems
// Dependencies: [19, 8947, 504, 12135, 12136, 12137, 2]
// Exports: default

// Module 12134 (useActivityShelfItems)
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8947 */;

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
  const activityShelfData = flag(12135).useActivityShelfData(enableFilter.guildId);
  const tmp2 = filter(12136)(activityShelfData);
  dependencyMap = tmp2;
  const obj2 = flag(12135);
  const developerActivityShelfItems = flag(12137).useDeveloperActivityShelfItems();
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
