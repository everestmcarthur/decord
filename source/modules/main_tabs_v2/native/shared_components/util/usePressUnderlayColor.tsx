// Module ID: 17021
// Function ID: 17022
// Name: usePressUnderlayColor
// Dependencies: [17022, 4509, 4275, 576, 4423, 2]
// Exports: default

// Module 17021 (usePressUnderlayColor)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4275 */;
import useThemeDefault from "useTheme" /* 4509 */;
import ChannelEmojiConstants from "ChannelEmojiConstants" /* 17022 */;
import size from "module_2" /* 2 */;

const ColorUtils = tmp3(4423);
let closure_3 = ChannelEmojiConstants.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

export default function usePressUnderlayColor(arr) {
  const tmp2 = useThemeDefault();
  const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE);
  let substr;
  if (arr != null) {
    substr = arr.slice(0, arr.length - 2);
  }
  let hexWithOpacityResult = token;
  if (null != substr) {
    hexWithOpacityResult = token;
    if (arr !== closure_3) {
      let num3 = 0.08;
      if ("dark" === tmp2) {
        num3 = 0.12;
      }
      hexWithOpacityResult = ColorUtils.hexWithOpacity(substr, num3);
      const tmp3Result = ColorUtils;
    }
  }
  return hexWithOpacityResult;
};
