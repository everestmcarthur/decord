// Module ID: 18249
// Function ID: 18250
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4722, 4718, 1115, 2774, 8643, 8645, 2]
// Exports: default

// Module 18249 (AgeUpdateFooter)
import util from "util" /* 1115 */;
import _modDef2774 from "module_2774" /* 2774 */;
import Text_Text from "Text/Text" /* 4718 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8643 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8645 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef2774.ifObbX, {
    handleAgeVerifyHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT });
    }
  });
  return jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null });
};
