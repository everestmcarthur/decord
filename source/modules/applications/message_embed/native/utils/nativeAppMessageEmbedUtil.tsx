// Module ID: 11974
// Function ID: 11975
// Name: nativeAppMessageEmbedUtil
// Dependencies: [4423, 576, 8158, 8159, 1396, 2]
// Exports: getAppGradientColors, getAppIconSrc

// Module 11974 (nativeAppMessageEmbedUtil)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import useAvatarColor from "useAvatarColor" /* 8158 */;
import ColorUtils_mod from "ColorUtils" /* 4423 */;
import size from "module_2" /* 2 */;

let c3 = "#000000";
let ColorUtils = ColorUtils_mod;
let items = [ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760), ];
let ColorUtils = ColorUtils_mod;
items[1] = ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760);
const result = size.fileFinishedImporting("modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx");

export const getAppGradientColors = function getAppGradientColors(appIconSrc) {
  if (null == appIconSrc) {
    return tmp;
  } else {
    if (obj5.hasFetchedColors(appIconSrc)) {
      const heroColors = tmp6(8159).getHeroColors(appIconSrc);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      if (false === tmp4) {
        items = [tmp6(4423).hexToRgba(primaryColor), ];
        const tmp6Result4 = tmp6(4423);
        items[1] = tmp6(4423).hexToRgba(secondaryColor);
        tmp5 = items;
        const tmp6Result5 = tmp6(4423);
      }
      return tmp5;
    } else {
      tmp6(8158).maybeFetchColors(appIconSrc);
      return tmp;
    }
    obj5 = useAvatarColor;
  }
};
export const getAppIconSrc = function getAppIconSrc(id, icon, bot) {
  let applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id, icon, bot, fallbackAvatar: false });
  if (applicationIconURL == null) {
    applicationIconURL = null;
  }
  return applicationIconURL;
};
