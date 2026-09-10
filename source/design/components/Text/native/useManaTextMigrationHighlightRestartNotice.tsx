// Module ID: 15740
// Function ID: 15741
// Name: useManaTextMigrationHighlightRestartNotice
// Dependencies: [19, 4573, 504, 4919, 2]
// Exports: useManaTextMigrationHighlightRestartNotice

// Module 15740 (useManaTextMigrationHighlightRestartNotice)
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4919 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4573 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx");

export const useManaTextMigrationHighlightRestartNotice = function useManaTextMigrationHighlightRestartNotice() {
  const items = [DevSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"));
  _require = noop.useRef(true);
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      actions_AlertActionCreatorsDefault.show({ title: "Mana Text Migration Highlighter", body: "Restart the app (force quit and reopen) to see the change." });
    }
  }, items1);
};
