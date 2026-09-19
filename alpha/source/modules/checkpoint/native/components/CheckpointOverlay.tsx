// Module ID: 15968
// Function ID: 15969
// Name: CheckpointOverlay
// Dependencies: [21, 15962, 15969, 15973, 15975, 15976, 15977, 15978, 15979, 15980, 15981, 15982, 2]
// Exports: default

// Module 15968 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import CheckpointNavigation from "CheckpointNavigation" /* 15962 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 15969 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 15973 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 15975 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 15976 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 15977 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 15978 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 15979 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 15980 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 15981 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 15982 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default function CheckpointOverlay(route) {
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else {
    const statsScreen = tmp(15962).getCheckpointRoutePresentation(route).statsScreen;
    if (tmp(15962).CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (tmp(15962).CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (tmp(15962).CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (tmp(15962).CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (tmp(15962).CheckpointStatsScreen.GAMES === statsScreen) {
      return jsx(CheckpointGamesStatsScreenDefault, {});
    } else if (tmp(15962).CheckpointStatsScreen.GAME_TIME === statsScreen) {
      return jsx(CheckpointGameTimeStatsScreenDefault, {});
    } else if (tmp(15962).CheckpointStatsScreen.SQUAD === statsScreen) {
      return jsx(CheckpointSquadStatsScreenDefault, {});
    } else if (tmp(15962).CheckpointStatsScreen.SIDEKICK === statsScreen) {
      return jsx(CheckpointSidekickStatsScreenDefault, {});
    } else if (tmp(15962).CheckpointStatsScreen.SUMMARY === statsScreen) {
      return jsx(CheckpointSummaryStatsScreenDefault, {});
    } else {
      return null;
    }
    const tmpResult = tmp(15962);
  }
};
