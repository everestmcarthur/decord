// Module ID: 11839
// Function ID: 11840
// Name: QuestHomeNavigationStore
// Dependencies: [4474, 2]

// Module 11839 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4474 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
