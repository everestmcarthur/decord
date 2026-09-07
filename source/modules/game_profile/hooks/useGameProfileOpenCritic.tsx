// Module ID: 8730
// Function ID: 8731
// Name: getOpenCriticTierText
// Dependencies: [8731, 1114, 8732, 8733, 8734, 8735, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8730 (getOpenCriticTierText)
import set from "set" /* 2 */;
import OpenCriticTier from "OpenCriticTier" /* 8731 */;
import metadataDefault from "metadata" /* 8732 */;
import metadataDefault2 from "metadata" /* 8733 */;
import metadataDefault3 from "metadata" /* 8734 */;
import metadataDefault4 from "metadata" /* 8735 */;

const result = set.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1114).intl;
    return intl4.string(tmp(1114).t.aZej2g);
  } else if (tmp(8731).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t.MLxnSg);
  } else if (tmp(8731).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t["3f19KA"]);
  } else if (tmp(8731).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return metadataDefault;
  } else if (tmp(8731).OpenCriticTier.STRONG === tier) {
    return metadataDefault2;
  } else if (tmp(8731).OpenCriticTier.FAIR === tier) {
    return metadataDefault3;
  } else if (tmp(8731).OpenCriticTier.WEAK === tier) {
    return metadataDefault4;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8731).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8731).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8731).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
