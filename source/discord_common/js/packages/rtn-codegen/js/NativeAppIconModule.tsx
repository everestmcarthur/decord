// Module ID: 13368
// Function ID: 13369
// Name: enforcing
// Dependencies: [17, 2]

// Module 13368 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppIconModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppIconModule.tsx");

export default enforcing;
