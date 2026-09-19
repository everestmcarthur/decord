// Module ID: 17939
// Function ID: 17940
// Name: getRuleInfo
// Dependencies: [12115, 5301, 17940, 17942, 16157, 9548, 17943, 4698, 2]
// Exports: getRuleInfo

// Module 17939 (getRuleInfo)
import Constants from "Constants" /* 12115 */;
import _modDef17942 from "module_17942" /* 17942 */;
import BaseRuleInfo from "BaseRuleInfo" /* 17943 */;
import size from "module_2" /* 2 */;

const AutomodTriggerType = Constants.AutomodTriggerType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getRuleInfo.tsx");

export const getRuleInfo = function getRuleInfo(triggerType, rule) {
  const baseRuleInfo = BaseRuleInfo.getBaseRuleInfo(triggerType, rule);
  let tmp4 = null;
  if (null != baseRuleInfo) {
    tmp4 = null;
    if (null != triggerType) {
      const obj2 = {};
      const merged = Object.assign(baseRuleInfo);
      if (AutomodTriggerType.MENTION_SPAM === triggerType) {
        const obj3 = { IconComponent: tmp(5301).AtIcon };
        let tmp9 = obj3;
      } else if (tmp8.KEYWORD === triggerType) {
        const obj4 = { IconComponent: tmp(17940).ChannelListPlusIcon };
        tmp9 = obj4;
      } else {
        if (tmp8.ML_SPAM !== triggerType) {
          if (tmp8.USER_PROFILE !== triggerType) {
            if (tmp8.DEFAULT_KEYWORD_LIST === triggerType) {
              const obj5 = { IconComponent: tmp(16157).MenuIcon };
              tmp9 = obj5;
            } else if (tmp8.APPLICATION === triggerType) {
              const obj6 = { IconComponent: tmp(9548).RobotIcon };
              tmp9 = obj6;
            }
          }
        }
        const obj7 = { source: _modDef17942 };
        tmp9 = obj7;
      }
      if (tmp9 == null) {
        const obj8 = { IconComponent: tmp(4698).LinkIcon };
        tmp9 = obj8;
      }
      obj2.icon = tmp9;
      tmp4 = obj2;
    }
  }
  return tmp4;
};
