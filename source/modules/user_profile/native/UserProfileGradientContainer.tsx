// Module ID: 11183
// Function ID: 11184
// Name: UserProfileGradientContainer
// Dependencies: [19, 21, 8302, 5037, 2]

// Module 11183 (UserProfileGradientContainer)
import LinearGradientDefault from "LinearGradient" /* 5037 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8302 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default noop.memo((arg0) => {
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = useUserProfileGradientColors.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(LinearGradientDefault, { colors, style, children });
});
