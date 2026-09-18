// Module ID: 8963
// Function ID: 8964
// Name: useGameProfileOpenCritic
// Dependencies: [8964, 1115, 8965, 8966, 8967, 8968, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8963 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8964 */;
import _modDef8965 from "module_8965" /* 8965 */;
import _modDef8966 from "module_8966" /* 8966 */;
import _modDef8967 from "module_8967" /* 8967 */;
import _modDef8968 from "module_8968" /* 8968 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(8964).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(8964).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(8964).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8965;
  } else if (tmp(8964).OpenCriticTier.STRONG === tier) {
    return _modDef8966;
  } else if (tmp(8964).OpenCriticTier.FAIR === tier) {
    return _modDef8967;
  } else if (tmp(8964).OpenCriticTier.WEAK === tier) {
    return _modDef8968;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8964).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8964).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8964).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
