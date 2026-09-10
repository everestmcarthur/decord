// Module ID: 8795
// Function ID: 8796
// Name: useGameProfileOpenCritic
// Dependencies: [8796, 1114, 8797, 8798, 8799, 8800, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8795 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8796 */;
import _modDef8797 from "module_8797" /* 8797 */;
import _modDef8798 from "module_8798" /* 8798 */;
import _modDef8799 from "module_8799" /* 8799 */;
import _modDef8800 from "module_8800" /* 8800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1114).intl;
    return intl4.string(tmp(1114).t.aZej2g);
  } else if (tmp(8796).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t.MLxnSg);
  } else if (tmp(8796).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t["3f19KA"]);
  } else if (tmp(8796).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8797;
  } else if (tmp(8796).OpenCriticTier.STRONG === tier) {
    return _modDef8798;
  } else if (tmp(8796).OpenCriticTier.FAIR === tier) {
    return _modDef8799;
  } else if (tmp(8796).OpenCriticTier.WEAK === tier) {
    return _modDef8800;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8796).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8796).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8796).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
