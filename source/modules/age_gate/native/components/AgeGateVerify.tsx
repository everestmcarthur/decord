// Module ID: 17345
// Function ID: 17346
// Name: AgeGateVerify
// Dependencies: [19, 17, 21, 4574, 576, 4785, 4787, 7137, 5706, 4570, 4989, 8439, 8441, 2]
// Exports: default

// Module 17345 (AgeGateVerify)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4570 */;
import AgeGateUtils from "AgeGateUtils" /* 4785 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4787 */;
import native from "native" /* 5706 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7137 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8439 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8441 */;
import noop from "module_19" /* 19 */;

const components_Button_Button = tmp2(4989);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4574);
const obj2 = { container: { padding: nativeDefault.space.PX_16, flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16 }, header: { textAlign: "center" }, body: { textAlign: "center" }, buttonWrapper: { width: "100%" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/AgeGateVerify.tsx");

export default function AgeGateVerify(source) {
  source = source.source;
  const tmp = closure_6();
  const ageGateVerifyContent = AgeGateUtils.useAgeGateVerifyContent(source);
  ({ verifyAgreementButtonText, verifyGateDescription, verifyTitle } = ageGateVerifyContent);
  const maybePerformReactiveCheckForSource = AgeVerificationUtils.useMaybePerformReactiveCheckForSource(source);
  const obj3 = { top: true, style: tmp.container, children: null };
  const items = [React4(native.ShieldSpotIllustration, {}), React4(Text_Text.Text, { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: verifyTitle }), React4(Text_Text.Text, { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: verifyGateDescription }), ];
  let tmp7Result = null != verifyAgreementButtonText;
  if (tmp7Result) {
    const obj6 = { style: tmp.buttonWrapper, children: null };
    const obj7 = {
      text: verifyAgreementButtonText,
      onPress() {
          const obj = AgeVerificationActionCreatorsDefault;
          const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE });
        },
      grow: true
    };
    obj6.children = tmp7(components_Button_Button.Button, obj7);
    tmp7Result = tmp7(View, obj6);
  }
  items[3] = tmp7Result;
  obj3.children = items;
  return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj3);
};
