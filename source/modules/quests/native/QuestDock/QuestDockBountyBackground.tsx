// Module ID: 15264
// Function ID: 15265
// Name: QuestDockBountyBackground
// Dependencies: [19, 15153, 21, 15160, 15150, 11379, 15260, 2]

// Module 15264 (QuestDockBountyBackground)
import AssetUtils from "AssetUtils" /* 11379 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15260 */;
import noop from "module_19" /* 19 */;

require = fn;
const expandedHeight = fn(15153).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  questDockBounty = questDockBounty(15160).useQuestDockBounty();
  const obj = questDockBounty(15160);
  const items = [questDockBounty.videoPreview];
  const questDockBountyBackgroundColor = questDockBounty(15150).useQuestDockBountyBackgroundColor();
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, expandedHeight: null };
  const obj2 = questDockBounty(15150);
  obj3.collapsedMediaMode = questDockBounty(15260).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = questDockBountyBackgroundColor;
  obj3.expandedHeight = expandedHeight;
  return jsx(QuestDockVideoBackgroundDefault, { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, expandedHeight: null });
});
