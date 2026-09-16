// Module ID: 17195
// Function ID: 17196
// Name: useTextChannelPressEvents
// Dependencies: [19, 1958, 4651, 4649, 10359, 16244, 11062, 2]
// Exports: useTextChannelPressEvents

// Module 17195 (useTextChannelPressEvents)
import transitionToChannel from "transitionToChannel" /* 4649 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4651 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 10359 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11062 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 16244 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx");

export const useTextChannelPressEvents = function useTextChannelPressEvents(channel, flag2) {
  const user = channel;
  const navigationReplace = flag2;
  let obj = { onPress: null, onLongPress: null, unstable_pressDelay: 32 };
  const items = [, , ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  items[2] = flag2;
  obj.onPress = noop.useCallback(() => {
    ChannelActionCreatorsDefault.preload(user.guild_id, user.id);
    transitionToChannel.transitionToChannel(user.id, { navigationReplace });
  }, items);
  const items1 = [channel];
  obj.onLongPress = noop.useCallback(() => {
    const channel = ChannelStore.getChannel(user.parent_id);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        if (obj.isForumPost()) {
          showLongPressForumPostActionSheetDefault(obj, channel);
        }
      }
    }
    if (user.isThread()) {
      showThreadLongPressActionSheetDefault(obj.id);
    } else {
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(obj.id);
    }
  }, items1);
  return obj;
};
