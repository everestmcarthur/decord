// Module ID: 11747
// Function ID: 11748
// Name: handleMessagesTapGameMention
// Dependencies: [8806, 8812, 2]
// Exports: handleMessagesTapGameMention

// Module 11747 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8806 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8812 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
