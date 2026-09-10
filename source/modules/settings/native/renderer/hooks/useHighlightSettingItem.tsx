// Module ID: 14724
// Function ID: 14725
// Name: useHighlightSettingItem
// Dependencies: [14720, 2]
// Exports: useHighlightSettingItem

// Module 14724 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 14720 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};
