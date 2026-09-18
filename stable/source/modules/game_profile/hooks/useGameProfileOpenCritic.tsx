// Module ID: 8731
// Function ID: 8732
// Name: useGameProfileOpenCritic
// Dependencies: [8732, 1114, 8733, 8734, 8735, 8736, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8731 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8732 */;
import _modDef8733 from "module_8733" /* 8733 */;
import _modDef8734 from "module_8734" /* 8734 */;
import _modDef8735 from "module_8735" /* 8735 */;
import _modDef8736 from "module_8736" /* 8736 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1114).intl;
    return intl4.string(tmp(1114).t.aZej2g);
  } else if (tmp(8732).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t.MLxnSg);
  } else if (tmp(8732).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t["3f19KA"]);
  } else if (tmp(8732).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8733;
  } else if (tmp(8732).OpenCriticTier.STRONG === tier) {
    return _modDef8734;
  } else if (tmp(8732).OpenCriticTier.FAIR === tier) {
    return _modDef8735;
  } else if (tmp(8732).OpenCriticTier.WEAK === tier) {
    return _modDef8736;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8732).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8732).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8732).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
