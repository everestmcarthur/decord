// Module ID: 512
// Function ID: 513
// Name: NativeCacheModule
// Dependencies: [17, 2]

// Module 512 (NativeCacheModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeCacheModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeCacheModule.tsx");

export default enforcing;
