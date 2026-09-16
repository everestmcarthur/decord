// Module ID: 15308
// Function ID: 15309
// Name: QuestDockUnenrolledBackground
// Dependencies: [19, 15202, 21, 15209, 15198, 4339, 576, 15309, 2]

// Module 15308 (QuestDockUnenrolledBackground)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4339 */;
import QuestHooks from "QuestHooks" /* 15198 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15209 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 15309 */;
import noop from "module_19" /* 19 */;

require = fn;
const expandedHeight = fn(15202).QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
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
