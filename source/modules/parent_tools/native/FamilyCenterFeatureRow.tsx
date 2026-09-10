// Module ID: 14963
// Function ID: 14964
// Name: FamilyCenterFeatureRow
// Dependencies: [19, 17, 21, 4605, 576, 11990, 1114, 2396, 14964, 14965, 12446, 7020, 9931, 14960, 5023, 4601, 5737, 5655, 2]
// Exports: default

// Module 14963 (FamilyCenterFeatureRow)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import Text_Text from "Text/Text" /* 4601 */;
import Stack_Stack from "Stack/Stack" /* 5023 */;
import TableRow from "TableRow" /* 5655 */;
import TableRowGroup from "TableRowGroup" /* 5737 */;
import EyeIcon from "EyeIcon" /* 7020 */;
import _modDef9931 from "module_9931" /* 9931 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11990 */;
import _modDef12446 from "module_12446" /* 12446 */;
import QrCodeIcon from "QrCodeIcon" /* 14960 */;
import _modDef14964 from "module_14964" /* 14964 */;
import ChatCheckIcon from "ChatCheckIcon" /* 14965 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4605);
let obj2 = { tableGroup: { marginTop: 20, marginBottom: nativeDefault.space.PX_24 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterFeatureRow.tsx");

export default function FamilyCenterFeatureRows() {
  const tmp = closure_6();
  const intl = util.intl;
  const obj = useAgeSpecificText;
  const intl2 = util.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2396.qITXhY), intl2.string(_modDef2396.bmhCnL));
  const stringResult = intl.string(_modDef2396.qITXhY);
  const intl3 = util.intl;
  const obj2 = useAgeSpecificText;
  const intl4 = util.intl;
  const ageSpecificText1 = obj2.useAgeSpecificText(intl3.string(_modDef2396.t7SkFy), intl4.string(_modDef2396["68zfxD"]));
  const stringResult1 = intl3.string(_modDef2396.t7SkFy);
  const intl5 = util.intl;
  const obj3 = useAgeSpecificText;
  const intl6 = util.intl;
  const obj4 = { icon: null, IconComponent: null, header: null, description: null };
  const ageSpecificText2 = obj3.useAgeSpecificText(intl5.string(_modDef2396["+pi4Yt"]), intl6.string(_modDef2396["1xPTwE"]));
  obj4.icon = _modDef14964;
  obj4.IconComponent = ChatCheckIcon.ChatCheckIcon;
  const intl7 = util.intl;
  obj4.header = intl7.string(_modDef2396["001l3m"]);
  obj4.description = ageSpecificText;
  const items = [obj4, , ];
  const obj5 = { icon: _modDef12446, IconComponent: EyeIcon.EyeIcon, header: null, description: null };
  const intl8 = util.intl;
  obj5.header = intl8.string(_modDef2396.yipAeP);
  obj5.description = ageSpecificText1;
  items[1] = obj5;
  const obj6 = { icon: _modDef9931, IconComponent: QrCodeIcon.QrCodeIcon, header: null, description: null };
  const intl9 = util.intl;
  obj6.header = intl9.string(_modDef2396.hhOuMe);
  obj6.description = ageSpecificText2;
  items[2] = obj6;
  const obj7 = { style: tmp.tableGroup, children: null };
  const obj8 = { spacing: 8, children: null };
  const obj9 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl10 = util.intl;
  obj9.children = intl10.string(_modDef2396["6JkHSg"]);
  const items1 = [React4(Text_Text.Text, obj9), ];
  const stringResult2 = intl5.string(_modDef2396["+pi4Yt"]);
  items1[1] = React4(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: items.map((header) => {
      header = header.header;
      ({ description, icon, IconComponent } = header);
      return closure_1_4(TableRow.TableRow, { label: header, subLabel: description, icon: closure_1_4(TableRow.TableRow.Icon, { source: icon, IconComponent }) }, header);
    })
  });
  obj8.children = items1;
  obj7.children = hasOwnProperty(Stack_Stack.Stack, obj8);
  return React4(View, obj7);
};
