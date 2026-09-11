// Module ID: 14733
// Function ID: 14734
// Name: WebAuthnSuccessStep
// Dependencies: [19, 21, 1483, 5676, 14719, 14734, 1114, 2]
// Exports: default

// Module 14733 (WebAuthnSuccessStep)
import NavigatorHeader from "NavigatorHeader" /* 5676 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14719 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 14734 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  navigation = navigation(1483).useNavigation();
  const items = [navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    const obj = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
        navigation.popToTop();
        const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal();
      })
    };
    navigation.setOptions(obj);
  }, items);
  const obj2 = { onGenerate: null, headerLabel: null };
  let obj = navigation(1483);
  const intl = navigation(1114).intl;
  obj2.headerLabel = intl.format(navigation(1114).t.iVTs6i, {});
  return jsx(UserSettingsAccountBackupCodesDefault, { onGenerate: null, headerLabel: null });
};
