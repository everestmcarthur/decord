// Module ID: 12010
// Function ID: 12011
// Name: QuestHomeNavigationStore
// Dependencies: [4592, 2]

// Module 12010 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4592 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
