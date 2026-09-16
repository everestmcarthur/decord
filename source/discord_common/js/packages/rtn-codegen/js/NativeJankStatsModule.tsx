// Module ID: 17620
// Function ID: 17621
// Name: NativeJankStatsModule
// Dependencies: [17, 2]

// Module 17620 (NativeJankStatsModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeJankStatsModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx");

export default enforcing;
