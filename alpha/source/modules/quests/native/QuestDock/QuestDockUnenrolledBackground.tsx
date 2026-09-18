// Module ID: 15407
// Function ID: 15408
// Name: QuestDockUnenrolledBackground
// Dependencies: [19, 15301, 21, 15308, 15297, 4423, 576, 15408, 2]

// Module 15407 (QuestDockUnenrolledBackground)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4423 */;
import QuestHooks from "QuestHooks" /* 15297 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15308 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15408 */;
import noop from "module_19" /* 19 */;

require = fn;
const expandedHeight = fn(15301).QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default noop.memo(function QuestDockUnenrolledBackground() {
  const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
  const questDockHeroAsset = QuestHooks.useQuestDockHeroAsset(questDockQuest);
  ({ videoAsset, staticUrl } = questDockHeroAsset);
  const token = useToken.useToken(nativeDefault.colors.CARD_BACKGROUND_DEFAULT);
  const obj4 = { expandedHeight, imageUrl: staticUrl, videoUrl: null, videoMimetype: null, gradientBaseColor: null };
  let url;
  const tmp4 = jsx;
  if (videoAsset != null) {
    url = videoAsset.url;
  }
  obj4.videoUrl = url;
  let mimetype;
  if (videoAsset != null) {
    mimetype = videoAsset.mimetype;
  }
  if (mimetype == null) {
    mimetype = null;
  }
  obj4.videoMimetype = mimetype;
  obj4.gradientBaseColor = token;
  return tmp4(QuestDockVideoBackgroundDefault, obj4);
});
