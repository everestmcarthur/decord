// Module ID: 11618
// Function ID: 11619
// Name: handleMessagesTapGameMention
// Dependencies: [8685, 8691, 2]
// Exports: handleMessagesTapGameMention

// Module 11618 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef8685 from "module_8685" /* 8685 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8691 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef8685;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};
