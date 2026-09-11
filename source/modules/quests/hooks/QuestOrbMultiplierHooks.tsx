// Module ID: 11388
// Function ID: 11389
// Name: QuestOrbMultiplierHooks
// Dependencies: [1371, 504, 11389, 4264, 2]
// Exports: useQuestOrbMultiplierEligibility

// Module 11388 (QuestOrbMultiplierHooks)
import initialize from "initialize" /* 504 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4264 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 11389 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    let INELIGIBLE = QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    let QuestOrbMultiplierEligibilityType2 = dependencyMap;
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      const questOrbMultiplierSource = QuestOrbMultiplierUtils.getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === QuestOrbMultiplierUtils.QuestOrbMultiplierSource.XBOX_GAME_PASS) {
        QuestOrbMultiplierEligibilityType2 = tmp3(11389).QuestOrbMultiplierEligibilityType;
        let NITRO = QuestOrbMultiplierEligibilityType2.XBOX_GAME_PASS;
      } else {
        NITRO = tmp3(11389).QuestOrbMultiplierEligibilityType.NITRO;
      }
    } else {
      let result;
      if (isFractionalPremiumWithNoStandardSub != null) {
        result = isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
      }
      const QuestOrbMultiplierEligibilityType = QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType;
      INELIGIBLE = result ? QuestOrbMultiplierEligibilityType.INELIGIBLE : QuestOrbMultiplierEligibilityType.UPSELL;
    }
    obj2 = PremiumUtilsDefault;
  }
  return INELIGIBLE;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export const useQuestOrbMultiplierEligibility = function useQuestOrbMultiplierEligibility() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => getQuestOrbMultiplierEligibilityForUser(currentUser.getCurrentUser()));
};
export { getQuestOrbMultiplierEligibilityForUser };
