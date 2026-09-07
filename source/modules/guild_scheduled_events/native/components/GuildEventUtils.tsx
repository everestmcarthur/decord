// Module ID: 9774
// Function ID: 9775
// Name: getEventLocationIconSource
// Dependencies: [9710, 9719, 5028, 9720, 2]
// Exports: getEventLocationIconComponent, getEventLocationIconSource

// Module 9774 (getEventLocationIconSource)
import set from "set" /* 2 */;
import getChannelIcon from "getChannelIcon" /* 5028 */;
import registerAssetDefault from "registerAsset" /* 9719 */;

const result = set.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp4 = registerAssetDefault;
  } else {
    tmp4 = null;
    if (null != channel) {
      const tmpResult = getChannelIcon;
      if (stateFromStores2) {
        let channelIcon = tmpResult.getChannelIcon(channel);
      } else {
        channelIcon = tmpResult.getSimpleChannelIcon(channel);
      }
    }
  }
  return tmp4;
};
export const getEventLocationIconComponent = function getEventLocationIconComponent(event, channel, stateFromStores1) {
  if (null != obj.getLocationFromEvent(event)) {
    let LocationIcon = tmp(9720).LocationIcon;
  } else {
    LocationIcon = null;
    if (null != channel) {
      const tmpResult = tmp(5028);
      if (stateFromStores1) {
        let channelIconComponent = tmpResult.getChannelIconComponent(channel);
      } else {
        channelIconComponent = tmpResult.getSimpleChannelIconComponent(channel);
      }
      if (channelIconComponent == null) {
        channelIconComponent = null;
      }
      LocationIcon = channelIconComponent;
    }
  }
  return LocationIcon;
};
