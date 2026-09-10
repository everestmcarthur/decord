// Module ID: 11037
// Function ID: 11038
// Name: ChannelVoiceChatModal
// Dependencies: [19, 21, 4758, 4806, 10996, 5147, 4488, 10146, 2]
// Exports: default

// Module 11037 (ChannelVoiceChatModal)
import GuildThemeGuildIdOverrideContextDefault from "GuildThemeGuildIdOverrideContext" /* 4488 */;
import useChannelNameDefault from "useChannelName" /* 4758 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4806 */;
import ChannelVoiceChatDefault from "ChannelVoiceChat" /* 10146 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10996 */;
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
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(5147).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, { value: guild_id, children: jsx(ChannelVoiceChatDefault, { channel, inModal: true }) });
  }} />;
};
