// Module ID: 9823
// Function ID: 9824
// Name: StageChannelUpsellCardStore
// Dependencies: [1963, 1244, 510, 1249, 4229, 2]
// Exports: useStageChannelUpsellCardStore

// Module 9823 (StageChannelUpsellCardStore)
import Storage2 from "Storage" /* 510 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 1963 */;
import _mod4229 from "module_4229" /* 4229 */;
import identity from "module_1244" /* 1244 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = GuildScheduledEventsConstants.GUILD_EVENT_STAGE_UPSELL_CARD_KEY;
let closure_3 = identity.createWithEqualityFn((arg0) => {
  _require = arg0;
  const obj = { hasSeenUpsellCard: null, markAsSeen: null };
  let Storage = require("Storage").Storage;
  obj.hasSeenUpsellCard = true === Storage.get(closure_2);
  obj.markAsSeen = function markAsSeen() {
    const Storage = Storage2.Storage;
    const result = Storage.set(closure_2, true);
    ReactBatchUpdates.batchUpdates(() => closure_1_0({ hasSeenUpsellCard: true }));
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx");

export const useStageChannelUpsellCardStore = function useStageChannelUpsellCardStore() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
    return items;
  }, _mod4229.shallow);
};
