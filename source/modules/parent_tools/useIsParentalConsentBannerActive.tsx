// Module ID: 14954
// Function ID: 14955
// Name: useIsParentalConsentBannerActive
// Dependencies: [14955, 14957, 2]
// Exports: useIsParentalConsentBannerActive

// Module 14954 (useIsParentalConsentBannerActive)
import useParentalConsentWarning from "useParentalConsentWarning" /* 14955 */;
import ParentalConsentWarningTypes from "ParentalConsentWarningTypes" /* 14957 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};
