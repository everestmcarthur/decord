// Module ID: 8617
// Function ID: 8618
// Name: AgeVerificationMethodsContainer
// Dependencies: [19, 8440, 8447, 21, 4574, 576, 8446, 7616, 7621, 4987, 1178, 1114, 5701, 4570, 2946, 5447, 4989, 8445, 5619, 8439, 2]
// Exports: AgeVerificationMethodsContainer

// Module 8617 (AgeVerificationMethodsContainer)
import nativeDefault from "native" /* 576 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7616 */;
import MetricEvents from "MetricEvents" /* 7621 */;
import noop from "module_19" /* 19 */;

require = fn;
const VerificationMethod = fn(8440).VerificationMethod;
const SafetyHubLinks = fn(8447).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4574);
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
  const isSuspendedUser = prop(8446).useIsSuspendedUser();
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
      let mapped = prop.map((label) => closure_1_6(prop(5619).TableRow, {
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
    const items2 = [tmp6(prop(4987).Stack, obj2), ];
    let tmp7Result = isSuspendedUser;
    if (isSuspendedUser) {
      const obj5 = { variant: "text-xs/medium", children: null };
      const intl4 = tmp2(1114).intl;
      const obj6 = {
        handleOnHelpUrlHook() {
              modalSessionId(8439).openUrl(constants.LEARN_MORE_UU_APPEAL_LINK);
            }
      };
      obj5.children = intl4.format(modalSessionId(2946).htWh1G, obj6);
      tmp7Result = tmp7(tmp2(4570).Text, obj5);
    }
    const obj7 = { spacing: 8, align: "center", children: null };
    items2[1] = tmp7Result;
    obj7.children = items2;
    return tmp6(prop(4987).Stack, obj7);
  }
  const obj8 = { direction: "vertical", align: "center", spacing: 16, style: tmp.errorContainer, children: null };
  const obj9 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.noMethodsText, children: null };
  const intl2 = tmp2(1114).intl;
  obj9.children = intl2.string(modalSessionId(2946).cR6336);
  const items3 = [closure_6(prop(4570).Text, obj9), ];
  const obj10 = { style: tmp.buttonGroup, children: null };
  const obj11 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = tmp2(1114).intl;
  obj11.text = intl3.string(modalSessionId(2946).hDvmYP);
  obj11.onPress = prop(8445).getAgeVerificationMethods;
  obj10.children = closure_6(prop(4989).Button, obj11);
  items3[1] = closure_6(prop(5447).ButtonGroup, obj10);
  obj8.children = items3;
  mapped = tmp6(tmp2(4987).Stack, obj8);
};
