// Module ID: 10033
// Function ID: 10034
// Name: JoinStageView
// Dependencies: [19, 21, 5483, 5477, 9768, 1114, 8488, 9991, 2]
// Exports: default

// Module 10033 (JoinStageView)
import util from "util" /* 1114 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5477 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5483 */;
import StageChannelUtils from "StageChannelUtils" /* 8488 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 9768 */;
import StageActionBarButtons from "StageActionBarButtons" /* 9991 */;
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
