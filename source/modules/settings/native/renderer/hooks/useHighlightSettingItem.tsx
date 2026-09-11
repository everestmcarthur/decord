// Module ID: 14750
// Function ID: 14751
// Name: useHighlightSettingItem
// Dependencies: [14746, 2]
// Exports: useHighlightSettingItem

// Module 14750 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 14746 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};
