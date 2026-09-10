// Module ID: 10369
// Function ID: 10370
// Name: RoleSubscriptionEmojiUpsellAlert
// Dependencies: [19, 1979, 1964, 21, 9384, 1114, 1477, 504, 5570, 5044, 10370, 9392, 2]
// Exports: default

// Module 10369 (RoleSubscriptionEmojiUpsellAlert)
import util from "util" /* 1114 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5570 */;
import _modDef9384 from "module_9384" /* 9384 */;
import CreatorRevenueButton from "CreatorRevenueButton" /* 10370 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = globalThis.__r;

require = fn;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx");

export default function RoleSubscriptionEmojiUpsellAlert(arg0) {
  ({ guildId: require, onClose } = arg0);
  let stateFromStores;
  function handleConfirm() {
    const result = GuildActionCreatorsDefault.transitionToGuildSync(require, undefined, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    if (onClose != null) {
      onClose();
    }
  }
  const size = onClose(stateFromStores[6])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
  const items = [GuildStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let guild = null;
    if (null != require) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  });
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items1 = [name];
  const memo = handleConfirm.useMemo(() => {
    let name;
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    const obj = { image: _modDef9384, title: null, description: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.cBjkcx);
    const intl2 = util.intl;
    obj.description = intl2.formatToPlainString(util.t["h0u/Hi"], { serverName: name });
    return obj;
  }, items1);
  const obj2 = { cancelText: null, onClose: null, renderConfirmButton: null, children: null };
  let obj = require("initialize");
  let intl = tmp4(tmp2[5]).intl;
  obj2.cancelText = intl.string(require("util").t.cpT0Cq);
  obj2.onClose = onClose;
  obj2.renderConfirmButton = function renderConfirmButton() {
    const obj = { onPress: handleConfirm, text: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.p8FG1D);
    return jsx(CreatorRevenueButton.CreatorRevenueButton, { onPress: handleConfirm, text: null });
  };
  obj2.children = jsx(require("PremiumUpsellAlert").PremiumUpsellItem, { alertWidth: diff, upsellItem: memo });
  return jsx(onClose(stateFromStores[9]), { cancelText: null, onClose: null, renderConfirmButton: null, children: null });
};
