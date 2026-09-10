// Module ID: 15235
// Function ID: 15236
// Name: QuestDockBountyBackground
// Dependencies: [19, 21, 15132, 15122, 11317, 15232, 2]

// Module 15235 (QuestDockBountyBackground)
import AssetUtils from "AssetUtils" /* 11317 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15232 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  questDockBounty = questDockBounty(15132).useQuestDockBounty();
  const obj = questDockBounty(15132);
  const items = [questDockBounty.videoPreview];
  const questDockBountyBackgroundColor = questDockBounty(15122).useQuestDockBountyBackgroundColor();
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null };
  const obj2 = questDockBounty(15122);
  obj3.collapsedMediaMode = questDockBounty(15232).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = questDockBountyBackgroundColor;
  return jsx(QuestDockVideoBackgroundDefault, { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null });
});
