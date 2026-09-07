// Module ID: 11727
// Function ID: 11728
// Dependencies: [11723, 12, 2]

// Module 11727
import set from "set" /* 2 */;
import buildPlatformPollResources from "buildPlatformPollResources" /* 11723 */;
import apply from "apply" /* 12 */;

const memoizeResult = apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = set.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;
