// Module ID: 14050
// Function ID: 14051
// Name: GuildAntiRaidModalActionCreators
// Dependencies: [8120, 4839, 14051, 1896, 2]
// Exports: openReportRaidModal

// Module 14050 (GuildAntiRaidModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8120 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14051, dependencyMap.paths), {
    onCloseModal() {
      ModalActionCreatorsDefault.popWithKey(closure_1_3);
    },
    guildId: id
  }, closure_3);
};
