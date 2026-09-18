// Module ID: 13935
// Function ID: 13936
// Name: ProgramRewardsUtils
// Dependencies: [1372, 1374, 4155, 13936, 13939, 13940, 4380, 2]
// Exports: canFetchAnyProgramReward, canFetchNitroProgramReward, canFetchXboxProgramReward, hasNecessaryPremiumSubscriptionStatus, isEligibleForProgramReward, isProgramRewardStale, useIsEligibleForProgramReward

// Module 13935 (ProgramRewardsUtils)
import _modDef4155 from "module_4155" /* 4155 */;
import PremiumUtils from "PremiumUtils" /* 4380 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 13936 */;
import PremiumRewardsOrbsExperiment from "PremiumRewardsOrbsExperiment" /* 13939 */;
import UserStore from "UserStore" /* 1372 */;

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
    let flag = tmp(13939).getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = tmp(13939);
  } else {
    flag = false;
    if (tmp(13936).RewardProgram.XBOX === NITRO) {
      flag = true;
    }
  }
  if (flag) {
    const currentUser = UserStore.getCurrentUser();
    flag = tmp(4380).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult2 = tmp(4380);
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
    let flag = tmp(13939).getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = tmp(13939);
  } else {
    flag = false;
    if (tmp(13936).RewardProgram.XBOX === XBOX) {
      flag = true;
    }
  }
  if (flag) {
    flag = tmp(13940).hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
    const tmpResult2 = tmp(13940);
  }
  return flag;
}
const PremiumTypes = fn(1374).PremiumTypes;
const dependencyMap = { [fn(13936).RewardProgram.NITRO]: canFetchNitroProgramReward, [fn(13936).RewardProgram.XBOX]: canFetchXboxProgramReward };
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
      tmp = _modDef4155(date);
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
    return tmp(13939).getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(13936).RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
};
export const useIsEligibleForProgramReward = function useIsEligibleForProgramReward(arg0, ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
  obj = PremiumRewardsOrbsExperiment;
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
