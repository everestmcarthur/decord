// Module ID: 11706
// Function ID: 11707
// Name: handleMessagesTapGameMention
// Dependencies: [8771, 8777, 2]
// Exports: handleMessagesTapGameMention

// Module 11706 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8771 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8777 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
