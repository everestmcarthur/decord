// Module ID: 14629
// Function ID: 14630
// Name: KeyCommandsNativeComponent
// Dependencies: [106, 65, 2]

// Module 14629 (KeyCommandsNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "KeyCommandsView", directEventTypes: { topKeyCommand: { registrationName: "onKeyCommand" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onKeyCommand: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { keyCommands: true };
const value = module_65.get("KeyCommandsView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/KeyCommandsNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
