// Module ID: 17434
// Function ID: 17435
// Name: enforcing
// Dependencies: [17, 2]

// Module 17434 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeOnDemandResourceModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeOnDemandResourceModule.tsx");

export default enforcing;
