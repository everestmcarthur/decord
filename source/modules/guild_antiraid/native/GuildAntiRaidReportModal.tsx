// Module ID: 14019
// Function ID: 14020
// Name: GuildAntiRaidReportModal
// Dependencies: [32, 19, 17, 14020, 21, 4607, 576, 1611, 4603, 4301, 1114, 5739, 5656, 5027, 5676, 11927, 7074, 2]
// Exports: default

// Module 14019 (GuildAntiRaidReportModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4603 */;
import components_Button_Button from "components/Button/Button" /* 5027 */;
import NavigatorHeader from "NavigatorHeader" /* 5676 */;
import TableRowGroup from "TableRowGroup" /* 5739 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ReportModal(onSubmit) {
  ({ raidTypes: require, onChange: importDefault } = onSubmit);
  const tmp = closure_12();
  dependencyMap = tmp;
  const items = [tmp];
  closure_3 = noop.useCallback((arg0) => React7(Text_Text.Text, { style: formRow.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: React5(arg0) }), items);
  const obj = { style: tmp.container, children: null };
  const callback = noop.useCallback(() => {
    require("Linking").openURL(closure_1_6());
  }, []);
  const obj2 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t.Hg8Ee7, { onClick: callback });
  const items1 = [closure_9(Text_Text.Text, obj2), , ];
  const obj3 = {
    style: tmp.formBody,
    children: closure_9(TableRowGroup.TableRowGroup, {
      hasIcons: false,
      children: length.map((item, index) => {
        closure_0 = item;
        return closure_1_9(require("TableCheckboxRow").TableCheckboxRow, {
          start: 0 === index,
          end: index === length.length - 1,
          label: closure_3(item),
          checked: closure_0.includes(item),
          onPress() {
            return importDefault(closure_0);
          }
        }, item);
      })
    })
  };
  items1[1] = closure_9(View, obj3);
  const obj5 = { style: null, children: null };
  const items2 = [tmp.submitButtonContainer, ];
  const obj4 = {
    hasIcons: false,
    children: length.map((item, index) => {
      closure_0 = item;
      return closure_1_9(require("TableCheckboxRow").TableCheckboxRow, {
        start: 0 === index,
        end: index === length.length - 1,
        label: closure_3(item),
        checked: closure_0.includes(item),
        onPress() {
          return importDefault(closure_0);
        }
      }, item);
    })
  };
  items2[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
  obj5.style = items2;
  const obj7 = { size: "md", text: null, onPress: null };
  const intl2 = util.intl;
  obj7.text = intl2.string(util.t.geKm7t);
  obj7.onPress = onSubmit.onSubmit;
  obj5.children = closure_9(components_Button_Button.Button, obj7);
  items1[2] = closure_9(View, obj5);
  obj.children = items1;
  return closure_10(View, obj);
}
const View = fn(17).View;
const GuildReportRaidModalConstants = fn(14020);
({ getReportRaidHelpArticleURL: metroRequire, getReportRaidTypeLabel: closure_7, REPORT_RAID_OPTIONS: closure_8 } = GuildReportRaidModalConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const REPORT_RAID = "REPORT_RAID";
const createStyles = fn(4607);
let obj2 = { container: { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 }, headerSubtitle: { textAlign: "center", marginTop: 8 }, formBody: { marginTop: 24 }, formRow: { paddingVertical: 2 }, submitButtonContainer: null };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.submitButtonContainer = rect;
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx");

export default function GuildAntiRaidReportModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const guildId = onCloseModal.guildId;
  first = undefined;
  _slicedToArray = undefined;
  [first, _slicedToArray] = noop.useState([]);
  const items = [onCloseModal, first, guildId];
  const memo = noop.useMemo(() => {
    const raidTypes = first;
    function onChange(arg0) {
      closure_0 = arg0;
      closure_1_3((arr) => {
        if (arr.includes(closure_0)) {
          let found = arr.filter((item) => item !== closure_1_0);
        } else {
          found = [];
          found[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
        }
        return found;
      });
    }
    function onSubmit() {
      const result = onCloseModal(first[15]).trackReportRaidViewed(onChange, onSubmit);
      const obj = onCloseModal(first[15]);
      onCloseModal(first[15]).handleReportRaid(onChange);
      raidTypes();
    }
    let obj = {};
    const obj2 = { ignoreKeyboard: true, title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.uYPGsS);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(onCloseModal);
    obj2.render = function render() {
      return closure_2_9(ReportModal, { raidTypes, onChange, onSubmit });
    };
    obj[REPORT_RAID] = obj2;
    return obj;
  }, items);
  return closure_9(onCloseModal(first[16]).Navigator, { screens: memo, initialRouteName: REPORT_RAID, headerStatusBarHeight: guildId(first[7])().top });
};
