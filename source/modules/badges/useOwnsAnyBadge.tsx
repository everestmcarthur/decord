// Module ID: 17180
// Function ID: 17181
// Name: useOwnsAnyBadge
// Dependencies: [1372, 8422, 504, 8416, 8472, 2]
// Exports: default

// Module 17180 (useOwnsAnyBadge)
import useBadgesDefault from "useBadges" /* 8472 */;
import UserStore from "UserStore" /* 1372 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8422 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/useOwnsAnyBadge.tsx");

export default function useOwnsAnyBadge() {
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj = stateFromStores(504);
  const items1 = [BadgeDirectoryStore];
  const items2 = [stateFromStores];
  let stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => {
    let someResult = null;
    if (null != stateFromStores) {
      someResult = null;
      if (BadgeDirectoryStore.hasCatalogFor(tmp)) {
        const badges = obj.getBadges(tmp);
        someResult = badges.some((owned) => owned.owned);
      }
      obj = BadgeDirectoryStore;
    }
    return someResult;
  }, items2);
  const obj2 = stateFromStores(504);
  if (stateFromStores1 == null) {
    stateFromStores1 = useBadgesDefault(tmp3).length > 0;
  }
  return stateFromStores1;
};
