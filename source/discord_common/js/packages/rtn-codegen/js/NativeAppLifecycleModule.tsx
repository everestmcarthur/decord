// Module ID: 9521
// Function ID: 9522
// Name: enforcing
// Dependencies: [17, 2]

// Module 9521 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppLifecycleModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppLifecycleModule.tsx");

export default enforcing;
