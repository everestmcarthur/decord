// Module ID: 15286
// Function ID: 15287
// Name: QuestDockBountyBackground
// Dependencies: [19, 15175, 21, 15182, 15172, 11418, 15282, 2]

// Module 15286 (QuestDockBountyBackground)
import AssetUtils from "AssetUtils" /* 11418 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15282 */;
import noop from "module_19" /* 19 */;

require = fn;
const expandedHeight = fn(15175).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  questDockBounty = questDockBounty(15182).useQuestDockBounty();
  const obj = questDockBounty(15182);
  const items = [questDockBounty.videoPreview];
  const questDockBountyBackgroundColor = questDockBounty(15172).useQuestDockBountyBackgroundColor();
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, expandedHeight: null };
  const obj2 = questDockBounty(15172);
  obj3.collapsedMediaMode = questDockBounty(15282).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = questDockBountyBackgroundColor;
  obj3.expandedHeight = expandedHeight;
  return jsx(QuestDockVideoBackgroundDefault, { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, expandedHeight: null });
});
