// Module ID: 12644
// Function ID: 12645
// Name: usePowerupGroupConfig
// Dependencies: [19, 1979, 504, 8251, 1114, 2428, 12645, 12646, 1369, 2]
// Exports: default

// Module 12644 (usePowerupGroupConfig)
import util from "util" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import _modDef2428 from "module_2428" /* 2428 */;
import GuildTagUtils from "GuildTagUtils" /* 8251 */;
import _modDef12645 from "module_12645" /* 12645 */;
import _modDef12646 from "module_12646" /* 12646 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx");

export default function usePowerupGroupConfig(arg0, arg1) {
  _require = arg0;
  const group = arg1;
  const items = [GuildStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let guildSupportsTagsResult = null != guild;
    if (guildSupportsTagsResult) {
      guildSupportsTagsResult = GuildTagUtils.guildSupportsTags(guild);
    }
    return guildSupportsTagsResult;
  });
  const items1 = [arg1, stateFromStores];
  return noop.useMemo(() => {
    if ("guildTagsBadgePacks" === group.group) {
      const obj2 = { title: null, description: null, image: null, disabledReason: null, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
      const intl = util.intl;
      obj2.title = intl.string(_modDef2428.KC9HRW);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2428.GJiSmP);
      const obj3 = { staticUrl: _modDef12645, animatedUrl: _modDef12646 };
      obj2.image = obj3;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef2428.lvk1Gc);
      }
      obj2.disabledReason = stringResult;
      return obj2;
    } else {
      GlobalUtils.assertNever(tmp.group);
    }
  }, items1);
};
