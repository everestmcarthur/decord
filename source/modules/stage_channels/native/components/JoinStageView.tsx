// Module ID: 10010
// Function ID: 10011
// Name: JoinStageView
// Dependencies: [19, 21, 5481, 5475, 9745, 1114, 8465, 9968, 2]
// Exports: default

// Module 10010 (JoinStageView)
import util from "util" /* 1114 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5475 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5481 */;
import StageChannelUtils from "StageChannelUtils" /* 8465 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 9745 */;
import StageActionBarButtons from "StageActionBarButtons" /* 9968 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  const stageParticipants = StageChannelParticipantStoreHooks.useStageParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === StageChannelParticipants.StageChannelParticipantTypes.VOICE);
  const obj2 = { title: null, body: null, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.WZOeQv);
  obj2.body = StageChannelUtils.getParticipantNamesText(channel, found);
  obj2.children = jsx(StageActionBarButtons.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};
