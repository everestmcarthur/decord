// Module ID: 10031
// Function ID: 10032
// Name: JoinStageView
// Dependencies: [19, 21, 5482, 5476, 9766, 1114, 8486, 9989, 2]
// Exports: default

// Module 10031 (JoinStageView)
import util from "util" /* 1114 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5476 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5482 */;
import StageChannelUtils from "StageChannelUtils" /* 8486 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 9766 */;
import StageActionBarButtons from "StageActionBarButtons" /* 9989 */;
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
