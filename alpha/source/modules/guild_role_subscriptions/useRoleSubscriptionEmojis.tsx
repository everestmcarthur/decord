// Module ID: 18119
// Function ID: 18120
// Name: useRoleSubscriptionEmojis
// Dependencies: [19, 5629, 504, 5634, 2]
// Exports: default

// Module 18119 (useRoleSubscriptionEmojis)
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5629 */;

const require = globalThis.__r;

const require = fn;
let items = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx");

export default function useRoleSubscriptionEmojis(arg0) {
  _require = arg0;
  items = [EmojiStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => EmojiStore.getGuildEmoji(closure_0), items1);
  const items2 = [stateFromStores, arg0];
  return noop.useMemo(() => {
    if (null == stateFromStores) {
      let found = items;
    } else {
      found = stateFromStores.filter((item) => closure_0(stateFromStores[3]).isRoleSubscriptionEmoji(item, closure_1_0));
    }
    return found;
  }, items2);
};
export const NO_EMOJIS_AVAILABLE = items;
