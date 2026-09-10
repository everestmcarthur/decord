// Module ID: 10143
// Function ID: 10144
// Name: ModeratorStartStageHeader
// Dependencies: [19, 17, 21, 4605, 5732, 10103, 10097, 2]

// Module 10143 (ModeratorStartStageHeader)
import StageActionHeader from "StageActionHeader" /* 10097 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 10103 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4605);
let obj = { header: { height: fn(5732).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 4, overflow: "visible" } };
let closure_6 = createStyles.createStyles(obj);
const obj3 = { height: fn(5732).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 4, overflow: "visible" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  const obj = { style: closure_6().header, pointerEvents: "box-none", children: null };
  const items = [React4(StageActionHeader.HideStageChannelCallIcon, { channel }), React4(StageActionHeader.StageChannelCallHeader, { channel }), , ];
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = tmp7(tmp8(10097).MusicMuteButton, obj2);
  }
  items[2] = speaker;
  items[3] = React4(StageActionHeader.StageInviteButton, { channelId: channel.id });
  obj.children = items;
  return hasOwnProperty(View, obj);
});
