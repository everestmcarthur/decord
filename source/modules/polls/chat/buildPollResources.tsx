// Module ID: 11815
// Function ID: 11816
// Name: buildPollResources
// Dependencies: [11811, 12, 2]

// Module 11815 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 11811 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
