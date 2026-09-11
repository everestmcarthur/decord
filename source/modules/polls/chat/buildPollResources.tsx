// Module ID: 11817
// Function ID: 11818
// Name: buildPollResources
// Dependencies: [11813, 12, 2]

// Module 11817 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 11813 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
