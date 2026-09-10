// Module ID: 9108
// Function ID: 9109
// Name: InAppReportsMultiSelect
// Dependencies: [19, 17, 21, 4574, 576, 5701, 5618, 2]
// Exports: default

// Module 9108 (InAppReportsMultiSelect)
import nativeDefault from "native" /* 576 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5618 */;
import TableRowGroup from "TableRowGroup" /* 5701 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx");

export default function MultiSelect(arg0) {
  ({ element, onPress: require, state: dependencyMap } = arg0);
  if (null != element) {
    if ("checkbox" === element.type) {
      const data = element.data;
      const obj = { style: tmp.container, children: null };
      const obj2 = {
        hasIcons: false,
        children: data.map((item) => {
              [tmp, tmp2, tmp3] = item;
              return jsx(TableCheckboxRow.TableCheckboxRow, {
                label: tmp2,
                subLabel: tmp3,
                onPress() {
                  return require(closure_1_0, closure_1_1);
                },
                checked: tmp in closure_1
              }, tmp);
            })
      };
      obj.children = jsx(TableRowGroup.TableRowGroup, {
        hasIcons: false,
        children: data.map((item) => {
              [tmp, tmp2, tmp3] = item;
              return jsx(TableCheckboxRow.TableCheckboxRow, {
                label: tmp2,
                subLabel: tmp3,
                onPress() {
                  return require(closure_1_0, closure_1_1);
                },
                checked: tmp in closure_1
              }, tmp);
            })
      });
      return <View style={tmp.container}>{null}</View>;
    }
  }
  return null;
};
