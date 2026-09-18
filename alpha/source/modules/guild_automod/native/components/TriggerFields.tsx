// Module ID: 17866
// Function ID: 17867
// Name: TriggerFields
// Dependencies: [19, 21, 17852, 4718, 1115, 17867, 17868, 17872, 17876, 2]
// Exports: default

// Module 17866 (TriggerFields)
import MentionSpamTriggerFieldsDefault from "MentionSpamTriggerFields" /* 17867 */;
import DefaultKeywordListTriggerFieldsDefault from "DefaultKeywordListTriggerFields" /* 17868 */;
import ApplicationTriggerFieldsDefault from "ApplicationTriggerFields" /* 17872 */;
import KeywordFilterTriggerFieldsDefault from "KeywordFilterTriggerFields" /* 17876 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TriggerFields.tsx");

export default function TriggerFields(arg0) {
  ({ rule, onChangeRule } = arg0);
  if (obj.isRuleMLSpamFilter(rule)) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
    const intl = tmp(1115).intl;
    obj2.children = intl.string(tmp(1115).t["1YgPj/"]);
    let tmp3 = jsx(tmp(4718).Text, { variant: "text-md/normal", color: "text-default", children: null });
  } else {
    if (tmpResult.isRuleMentionSpamFilter(rule)) {
      const obj3 = { rule, onChangeRule };
      tmp3 = jsx(MentionSpamTriggerFieldsDefault, { rule, onChangeRule });
    } else {
      if (tmpResult5.isRuleDefaultKeywordListFilter(rule)) {
        const obj4 = { rule, onChangeRule };
        tmp3 = jsx(DefaultKeywordListTriggerFieldsDefault, { rule, onChangeRule });
      } else {
        if (tmpResult6.isRuleApplicationFilter(rule)) {
          const obj5 = { rule, onChangeRule };
          tmp3 = jsx(ApplicationTriggerFieldsDefault, { rule, onChangeRule });
        } else {
          if (tmpResult7.isRuleUserProfileFilter(rule)) {
            const obj6 = { rule, onChangeRule };
            tmp3 = jsx(KeywordFilterTriggerFieldsDefault, { rule, onChangeRule });
          } else {
            tmp3 = null;
            const tmpResult8 = tmp(17852);
          }
          tmpResult7 = tmp(17852);
        }
        tmpResult6 = tmp(17852);
      }
      tmpResult5 = tmp(17852);
    }
    tmpResult = tmp(17852);
  }
  return tmp3;
};
