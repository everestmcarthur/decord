// Module ID: 11708
// Function ID: 11709
// Name: handleMessagesTapGameMention
// Dependencies: [8773, 8779, 2]
// Exports: handleMessagesTapGameMention

// Module 11708 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8773 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8779 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
