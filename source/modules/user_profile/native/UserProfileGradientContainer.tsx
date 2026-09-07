// Module ID: 11116
// Function ID: 11117
// Dependencies: [19, 21, 8239, 4987, 2]

// Module 11116
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8239 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo((arg0) => {
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = useUserProfileGradientColors.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(LinearGradientDefault, { colors, style, children });
});
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;
