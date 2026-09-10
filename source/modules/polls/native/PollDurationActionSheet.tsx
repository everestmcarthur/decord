// Module ID: 12271
// Function ID: 12272
// Name: PollDurationActionSheet
// Dependencies: [19, 21, 12270, 4316, 4572, 5735, 1114, 5738, 7249, 2]
// Exports: default

// Module 12271 (PollDurationActionSheet)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4316 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import ActionSheet from "ActionSheet" /* 7249 */;
import usePollDurationOptionsDefault from "usePollDurationOptions" /* 12270 */;
import noop from "module_19" /* 19 */;

require = fn;
function PollDurationRadioGroup(onChange) {
  onChange = onChange.onChange;
  const tmp = usePollDurationOptionsDefault();
  importDefault = tmp;
  const items = [tmp, onChange];
  const callback = noop.useCallback((arg0) => {
    onChange(arg0);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(closure_1[arg0]);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const obj = { title: null, hasIcons: false, onChange: null, defaultValue: null, children: null };
  const intl = onChange(1114).intl;
  obj.title = intl.string(onChange(1114).t["0ZStp9"]);
  obj.onChange = callback;
  obj.defaultValue = onChange.selectedDuration;
  const entries = Object.entries(tmp);
  obj.children = entries.map((item) => {
    [tmp, tmp2] = item;
    return jsx(onChange(dependencyMap[7]).TableRadioRow, { value: parseInt(tmp), label: tmp2 }, tmp);
  });
  return jsx(onChange(5735).TableRadioGroup, { title: null, hasIcons: false, onChange: null, defaultValue: null, children: null });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/PollDurationActionSheet.tsx");

export default function PollDurationActionSheet(arg0) {
  ({ selectedDuration, onChange } = arg0);
  return jsx(ActionSheet.ActionSheet, { children: <PollDurationRadioGroup selectedDuration={selectedDuration} onChange={onChange} /> });
};
