// Module ID: 11172
// Function ID: 11173
// Name: GroupDMRow
// Dependencies: [19, 11121, 21, 4909, 11173, 1177, 11174, 4752, 5816, 5817, 2]
// Exports: default

// Module 11172 (GroupDMRow)
import native from "native" /* 1177 */;
import useChannelNameDefault from "useChannelName" /* 4909 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 11173 */;
import useRecipientsLabel from "useRecipientsLabel" /* 11174 */;
import noop from "module_19" /* 19 */;

require = fn;
const UserRowModes = fn(11121).UserRowModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  channel = channel.channel;
  let NONE = channel.mode;
  if (NONE === undefined) {
    NONE = UserRowModes.NONE;
  }
  let flag = channel.selected;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = channel.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onPress = channel.onPress;
  const merged = Object.assign(channel, Object.assign({ channel: 0, mode: 0, selected: 0, disabled: 0, onPress: 0 }));
  let str = useChannelNameDefault(channel);
  const items = [channel, onPress];
  const callback = noop.useCallback(() => {
    if (onPress != null) {
      tmp(channel);
    }
  }, items);
  const obj = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
  const tmp8 = jsx(GroupDMAvatarDefault, { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel });
  const recipientsLabel = useRecipientsLabel.useRecipientsLabel(channel);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.disabled = flag2;
  let tmp5Result;
  if (null != recipientsLabel) {
    const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp5Result = tmp5(tmp7(4752).Text, obj4);
  }
  obj3.subLabel = tmp5Result;
  obj3.icon = tmp8;
  obj3.onPress = callback;
  if (str == null) {
    str = "";
  }
  obj3.label = str;
  obj3.labelLineClamp = 1;
  obj3.height = "100%";
  if (NONE === UserRowModes.TOGGLE) {
    const obj5 = {};
    const merged2 = Object.assign(obj3);
    obj5.checked = flag;
    let tmp5Result2 = tmp5(tmp7(5816).TableCheckboxRow, obj5);
  } else {
    const obj6 = {};
    const merged3 = Object.assign(obj3);
    tmp5Result2 = tmp5(tmp7(5817).TableRow, obj6);
  }
  return tmp5Result2;
};
