// Module ID: 8863
// Function ID: 8864
// Name: useGameProfileOpenCritic
// Dependencies: [8864, 1115, 8865, 8866, 8867, 8868, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8863 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8864 */;
import _modDef8865 from "module_8865" /* 8865 */;
import _modDef8866 from "module_8866" /* 8866 */;
import _modDef8867 from "module_8867" /* 8867 */;
import _modDef8868 from "module_8868" /* 8868 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(8864).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(8864).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(8864).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8865;
  } else if (tmp(8864).OpenCriticTier.STRONG === tier) {
    return _modDef8866;
  } else if (tmp(8864).OpenCriticTier.FAIR === tier) {
    return _modDef8867;
  } else if (tmp(8864).OpenCriticTier.WEAK === tier) {
    return _modDef8868;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8864).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8864).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8864).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
