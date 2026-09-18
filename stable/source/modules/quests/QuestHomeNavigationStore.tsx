// Module ID: 11773
// Function ID: 11774
// Name: QuestHomeNavigationStore
// Dependencies: [4429, 2]

// Module 11773 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4429 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
