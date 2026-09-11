// Module ID: 8769
// Function ID: 8770
// Name: useResolveGameForProfile
// Dependencies: [7241, 4736, 8770, 4737, 7382, 2]
// Exports: default

// Module 8769 (useResolveGameForProfile)
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7241 */;
import useGame from "useGame" /* 7382 */;
import useResolveGameDefault from "useResolveGame" /* 8770 */;
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
    result = tmp(4736).isRobloxSubgameApplication(getOrFetchApplication);
    const tmpResult = tmp(4736);
  }
  const obj2 = { applicationId, gameId: null };
  if (result) {
    gameId = tmp(4737).ROBLOX_GAME_ID;
  }
  obj2.gameId = gameId;
  let tmp6Result = useResolveGameDefault(obj2);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    isRobloxSubgameGameResult = tmp(4736).isRobloxSubgameGame(tmp6Result.gameRecord);
    const tmpResult3 = tmp(4736);
  }
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = tmp(4737).ROBLOX_GAME_ID;
  }
  const game = useGame.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    const obj3 = { gameId: tmp(4737).ROBLOX_GAME_ID, gameRecord: null, isLoading: null };
    if (data == null) {
      data = null;
    }
    obj3.gameRecord = data;
    obj3.isLoading = tmp12;
    tmp6Result = obj3;
  }
  return tmp6Result;
};
