// Module ID: 14069
// Function ID: 14070
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8132, 4841, 14070, 1897, 2]
// Exports: openReportRaidModal

// Module 14069 (GuildAntiRaidModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8132 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14070, dependencyMap.paths), {
    onCloseModal() {
      ModalActionCreatorsDefault.popWithKey(closure_1_3);
    },
    guildId: id
  }, closure_3);
};
