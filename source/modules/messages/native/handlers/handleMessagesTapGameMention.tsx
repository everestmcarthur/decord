// Module ID: 11763
// Function ID: 11764
// Name: handleMessagesTapGameMention
// Dependencies: [8827, 8833, 2]
// Exports: handleMessagesTapGameMention

// Module 11763 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8827 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
