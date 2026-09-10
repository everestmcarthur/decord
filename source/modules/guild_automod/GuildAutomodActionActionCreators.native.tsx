// Module ID: 11932
// Function ID: 11933
// Name: GuildAutomodActionActionCreators
// Dependencies: [19, 11933, 21, 4808, 11937, 1896, 4950, 11940, 2]
// Exports: getPromiseableActionHandlers, openAutomodProfileQuarantineAlert, openConfirmRemoveMentionRaid, openRaidResolveModal, openSubmitFeedback

// Module 11932 (GuildAutomodActionActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4950 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(11933);
({ AutomodActionType: c3, SUBMIT_FEEDBACK_MODAL_KEY: closure_4 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export const getPromiseableActionHandlers = function getPromiseableActionHandlers() {
  return { [closure_1_3.BLOCK_MESSAGE]: null, [closure_1_3.FLAG_TO_CHANNEL]: null, [closure_1_3.USER_COMMUNICATION_DISABLED]: null };
};
export const openSubmitFeedback = function openSubmitFeedback(messageId, content, decisionId, channel) {
  const obj2 = {
    onCloseModal() {
      ModalActionCreatorsDefault.popWithKey(closure_1_4);
    },
    automodDecision: { messageId, messageContent: content, decisionId, channel }
  };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11937, dependencyMap.paths), obj2, React4);
};
export function openRaidResolveModal() {

}
export function openConfirmRemoveMentionRaid() {

}
export const openAutomodProfileQuarantineAlert = function openAutomodProfileQuarantineAlert(guildId) {
  closure_0 = guildId;
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(11940, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          return <closure_0 />;
        };
      });
    }
  });
};
