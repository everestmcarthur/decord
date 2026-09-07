// Module ID: 11627
// Function ID: 11628
// Name: enforcing
// Dependencies: [17, 2]

// Module 11627 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeCommandClipboardModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeCommandClipboardModule.tsx");

export default enforcing;
