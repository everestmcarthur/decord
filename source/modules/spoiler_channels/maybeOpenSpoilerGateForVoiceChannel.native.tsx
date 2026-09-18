// Module ID: 13175
// Function ID: 13176
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1958, 21, 7525, 5068, 13176, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 13175 (maybeOpenSpoilerGateForVoiceChannel)
import useAlertStore from "useAlertStore" /* 5068 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 7525 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 13176 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  const channel = ChannelStore.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    tmp2 = !SpoilerChannelUtils.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    const obj3 = { channelId: channel.id };
    useAlertStore.openAlert(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId: channel.id }));
    flag = true;
  }
  return flag;
};
