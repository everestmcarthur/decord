// Module ID: 15675
// Function ID: 15676
// Name: BackButton
// Dependencies: [21, 1483, 15676, 1114, 15670, 2]
// Exports: default

// Module 15675 (BackButton)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import MFAButtonDefault from "MFAButton" /* 15676 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  importDefault = undefined;
  let obj = props(1483);
  importDefault = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = props(1114).intl;
  obj[1] = intl.string(props(1114).t.Tot4EC);
  obj[2] = function onPress() {

  };
  return jsx(MFAButtonDefault, { variant: "secondary", text: null, onPress: null });
};
