// Module ID: 15284
// Function ID: 15285
// Name: QuestDockBountyBackground
// Dependencies: [19, 15174, 21, 15181, 15171, 11357, 15281, 2]

// Module 15284 (QuestDockBountyBackground)
import AssetUtils from "AssetUtils" /* 11357 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15281 */;
import noop from "module_19" /* 19 */;

require = fn;
const expandedHeight = fn(15174).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  questDockBounty = questDockBounty(15181).useQuestDockBounty();
  const obj = questDockBounty(15181);
  const items = [questDockBounty.videoPreview];
  const questDockBountyBackgroundColor = questDockBounty(15171).useQuestDockBountyBackgroundColor();
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, expandedHeight: null };
  const obj2 = questDockBounty(15171);
  obj3.collapsedMediaMode = questDockBounty(15281).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = questDockBountyBackgroundColor;
  obj3.expandedHeight = expandedHeight;
  return jsx(QuestDockVideoBackgroundDefault, { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, expandedHeight: null });
});
