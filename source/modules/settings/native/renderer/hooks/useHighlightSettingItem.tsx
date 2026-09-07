// Module ID: 14698
// Function ID: 14699
// Name: useHighlightSettingItem
// Dependencies: [14694, 2]
// Exports: useHighlightSettingItem

// Module 14698 (useHighlightSettingItem)
import closure_0 from "zustandStore" /* 14694 */;

const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = function useHighlightSettingItem(setting) {
  const React = setting;
  return React.useState((selected) => selected.selected === closure_0);
};
