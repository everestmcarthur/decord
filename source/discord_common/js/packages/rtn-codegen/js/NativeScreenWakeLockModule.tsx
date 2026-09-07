// Module ID: 9645
// Function ID: 9646
// Name: enforcing
// Dependencies: [17, 2]

// Module 9645 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeScreenWakeLockModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeScreenWakeLockModule.tsx");

export default enforcing;
