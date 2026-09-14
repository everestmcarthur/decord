// Module ID: 11699
// Function ID: 11700
// Name: GuildRoleConnectionsModalActionCreators
// Dependencies: [4839, 11700, 1896, 4603, 11692, 2]
// Exports: makeGuildRoleConnectionsConnectAccountsActionSheetKey, openGuildRoleConnectionsConnectAccountModal, openGuildRoleConnectionsModal

// Module 11699 (GuildRoleConnectionsModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  ModalActionCreatorsDefault.pushLazy(onClose(1896)(11700, dependencyMap.paths), {
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
  obj.openLazy(asyncRequireImpl(11692, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + verificationRole.id, { role: verificationRole, guildId });
};
