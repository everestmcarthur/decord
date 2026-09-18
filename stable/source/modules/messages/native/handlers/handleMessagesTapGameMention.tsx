// Module ID: 11618
// Function ID: 11619
// Name: handleMessagesTapGameMention
// Dependencies: [8686, 8692, 2]
// Exports: handleMessagesTapGameMention

// Module 11618 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8686 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8692 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
