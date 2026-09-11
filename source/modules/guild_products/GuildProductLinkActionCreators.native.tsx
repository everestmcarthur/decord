// Module ID: 13039
// Function ID: 13040
// Name: GuildProductLinkActionCreators
// Dependencies: [4952, 1114, 2]
// Exports: openGuildProductLink

// Module 13039 (GuildProductLinkActionCreators)
import util from "util" /* 1114 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4952 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink() {
  const obj2 = { body: null, confirmText: null };
  const intl = util.intl;
  obj2.body = intl.string(util.t["mYlo/T"]);
  const intl2 = util.intl;
  obj2.confirmText = intl2.string(util.t.BddRzS);
  actions_AlertActionCreatorsDefault.show(obj2);
};
