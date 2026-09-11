// Module ID: 9271
// Function ID: 9272
// Name: useGetGameForAppId
// Dependencies: [19, 1916, 7241, 7382, 1369, 504, 2]
// Exports: default, useGetGamesForAppIds

// Module 9271 (useGetGameForAppId)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7241 */;
import useGame from "useGame" /* 7382 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 1916 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useGetGameForAppId.tsx");

export default function useGetGameForAppId(applicationId) {
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(applicationId);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  if (canonicalGameId == null) {
    canonicalGameId = null;
  }
  const game = useGame.useGame(canonicalGameId);
  let data = game.data;
  const obj2 = { gameId: canonicalGameId, gameRecord: null, isLoading: null };
  if (data == null) {
    data = null;
  }
  obj2.gameRecord = data;
  obj2.isLoading = null != applicationId && null == getOrFetchApplication || game.isLoading;
  return obj2;
};
export const useGetGamesForAppIds = function useGetGamesForAppIds(stateFromStoresArray) {
  const tmp = memo(7241)(stateFromStoresArray);
  _require = tmp;
  const items = [tmp];
  memo = noop.useMemo(() => {
    const found = closure_0.filter(GlobalUtils.isNotNullish);
    const mapped = found.map((getCanonicalGameId) => getCanonicalGameId.getCanonicalGameId());
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items);
  const games = require("useGame").useGames(memo);
  const obj = require("useGame");
  const items1 = [GameStore];
  return require("initialize").useStateFromStoresArray(items1, () => {
    const mapped = memo.map((item) => game.getGame(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
};
