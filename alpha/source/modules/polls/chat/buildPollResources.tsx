// Module ID: 11964
// Function ID: 11965
// Name: buildPollResources
// Dependencies: [11960, 12, 2]

// Module 11964 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 11960 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
