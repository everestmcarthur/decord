// Module ID: 13354
// Function ID: 13355
// Name: useYouBarSettingsCustomHeaderPaddingTop
// Dependencies: [1611, 6945, 1116, 2]
// Exports: useYouBarSettingsCustomHeaderPaddingTop, useYouBarSettingsOutsideSafeAreaTop

// Module 13354 (useYouBarSettingsCustomHeaderPaddingTop)
import set from "set" /* 2 */;
import PlatformTypes from "PlatformTypes" /* 1116 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6945 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");

export const useYouBarSettingsCustomHeaderPaddingTop = function useYouBarSettingsCustomHeaderPaddingTop() {
  const tmp = useIsWindowLargeDefault();
  const obj = PlatformTypes;
  let num = 16;
  if (!tmp2) {
    num = useSafeAreaInsetsDefault().top;
  }
  return num;
};
export const useYouBarSettingsOutsideSafeAreaTop = function useYouBarSettingsOutsideSafeAreaTop() {
  const tmp = useIsWindowLargeDefault();
  const obj = PlatformTypes;
  return PlatformTypes.isIOS() || tmp;
};
