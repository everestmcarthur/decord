// Module ID: 17761
// Function ID: 17762
// Name: CommunityRequirementSatisfiedForm
// Dependencies: [19, 17, 21, 4304, 17751, 5174, 2]
// Exports: default

// Module 17761 (CommunityRequirementSatisfiedForm)
import ToastUtils from "ToastUtils" /* 4304 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx");

export default function CommunityRequirementSatisfiedForm(formSwitchDisabled) {
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  const enableCommunitySharedStyles = formSwitchDisabled(17751).useEnableCommunitySharedStyles();
  const obj2 = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: null };
  const items = [formSwitchDisabled.children, ];
  let tmp6 = null;
  if (formSwitchDisabled) {
    const obj3 = {
      accessibilityRole: "button",
      style: enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable,
      onPress() {
          if (formSwitchDisabled) {
            const result = ToastUtils.communityRequirementSatisfied();
          }
        }
    };
    tmp6 = closure_3(formSwitchDisabled(5174).PressableOpacity, obj3);
  }
  items[1] = tmp6;
  obj2.children = items;
  return closure_4(View, obj2);
};
