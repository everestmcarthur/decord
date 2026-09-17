// Module ID: 11881
// Function ID: 11882
// Name: EmojiRow
// Dependencies: [19, 17, 7265, 21, 4640, 4607, 4608, 7884, 4290, 7570, 11284, 4341, 576, 11882, 11883, 11408, 11884, 7296, 2]
// Exports: default

// Module 11881 (EmojiRow)
import ReactionUtils from "ReactionUtils" /* 4290 */;
import useToken from "useToken" /* 4341 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import HapticUtils from "HapticUtils" /* 4608 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7570 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7884 */;
import DoubleTapReminderToast from "DoubleTapReminderToast" /* 11284 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 11408 */;
import useEmojisForReactionRow from "useEmojisForReactionRow" /* 11882 */;
import EmojiReactionRowButton from "EmojiReactionRowButton" /* 11883 */;
import DoubleTapEmojiEditNudge from "DoubleTapEmojiEditNudge" /* 11884 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(7265).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4640);
let closure_7 = createStyles.createStyles({ emojiRowContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, emojiRow: { height: 52, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginBottom: 0 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default function EmojiRow(arg0) {
  ({ message: require, channel } = arg0);
  dependencyMap = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  const emojiFontSize = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  const emojiLineHeight = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  const token = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  const token1 = useToken.useToken(channel(576).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  const emojisForReactionRow = useEmojisForReactionRow.useEmojisForReactionRow(channel, emojiLineHeight, token + token1);
  const tmp3 = closure_7();
  let obj7 = { style: tmp3.emojiRowContainer, children: null };
  const obj8 = { style: tmp3.emojiRow, children: null };
  const items = [
    emojisForReactionRow.map((emoji, index) => {
      closure_0 = emoji;
      return token(require("EmojiReactionRowButton").EmojiReactionRowButton, {
        emoji,
        onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          if (null != closure_0) {
            const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
            ({ channel_id, id } = tmp);
            const obj3 = ReactionActionCreators;
            obj3.addReaction(channel_id, id, ReactionUtils.toReactionEmoji(tmp2));
            ({ channel_id: obj6.channelId, id: obj6.messageId } = tmp);
            MessageActionCreatorsDefault.focusMessage({ channelId: null, messageId: null });
            const obj5 = { channelId: null, messageId: null };
            const tmp3Result = MessageActionCreatorsDefault;
            const result1 = DoubleTapReminderToast.maybeShowDoubleTapReminderToast(tmp2);
          }
        },
        emojiSize,
        emojiFontSize,
        emojiLineHeight,
        emojiContainerSize: token
      }, require("EmojiReactionRowButton").getEmojiKey(emoji, index));
    }),
    token(EmojiReactionRowButton.EmojiPickerRowButton, {
      emojiContainerSize: token,
      onPress() {
        return reactions_ReactionUtils.handleAddNewReactions(channel, id.id, ReactionActionCreators.ReactionLocations.MESSAGE);
      }
    })
  ];
  obj8.children = items;
  const items1 = [closure_6(emojiFontSize, obj8), ];
  const obj9 = {
    emojiContainerSize: token,
    onPress() {
      return reactions_ReactionUtils.handleAddNewReactions(channel, id.id, ReactionActionCreators.ReactionLocations.MESSAGE);
    }
  };
  items1[1] = token(DoubleTapEmojiEditNudge.DoubleTapEmojiEditNudge, { location: channel(7296).MESSAGE_LONG_PRESS_MENU });
  obj7.children = items1;
  return closure_6(emojiFontSize, obj7);
};
