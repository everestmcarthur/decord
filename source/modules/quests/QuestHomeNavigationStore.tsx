// Module ID: 11919
// Function ID: 11920
// Name: QuestHomeNavigationStore
// Dependencies: [4510, 2]

// Module 11919 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4510 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
