// Module ID: 17423
// Function ID: 17424
// Name: VoicePanelContainer
// Dependencies: [19, 1958, 4930, 21, 504, 17424, 17469, 4345, 4432, 2]

// Module 17423 (VoicePanelContainer)
import _mod4345 from "module_4345" /* 4345 */;
import native from "native" /* 4432 */;
import VoicePanelControllerDefault from "VoicePanelController" /* 17424 */;
import VoicePanelUIDefault from "VoicePanelUI" /* 17469 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import VoicePanelStore from "VoicePanelStore" /* 4930 */;

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
  const tmp = VoicePanelStore((channels) => Array.from(channels.channels), _mod4345.shallow);
  return jsx(native.TransitionGroup, { items: VoicePanelStore((channels) => Array.from(channels.channels), _mod4345.shallow), getItemKey: getChannelKey, renderItem: renderVoicePanel });
});
