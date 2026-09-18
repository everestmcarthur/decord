// Module ID: 13730
// Function ID: 13731
// Name: ProgramRewardsUtils
// Dependencies: [1371, 1373, 3994, 13731, 13734, 7556, 13735, 4218, 2]
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, hasNecessaryPremiumSubscriptionStatus, isEligibleForProgramReward, isProgramRewardStale, useIsEligibleForProgramReward

// Module 13730 (ProgramRewardsUtils)
import _modDef3994 from "module_3994" /* 3994 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import XboxGamePassPerksExperiment from "XboxGamePassPerksExperiment" /* 7556 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 13731 */;
import PremiumRewardsOrbsExperiment from "PremiumRewardsOrbsExperiment" /* 13734 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function canFetchNitroProgramReward(ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = ProgramRewardsTypes.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === NITRO) {
    let flag = tmp(13734).getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = tmp(13734);
  } else {
    flag = false;
    if (tmp(13731).RewardProgram.XBOX === NITRO) {
      flag = tmp(7556).getIsXboxGamePassPerksEnabled(str);
      const tmpResult3 = tmp(7556);
    }
  }
  if (flag) {
    const currentUser = UserStore.getCurrentUser();
    flag = tmp(4218).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult4 = tmp(4218);
  }
  return flag;
}
function canFetchXboxProgramReward(ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = ProgramRewardsTypes.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === XBOX) {
    let flag = tmp(13734).getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = tmp(13734);
  } else {
    flag = false;
    if (tmp(13731).RewardProgram.XBOX === XBOX) {
      flag = tmp(7556).getIsXboxGamePassPerksEnabled(str);
      const tmpResult3 = tmp(7556);
    }
  }
  if (flag) {
    flag = tmp(13735).hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
    const tmpResult4 = tmp(13735);
  }
  return flag;
}
const PremiumTypes = fn(1373).PremiumTypes;
const dependencyMap = { [fn(13731).RewardProgram.NITRO]: canFetchNitroProgramReward, [fn(13731).RewardProgram.XBOX]: canFetchXboxProgramReward };
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

export const isProgramRewardStale = function isProgramRewardStale(next_reward_date) {
  if (null == next_reward_date) {
    return true;
  } else {
    next_reward_date = next_reward_date.next_reward_date;
    let tmp = null != next_reward_date;
    if (tmp) {
      tmp = "" !== next_reward_date;
    }
    if (tmp) {
      const _Date = Date;
      const date = new Date(next_reward_date);
      tmp = _modDef3994(date);
    }
    return tmp;
  }
};
export const isEligibleForProgramReward = function isEligibleForProgramReward(arg0, ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return tmp(13734).getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(13731).RewardProgram.XBOX === arg0) {
    return tmp(7556).getIsXboxGamePassPerksEnabled(str);
  } else {
    return false;
  }
};
export const useIsEligibleForProgramReward = function useIsEligibleForProgramReward(arg0, ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const obj = PremiumRewardsOrbsExperiment;
  const isXboxGamePassPerksEnabled = XboxGamePassPerksExperiment.useIsXboxGamePassPerksEnabled(str);
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return isXboxGamePassPerksEnabled;
  } else {
    return false;
  }
};
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward(ProgramRewardsStore) {
  let str = ProgramRewardsStore;
  if (ProgramRewardsStore === undefined) {
    str = "ProgramRewardsUtils";
  }
  const values = Object.values(ProgramRewardsTypes.RewardProgram);
  for (const item10015 of values) {
    if (typeof item10015 === "number") {
      if (dependencyMap[tmp2](str)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
};
export const hasNecessaryPremiumSubscriptionStatus = function hasNecessaryPremiumSubscriptionStatus(currentUser) {
  if (currentUser == null) {
    currentUser = UserStore.getCurrentUser();
  }
  return PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};
