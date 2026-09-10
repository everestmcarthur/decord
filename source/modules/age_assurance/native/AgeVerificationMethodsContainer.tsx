// Module ID: 8654
// Function ID: 8655
// Name: AgeVerificationMethodsContainer
// Dependencies: [19, 8477, 8484, 21, 4605, 576, 8483, 7653, 7658, 5023, 1178, 1114, 5737, 4601, 2946, 5483, 5025, 8482, 5655, 8476, 2]
// Exports: AgeVerificationMethodsContainer

// Module 8654 (AgeVerificationMethodsContainer)
import nativeDefault from "native" /* 576 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7653 */;
import MetricEvents from "MetricEvents" /* 7658 */;
import noop from "module_19" /* 19 */;

require = fn;
const VerificationMethod = fn(8477).VerificationMethod;
const SafetyHubLinks = fn(8484).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4605);
let obj2 = { content: { marginTop: nativeDefault.space.PX_8 }, errorContainer: null, noMethodsText: null, buttonGroup: null };
let obj3 = { marginTop: nativeDefault.space.PX_8 };
obj2.errorContainer = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
let obj4 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
obj2.noMethodsText = { paddingHorizontal: nativeDefault.space.PX_40, textAlign: "center" };
obj2.buttonGroup = { paddingVertical: 0 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationMethodsContainer.tsx");

export const AgeVerificationMethodsContainer = function AgeVerificationMethodsContainer(ageVerificationMethods) {
  const prop = ageVerificationMethods.ageVerificationMethods;
  const modalSessionId = ageVerificationMethods.modalSessionId;
  const tmp = closure_8();
  const isSuspendedUser = prop(8483).useIsSuspendedUser();
  const items = [prop];
  const effect = noop.useEffect(() => {
    let someResult;
    if (prop != null) {
      someResult = prop.some((id) => id.id === constants.GOOGLE_WALLET);
    }
    if (someResult) {
      const obj3 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_METHOD_IMPRESSION };
      MonitoringAgentDefault.increment(obj3);
    }
  }, items);
  let obj2 = { spacing: 16, style: tmp.content, children: null };
  let obj3 = { messageType: prop(1178).HelpMessageTypes.INFO, textColor: "text-feedback-info", textVariant: "text-sm/medium", children: null };
  const intl = prop(1114).intl;
  obj3.children = intl.string(prop(1114).t.El4aXl);
  const items1 = [closure_6(prop(1178).HelpMessage, obj3), ];
  if (null != prop) {
    if (0 !== prop.length) {
      let mapped = prop.map((label) => closure_1_6(prop(5655).TableRow, {
        label: label.title,
        subLabel: label.description,
        onPress() {
          return label.onClick(modalSessionId);
        },
        arrow: true
      }, label.id));
    }
    const obj4 = { hasIcons: false, children: mapped };
    items1[1] = tmp7(tmp8, obj4);
    obj2.children = items1;
    const items2 = [tmp6(prop(5023).Stack, obj2), ];
    let tmp7Result = isSuspendedUser;
    if (isSuspendedUser) {
      const obj5 = { variant: "text-xs/medium", children: null };
      const intl4 = tmp2(1114).intl;
      const obj6 = {
        handleOnHelpUrlHook() {
              modalSessionId(8476).openUrl(constants.LEARN_MORE_UU_APPEAL_LINK);
            }
      };
      obj5.children = intl4.format(modalSessionId(2946).htWh1G, obj6);
      tmp7Result = tmp7(tmp2(4601).Text, obj5);
    }
    const obj7 = { spacing: 8, align: "center", children: null };
    items2[1] = tmp7Result;
    obj7.children = items2;
    return tmp6(prop(5023).Stack, obj7);
  }
  const obj8 = { direction: "vertical", align: "center", spacing: 16, style: tmp.errorContainer, children: null };
  const obj9 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.noMethodsText, children: null };
  const intl2 = tmp2(1114).intl;
  obj9.children = intl2.string(modalSessionId(2946).cR6336);
  const items3 = [closure_6(prop(4601).Text, obj9), ];
  const obj10 = { style: tmp.buttonGroup, children: null };
  const obj11 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = tmp2(1114).intl;
  obj11.text = intl3.string(modalSessionId(2946).hDvmYP);
  obj11.onPress = prop(8482).getAgeVerificationMethods;
  obj10.children = closure_6(prop(5025).Button, obj11);
  items3[1] = closure_6(prop(5483).ButtonGroup, obj10);
  obj8.children = items3;
  mapped = tmp6(tmp2(5023).Stack, obj8);
};
