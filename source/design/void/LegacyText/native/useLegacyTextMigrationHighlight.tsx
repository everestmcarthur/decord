// Module ID: 8706
// Function ID: 8707
// Name: useLegacyTextMigrationHighlight
// Dependencies: [4606, 4607, 576, 504, 2]
// Exports: useLegacyTextMigrationHighlight

// Module 8706 (useLegacyTextMigrationHighlight)
import nativeDefault from "native" /* 576 */;
import DevSettingsStore from "DevSettingsStore" /* 4606 */;

const require = fn;
const createStyles = fn(4607);
const obj2 = { highlight: { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = function useLegacyTextMigrationHighlight() {
  const tmp = closure_3();
  const items = [DevSettingsStore];
  let highlight = null;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
};
