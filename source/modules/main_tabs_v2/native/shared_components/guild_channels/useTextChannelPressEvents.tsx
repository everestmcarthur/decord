// Module ID: 17365
// Function ID: 17366
// Name: useTextChannelPressEvents
// Dependencies: [19, 1958, 4735, 4733, 10461, 16371, 11163, 2]
// Exports: useTextChannelPressEvents

// Module 17365 (useTextChannelPressEvents)
import transitionToChannel from "transitionToChannel" /* 4733 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4735 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 10461 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11163 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 16371 */;
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
