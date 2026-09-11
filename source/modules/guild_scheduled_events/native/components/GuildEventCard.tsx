// Module ID: 9899
// Function ID: 9900
// Name: GuildEventCard
// Dependencies: [19, 17, 4629, 7599, 1963, 21, 4606, 576, 9863, 5484, 504, 9795, 5658, 8496, 9887, 2]

// Module 9899 (GuildEventCard)
import nativeDefault from "native" /* 576 */;
import ButtonGroup from "ButtonGroup" /* 5484 */;
import GuildEventCardComponents from "GuildEventCardComponents" /* 9863 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4629 */;

const require = globalThis.__r;

require = fn;
function GuildEventCardControls(onCloseAction) {
  ({ event, isConnected } = onCloseAction);
  const tmp = styles();
  const primaryActionButtonType = GuildEventCardComponents.usePrimaryActionButtonType(event, isConnected);
  const obj2 = { direction: "horizontal", style: tmp.actionContainer, children: null };
  const items = [React5(GuildEventCardComponents.GuildEventCardPrimaryAction, { event, onCloseAction: onCloseAction.onCloseAction, isConnected }), , ];
  let tmp6Result = primaryActionButtonType === GuildEventCardComponents.PrimaryActionType.START;
  if (tmp6Result) {
    const obj3 = { event };
    tmp6Result = tmp6(tmp2(9863).GuildEventCardRSVPAction, obj3);
  }
  items[1] = tmp6Result;
  items[2] = React5(GuildEventCardComponents.GuildEventShareAction, { event });
  obj2.children = items;
  return React6(ButtonGroup.ButtonGroup, obj2);
}
const View = fn(17).View;
let closure_5 = fn(7599).isGuildScheduledEventActive;
fn(1963).AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4606);
let obj = { actionContainer: { paddingTop: nativeDefault.space.PX_16, paddingBottom: 0 } };
const styles = createStyles.createStyles(obj);
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: 0 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCard.tsx");

export default noop.memo((event) => {
  event = event.event;
  ({ onPress: importDefault, onCloseAction, hideControls } = event);
  if (hideControls === undefined) {
    hideControls = false;
  }
  let flag = event.hideAgeVerificationNotice;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = event.isNew;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const channel_id = event.channel_id;
  const items = [RTCConnectionStore];
  const items1 = [channel_id];
  let stateFromStores = event(channel_id[10]).useStateFromStores(items, () => {
    let isConnectedResult = RTCConnectionStore.isConnected();
    if (isConnectedResult) {
      isConnectedResult = RTCConnectionStore.getChannelId() === channel_id;
    }
    return isConnectedResult;
  }, items1);
  if (stateFromStores) {
    stateFromStores = closure_5(event);
  }
  function handlePress() {
    if (importDefault != null) {
      tmp(event);
    }
  }
  const obj = event(channel_id[10]);
  const result = event(channel_id[11]).recurrenceRuleFromServer(event.recurrence_rule);
  const obj2 = { accessible: false, onPress: handlePress, children: null };
  const items2 = [closure_7(event(channel_id[8]).GuildEventCardHeader, { event, isNew: flag2 }), closure_7(event(channel_id[8]).GuildEventCardMetaInfo, { event, onTitlePress: handlePress }), , , , ];
  let hasItem = !flag;
  if (!flag) {
    hasItem = set.has(event.entity_type);
  }
  if (hasItem) {
    const obj3 = { noBackground: true, onConfirmPress: onCloseAction, channelId: channel_id };
    hasItem = tmp6(require("StageChannelAgeVerificationNotice"), obj3);
  }
  items2[2] = hasItem;
  items2[3] = closure_7(event(channel_id[8]).GuildEventSimpleLocation, { event });
  let tmp6Result = null;
  if (!hideControls) {
    const obj4 = { event, onCloseAction, isConnected: stateFromStores };
    tmp6Result = tmp6(GuildEventCardControls, obj4);
  }
  items2[4] = tmp6Result;
  let tmp6Result2 = null != result;
  if (tmp6Result2) {
    const obj5 = {
      guildId: event.guild_id,
      recurrenceRule: result,
      guildEventId: event.id,
      onRecurrencePress(arg0) {
          let tmpResult;
          if (importDefault != null) {
            tmpResult = tmp(event, arg0);
          }
          return tmpResult;
        }
    };
    tmp6Result2 = tmp6(require("GuildEventRecurrences"), obj5);
  }
  items2[5] = tmp6Result2;
  obj2.children = closure_8(View, { children: items2 });
  return closure_7(event(channel_id[12]).Card, obj2);
});
export const useGuildEventCardStyles = styles;
