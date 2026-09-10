// Module ID: 12963
// Function ID: 12964
// Name: VoicePanelSpoilerAlert
// Dependencies: [19, 21, 4924, 4924, 1114, 5534, 5425, 2]
// Exports: default

// Module 12963 (VoicePanelSpoilerAlert)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5425 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5534 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx");

export default function VoicePanelSpoilerAlert(channelId) {
  channelId = channelId.channelId;
  closure_1 = channelId(4924).useDismissModalCallback();
  const obj2 = { title: null, content: null, actions: null };
  const intl = channelId(1114).intl;
  obj2.title = intl.string(channelId(1114).t["q38/ae"]);
  const intl2 = channelId(1114).intl;
  obj2.content = intl2.string(channelId(1114).t["2fDWXK"]);
  const obj3 = { children: null };
  const obj4 = {
    variant: "primary",
    onPress() {
      GuildActionCreatorsDefault.spoilerAgree(channelId);
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channelId);
      closure_1();
    },
    text: null
  };
  const intl3 = channelId(1114).intl;
  obj4.text = intl3.string(channelId(1114).t.p89ACt);
  const items = [closure_3(channelId(4924).AlertActionButton, obj4, "confirm"), ];
  const obj5 = {
    variant: "secondary",
    onPress() {
      closure_1();
    },
    text: null
  };
  const intl4 = channelId(1114).intl;
  obj5.text = intl4.string(channelId(1114).t["/g10LC"]);
  items[1] = closure_3(channelId(4924).AlertActionButton, obj5, "cancel");
  obj3.children = items;
  obj2.actions = closure_4(channelId(4924).AlertActions, obj3);
  return closure_3(channelId(4924).AlertModal, obj2);
};
export const VOICE_PANEL_SPOILER_KEY = "voice-panel-spoiler";
