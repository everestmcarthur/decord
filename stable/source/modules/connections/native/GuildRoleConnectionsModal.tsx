// Module ID: 11575
// Function ID: 11576
// Name: GuildRoleConnectionsModal
// Dependencies: [19, 21, 1114, 7377, 6992, 11576, 7000, 2]

// Module 11575 (GuildRoleConnectionsModal)
import util from "util" /* 1114 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const GUILD_ROLE_CONNECTIONS_SCREEN = "GUILD_ROLE_CONNECTIONS_SCREEN";
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModal.tsx");

export default noop.memo((guildId) => {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const items = [guildId, onClose];
  const memo = noop.useMemo(() => {
    closure_1 = onClose;
    let obj = {};
    const obj2 = { title: null, headerLeft: null, headerRight: null, render: null };
    let intl = util.intl;
    obj2.title = intl.string(util.t.ghtnss);
    obj2.headerLeft = function headerLeft() {
      return null;
    };
    obj2.headerRight = function headerRight() {
      const obj = { source: onClose(6992), onPress, accessibilityLabel: null };
      const intl = guildId(1114).intl;
      obj.accessibilityLabel = intl.string(guildId(1114).t.cpT0Cq);
      return jsx(guildId(7377).HeaderActionButton, { source: onClose(6992), onPress, accessibilityLabel: null });
    };
    obj2.render = function render() {
      return jsx(onClose(11576), { guildId, onCloseModal });
    };
    obj[GUILD_ROLE_CONNECTIONS_SCREEN] = obj2;
    return obj;
  }, items);
  return jsx(guildId(7000).Navigator, { screens: memo, initialRouteName: GUILD_ROLE_CONNECTIONS_SCREEN });
});
