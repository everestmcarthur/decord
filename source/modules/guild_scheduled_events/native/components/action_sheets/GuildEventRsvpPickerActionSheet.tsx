// Module ID: 9912
// Function ID: 9913
// Name: GuildEventRsvpPickerActionSheet
// Dependencies: [32, 19, 17, 1963, 21, 4607, 576, 9799, 1114, 7224, 7223, 7197, 5737, 5740, 5027, 9791, 4574, 2]
// Exports: default

// Module 9912 (GuildEventRsvpPickerActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9791 */;
import GuildEventRsvpUtils from "GuildEventRsvpUtils" /* 9799 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const constants = fn(1963).GuildScheduledEventUserResponses;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4607);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16 }, buttonWrapper: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.buttonWrapper = { marginTop: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx");

export default function GuildEventRsvpPickerActionSheet(event) {
  event = event.event;
  ({ recurrenceId: importDefault, guildId: dependencyMap, onRsvp: _slicedToArray } = event);
  let defaultValue;
  closure_5 = undefined;
  let tmp = closure_9();
  const tmp4 = _slicedToArray(defaultValue.useState(event(9799).ResponseOptions.SERIES), 2);
  defaultValue = tmp4[0];
  const existingRsvp = event(9799).getExistingRsvp(event.id, null);
  let response;
  if (existingRsvp != null) {
    response = existingRsvp.response;
  }
  const tmp9 = response === constants.INTERESTED ? constants.UNINTERESTED : constants.INTERESTED;
  closure_5 = tmp9;
  if (tmp9 === constants.INTERESTED) {
    const intl2 = tmp2(1114).intl;
    let stringResult = intl2.string(tmp2(1114).t.WtORed);
  } else {
    const intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t["8MPCVr"]);
  }
  const obj2 = { header: closure_7(event(7223).BottomSheetTitleHeader, { title: stringResult }), children: null };
  const obj3 = { bottom: true, style: tmp.container, children: null };
  const obj4 = { defaultValue, onChange: tmp4[1], hasIcons: false, children: null };
  const obj = event(9799);
  const responseOptions = event(9799).getResponseOptions();
  obj4.children = responseOptions.map((value) => closure_1_7(event(dependencyMap[13]).TableRadioRow, { value: value.value, label: value.name }, value.value));
  const items = [closure_7(event(5737).TableRadioGroup, obj4), ];
  const obj5 = { style: tmp.buttonWrapper, children: null };
  const obj6 = {
    onPress() {
      let tmp3 = null;
      if (first !== GuildEventRsvpUtils.ResponseOptions.SERIES) {
        tmp3 = closure_1_1;
      }
      GuildScheduledEventModalActionCreators.updateRsvp(event.id, tmp3, dependencyMap, closure_5);
      if (_slicedToArray != null) {
        _slicedToArray();
      }
      const tmpResult = GuildScheduledEventModalActionCreators;
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    text: null
  };
  const intl3 = tmp2(1114).intl;
  obj6.text = intl3.string(event(1114).t.TyCVIq);
  obj5.children = closure_7(event(5027).Button, obj6);
  items[1] = closure_7(closure_5, obj5);
  obj3.children = items;
  obj2.children = closure_8(event(7197).SafeAreaPaddingView, obj3);
  return closure_7(event(7224).BottomSheet, obj2);
};
