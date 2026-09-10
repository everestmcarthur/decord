// Module ID: 17141
// Function ID: 17142
// Name: VoicePanelContainer
// Dependencies: [19, 1957, 4813, 21, 504, 17142, 17186, 4227, 4315, 2]

// Module 17141 (VoicePanelContainer)
import _mod4227 from "module_4227" /* 4227 */;
import native from "native" /* 4315 */;
import VoicePanelControllerDefault from "VoicePanelController" /* 17142 */;
import VoicePanelUIDefault from "VoicePanelUI" /* 17186 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import VoicePanelStore from "VoicePanelStore" /* 4813 */;

require = fn;
function VoicePanel(arg0) {
  _require = arg0;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = {};
  const obj = require("initialize");
  const merged = Object.assign(arg0);
  obj2.guildId = stateFromStores;
  obj2.children = noop.useMemo(() => jsx(VoicePanelUIDefault, {}), []);
  return jsx(VoicePanelControllerDefault, {});
}
function getChannelKey(arg0) {
  return arg0;
}
function renderVoicePanel(arg0, channelId, transitionState, transitionCleanUp) {
  return <VoicePanel key={arg1} channelId={arg1} transitionState={arg2} transitionCleanUp={arg3} />;
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default noop.memo(function VoicePanelContainer() {
  const tmp = VoicePanelStore((channels) => Array.from(channels.channels), _mod4227.shallow);
  return jsx(native.TransitionGroup, { items: VoicePanelStore((channels) => Array.from(channels.channels), _mod4227.shallow), getItemKey: getChannelKey, renderItem: renderVoicePanel });
});
