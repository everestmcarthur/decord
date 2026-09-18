// Module ID: 11116
// Function ID: 11117
// Name: UserProfileGradientContainer
// Dependencies: [19, 21, 8240, 4987, 2]

// Module 11116 (UserProfileGradientContainer)
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8240 */;
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
