// Module ID: 7825
// Function ID: 7826
// Name: BurstReactionAnimationPreview
// Dependencies: [19, 21, 7763, 7826, 2]
// Exports: default

// Module 7825 (BurstReactionAnimationPreview)
import MessageReactionsTypes from "MessageReactionsTypes" /* 7763 */;
import BurstReactionAnimationDefault from "BurstReactionAnimation" /* 7826 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default function BurstReactionAnimationPreview(arg0) {
  ({ channelId, emoji, messageId, reactionType } = arg0);
  let tmp2 = null;
  if (reactionType === MessageReactionsTypes.ReactionTypes.BURST) {
    const obj = { isFullscreen: true, channelId, messageId, emoji };
    tmp2 = jsx(BurstReactionAnimationDefault, { isFullscreen: true, channelId, messageId, emoji });
  }
  return tmp2;
};
