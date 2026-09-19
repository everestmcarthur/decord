// Module ID: 11818
// Function ID: 11819
// Name: GuildRoleConnectionsModalActionCreators
// Dependencies: [4959, 11819, 1980, 4723, 11811, 2]
// Exports: makeGuildRoleConnectionsConnectAccountsActionSheetKey, openGuildRoleConnectionsConnectAccountModal, openGuildRoleConnectionsModal

// Module 11818 (GuildRoleConnectionsModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  ModalActionCreatorsDefault.pushLazy(onClose(1980)(11819, dependencyMap.paths), {
    guildId: guildId.guildId,
    onClose() {
      ModalActionCreatorsDefault.popWithKey(ROLE_CONNECTIONS_MODAL_KEY);
      if (onClose != null) {
        onClose();
      }
    }
  }, ROLE_CONNECTIONS_MODAL_KEY);
};
export const makeGuildRoleConnectionsConnectAccountsActionSheetKey = function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
};
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11811, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + verificationRole.id, { role: verificationRole, guildId });
};
