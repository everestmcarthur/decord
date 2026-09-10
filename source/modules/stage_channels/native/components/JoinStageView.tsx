// Module ID: 9972
// Function ID: 9973
// Name: JoinStageView
// Dependencies: [19, 21, 5445, 5439, 9707, 1114, 8428, 9930, 2]
// Exports: default

// Module 9972 (JoinStageView)
import util from "util" /* 1114 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5439 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5445 */;
import StageChannelUtils from "StageChannelUtils" /* 8428 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 9707 */;
import StageActionBarButtons from "StageActionBarButtons" /* 9930 */;
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
