// Module ID: 14964
// Function ID: 14965
// Name: useHighlightSettingItem
// Dependencies: [14960, 2]
// Exports: useHighlightSettingItem

// Module 14964 (useHighlightSettingItem)
import UserSettingSearchStore from "UserSettingSearchStore" /* 14960 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  closure_0 = setting;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
};
