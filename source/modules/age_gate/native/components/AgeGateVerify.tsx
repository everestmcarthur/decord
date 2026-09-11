// Module ID: 17394
// Function ID: 17395
// Name: AgeGateVerify
// Dependencies: [19, 17, 21, 4607, 576, 4818, 7197, 5744, 4603, 5027, 8499, 8501, 2]
// Exports: default

// Module 17394 (AgeGateVerify)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4603 */;
import AgeGateUtils from "AgeGateUtils" /* 4818 */;
import components_Button_Button from "components/Button/Button" /* 5027 */;
import native from "native" /* 5744 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7197 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8499 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8501 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4607);
let obj2 = { container: { padding: nativeDefault.space.PX_16, flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16 }, header: { textAlign: "center" }, body: { textAlign: "center" }, buttonWrapper: { width: "100%" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/AgeGateVerify.tsx");

export default function AgeGateVerify(source) {
  const tmp = closure_6();
  const ageGateVerifyContent = AgeGateUtils.useAgeGateVerifyContent(source.source);
  ({ verifyAgreementButtonText, verifyGateDescription, verifyTitle } = ageGateVerifyContent);
  const obj2 = { top: true, style: tmp.container, children: null };
  const items = [React4(native.ShieldSpotIllustration, {}), React4(Text_Text.Text, { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: verifyTitle }), React4(Text_Text.Text, { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: verifyGateDescription }), ];
  let tmp6Result = null != verifyAgreementButtonText;
  if (tmp6Result) {
    const obj5 = { style: tmp.buttonWrapper, children: null };
    const obj6 = {
      text: verifyAgreementButtonText,
      onPress() {
          const obj = AgeVerificationActionCreatorsDefault;
          const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE });
        },
      grow: true
    };
    obj5.children = tmp6(components_Button_Button.Button, obj6);
    tmp6Result = tmp6(View, obj5);
  }
  items[3] = tmp6Result;
  obj2.children = items;
  return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj2);
};
