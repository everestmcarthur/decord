// Module ID: 5622
// Function ID: 5623
// Name: guild_member_verification/MemberVerificationModalActionCreators
// Dependencies: [5111, 1074, 1242, 5599, 4810, 5623, 1896, 2]

// Module 5622 (guild_member_verification/MemberVerificationModalActionCreators)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5599 */;
import MemberVerificationConstants from "MemberVerificationConstants" /* 5111 */;
import size from "module_2" /* 2 */;

({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: closure_4 } = MemberVerificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, connect) {
    const verificationForm = MemberVerificationActionCreatorsDefault.fetchVerificationForm(guildId);
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, guild_id: guildId });
    const obj3 = { type, guild_id: guildId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(5623, dependencyMap.paths), { guildId, onClose: connect }, React4);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      const obj2 = { type };
      AnalyticsUtilsDefault.track(AnalyticEvents.MODAL_DISMISSED, obj2);
    }
    ModalActionCreatorsDefault.popWithKey(React4);
  }
};
