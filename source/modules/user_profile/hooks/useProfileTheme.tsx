// Module ID: 8253
// Function ID: 8254
// Name: useProfileTheme
// Dependencies: [32, 4566, 8254, 1074, 4509, 504, 575, 8158, 1091, 8255, 4425, 2]
// Exports: default

// Module 8253 (useProfileTheme)
import initialize from "initialize" /* 504 */;
import shims from "shims" /* 575 */;
import useThemeDefault from "useTheme" /* 4509 */;
import useAvatarColor from "useAvatarColor" /* 8158 */;
import _slicedToArray from "module_32" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 4566 */;

require = fn;
const useEffectiveThemeOverride = fn(8254).useEffectiveThemeOverride;
const ThemeTypes = fn(1074).ThemeTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileTheme.tsx");

export default function useProfileTheme(arg0) {
  ({ user, displayProfile, pendingAvatarSrc } = arg0);
  ({ pendingThemeColors, isPreview, forceUserTheme } = arg0);
  const tmp2 = useThemeDefault();
  const tmp3 = useEffectiveThemeOverride();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  if (pendingAvatarSrc == null) {
    let avatarURL;
    if (user != null) {
      let guildId;
      if (displayProfile != null) {
        guildId = displayProfile.guildId;
      }
      avatarURL = user.getAvatarURL(guildId, 80);
    }
    pendingAvatarSrc = avatarURL;
  }
  const result = shims.unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
  const tmp4Result = shims;
  _slicedToArray(useAvatarColor.useAvatarColors(pendingAvatarSrc, result, false), 2);
  if (null != tmp3) {
    return tmp3;
  } else {
    let canEditThemes;
    if (displayProfile != null) {
      canEditThemes = displayProfile.canEditThemes;
    }
    if (!canEditThemes) {
      if (!isPreview) {
        const obj2 = { theme: tmp2, primaryColor: null, secondaryColor: null };
        return obj2;
      }
    }
    let previewThemeColors;
    if (displayProfile != null) {
      previewThemeColors = displayProfile.getPreviewThemeColors(pendingThemeColors);
    }
    let first;
    if (previewThemeColors != null) {
      first = previewThemeColors[0];
    }
    if (first == null) {
      first = tmp4(1091).hex2int(tmp10);
      const tmp4Result8 = tmp4(1091);
    }
    let hex2intResult;
    if (previewThemeColors != null) {
      hex2intResult = previewThemeColors[1];
    }
    if (hex2intResult == null) {
      hex2intResult = tmp4(1091).hex2int(tmp11);
      const tmp4Result9 = tmp4(1091);
    }
    let tmp16 = tmp2;
    if (!stateFromStores) {
      tmp16 = tmp2;
      if (!forceUserTheme) {
        let profileTheme = tmp4(8255).getProfileTheme(first);
        if (profileTheme == null) {
          profileTheme = tmp2;
        }
        tmp16 = profileTheme;
        const tmp4Result10 = tmp4(8255);
      }
    }
    if (tmp16 !== ThemeTypes.DARK) {
      let isThemeLightResult = tmp16 === tmp18.DARK;
      if (isThemeLightResult) {
        isThemeLightResult = tmp4(4425).isThemeLight(tmp2);
        const tmp4Result11 = tmp4(4425);
      }
      let DARKER = tmp16;
      if (isThemeLightResult) {
        DARKER = tmp18.DARKER;
      }
    } else {
      DARKER = tmp2;
      const tmp4Result12 = tmp4(4425);
    }
    const obj3 = { theme: DARKER, primaryColor: first, secondaryColor: hex2intResult };
    return obj3;
  }
  const tmp4Result7 = useAvatarColor;
};
