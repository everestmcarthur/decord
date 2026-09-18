// Module ID: 8684
// Function ID: 8685
// Name: useResolveGameForProfile
// Dependencies: [7168, 4690, 8685, 4691, 7309, 2]
// Exports: default

// Module 8684 (useResolveGameForProfile)
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7168 */;
import useGame from "useGame" /* 7309 */;
import useResolveGameDefault from "useResolveGame" /* 8685 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default function useResolveGameForProfile(arg0) {
  ({ applicationId, gameId } = arg0);
  let tmp3;
  if (null == gameId) {
    tmp3 = applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(tmp3);
  let result = null != getOrFetchApplication;
  if (result) {
    result = tmp(4690).isRobloxSubgameApplication(getOrFetchApplication);
    const tmpResult = tmp(4690);
  }
  const obj2 = { applicationId, gameId: null };
  if (result) {
    gameId = tmp(4691).ROBLOX_GAME_ID;
  }
  obj2.gameId = gameId;
  let tmp6Result = useResolveGameDefault(obj2);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    isRobloxSubgameGameResult = tmp(4690).isRobloxSubgameGame(tmp6Result.gameRecord);
    const tmpResult3 = tmp(4690);
  }
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = tmp(4691).ROBLOX_GAME_ID;
  }
  const game = useGame.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    const obj3 = { gameId: tmp(4691).ROBLOX_GAME_ID, gameRecord: null, isLoading: null };
    if (data == null) {
      data = null;
    }
    obj3.gameRecord = data;
    obj3.isLoading = tmp12;
    tmp6Result = obj3;
  }
  return tmp6Result;
};
