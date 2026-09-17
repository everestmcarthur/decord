// Module ID: 11124
// Function ID: 11125
// Name: ChannelVoiceChatModal
// Dependencies: [19, 21, 4793, 4841, 11081, 5184, 4523, 10226, 2]
// Exports: default

// Module 11124 (ChannelVoiceChatModal)
import GuildThemeGuildIdOverrideContextDefault from "GuildThemeGuildIdOverrideContext" /* 4523 */;
import useChannelNameDefault from "useChannelName" /* 4793 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4841 */;
import ChannelVoiceChatDefault from "ChannelVoiceChat" /* 10226 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 11081 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default function ChannelVoiceChatModal(channel) {
  channel = channel.channel;
  const tmp2 = useChannelNameDefault(channel);
  const items = [channel.id];
  const effect = noop.useEffect(() => {
    ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
    return () => {
      ChannelRTCActionCreatorsDefault.updateChatOpen(id.id, false);
    };
  }, items);
  let str = tmp2;
  if (tmp2 == null) {
    str = "";
  }
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(5184).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, { value: guild_id, children: jsx(ChannelVoiceChatDefault, { channel, inModal: true }) });
  }} />;
};
