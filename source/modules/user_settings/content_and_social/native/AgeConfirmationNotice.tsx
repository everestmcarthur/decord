// Module ID: 14873
// Function ID: 14874
// Name: AgeConfirmationNotice
// Dependencies: [19, 17, 8487, 21, 7375, 14743, 4301, 2024, 8499, 8501, 576, 1178, 5027, 1114, 4603, 2]
// Exports: default

// Module 14873 (AgeConfirmationNotice)
import nativeDefault from "native" /* 576 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import LinkingDefault from "Linking" /* 4301 */;
import Text_Text from "Text/Text" /* 4603 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14743 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(8487);
({ SafetySettingsNoticeAction: hasOwnProperty, SafetySettingsNoticeType: metroRequire } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default function AgeConfirmationNotice() {
  sensitiveContentFilterHelpArticle = sensitiveContentFilterHelpArticle(7375).useSensitiveContentFilterHelpArticle();
  const effect = noop.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(14743).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
  }, []);
  const items = [sensitiveContentFilterHelpArticle];
  importDefault = noop.useCallback(() => {
    const obj = LinkingDefault;
    obj.openURL(HelpdeskUtilsDefault.getArticleURL(sensitiveContentFilterHelpArticle));
    const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.LEARN_MORE);
  }, items);
  let obj2 = { style: null, children: null };
  const obj3 = { marginBottom: null };
  const callback = noop.useCallback(() => {
    const obj = onPress(8499);
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: sensitiveContentFilterHelpArticle(8501).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(8501).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result1 = sensitiveContentFilterHelpArticle(14743).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, []);
  obj3.marginBottom = nativeDefault.space.PX_8;
  obj2.style = obj3;
  const obj4 = { messageType: sensitiveContentFilterHelpArticle(1178).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: null, children: null };
  const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = sensitiveContentFilterHelpArticle(1114).intl;
  obj5.text = intl.string(sensitiveContentFilterHelpArticle(1114).t.FDSSia);
  obj5.onPress = callback;
  obj4.button = jsx(sensitiveContentFilterHelpArticle(5027).Button, { variant: "secondary", size: "sm", text: null, onPress: null });
  const intl2 = sensitiveContentFilterHelpArticle(1114).intl;
  obj4.children = intl2.format(sensitiveContentFilterHelpArticle(1114).t.mFgsfg, {
    hook(children) {
      return jsx(Text_Text.Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress, children });
    }
  });
  obj2.children = jsx(sensitiveContentFilterHelpArticle(1178).HelpMessage, { messageType: sensitiveContentFilterHelpArticle(1178).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: null, children: null });
  return <View style={null}>{null}</View>;
};
