// Module ID: 11861
// Function ID: 11862
// Name: QuestHomeNavigationStore
// Dependencies: [4476, 2]

// Module 11861 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4476 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
