// Module ID: 11409
// Function ID: 11410
// Name: ThreadNotificationSettingsBottomSheet
// Dependencies: [1113, 21, 10180, 7271, 7223, 1114, 5737, 7838, 5740, 2]
// Exports: default

// Module 11409 (ThreadNotificationSettingsBottomSheet)
import jsxProd from "jsxProd" /* 21 */;
import ThreadConstants from "ThreadConstants" /* 1113 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7838 */;
import size from "module_2" /* 2 */;

let closure_3 = ThreadConstants.getThreadNotificationOptions;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx");

export default function ThreadNotificationsBottomSheet(channel) {
  channel = channel.channel;
  const threadNotificationSetting = channel(10180).useThreadNotificationSetting(channel);
  const obj2 = { header: null, children: null };
  const obj3 = { title: null };
  const intl = channel(1114).intl;
  obj3.title = intl.string(channel(1114).t.h850Ss);
  obj2.header = jsx(channel(7223).BottomSheetTitleHeader, { title: null });
  const obj4 = {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      return ThreadActionCreatorsDefault.setNotificationSettings(channel, { flags });
    },
    accessibilityLabel: null,
    children: null
  };
  const intl2 = channel(1114).intl;
  obj4.accessibilityLabel = intl2.string(channel(1114).t.h850Ss);
  const obj = channel(10180);
  obj4.children = closure_3().map((label) => {
    const setting = label.setting;
    return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label: label.label }, "" + setting);
  });
  obj2.children = jsx(channel(5737).TableRadioGroup, {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      return ThreadActionCreatorsDefault.setNotificationSettings(channel, { flags });
    },
    accessibilityLabel: null,
    children: null
  });
  return jsx(channel(7271).ActionSheet, { header: null, children: null });
};
