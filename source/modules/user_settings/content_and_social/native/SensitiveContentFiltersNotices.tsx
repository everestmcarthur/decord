// Module ID: 14872
// Function ID: 14873
// Name: SensitiveContentFiltersNotices
// Dependencies: [19, 8487, 21, 7375, 14742, 1114, 4301, 2024, 8499, 8501, 2]
// Exports: SensitiveContentFiltersAgeVerificationNotice, SensitiveContentFiltersTeenNotice

// Module 14872 (SensitiveContentFiltersNotices)
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import LinkingDefault from "Linking" /* 4301 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8499 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14742 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const SafetySettingsNoticeType = fn(8487).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  _require = require("SensitiveMediaGoreRedactionSettingsUtils").useSensitiveContentFilterHelpArticle();
  const obj2 = { label: null, labelHook: null, noticeType: null };
  let obj = require("SensitiveMediaGoreRedactionSettingsUtils");
  obj2.label = require("util").t.EUo0yj;
  obj2.labelHook = function labelHook() {
    const obj = LinkingDefault;
    obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
  };
  obj2.noticeType = SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE;
  return jsx(SafetySettingsNoticeDefault, { label: null, labelHook: null, noticeType: null });
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = {
    label: util.t.OX4ybh,
    labelHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: util.t.OX4ybh,
    labelHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  });
};
