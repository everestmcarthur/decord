// Module ID: 7097
// Function ID: 7098
// Name: TextInputField
// Dependencies: [19, 17, 5073, 21, 4574, 6620, 4570, 1114, 2]
// Exports: default

// Module 7097 (TextInputField)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4570 */;
import TextInput from "TextInput" /* 6620 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MAX_TEXT_RESPONSE_LENGTH = fn(5073).MAX_TEXT_RESPONSE_LENGTH;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let closure_5 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TextInputField.tsx");

export default function TextInputField(field) {
  field = field.field;
  let str = field.response;
  const obj = { style: closure_5().container, children: null };
  const obj2 = { label: jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label }), maxLength: MAX_TEXT_RESPONSE_LENGTH, value: null, placeholder: null, onChange: null };
  if (str == null) {
    str = "";
  }
  obj2.value = str;
  const intl = tmp3(1114).intl;
  obj2.placeholder = intl.string(util.t["Sqn+Wh"]);
  obj2.onChange = field.onChange;
  obj.children = jsx(TextInput.TextInput, { label: jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label }), maxLength: MAX_TEXT_RESPONSE_LENGTH, value: null, placeholder: null, onChange: null });
  return <View style={closure_5().container}>{null}</View>;
};
