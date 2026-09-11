// Module ID: 8968
// Function ID: 8969
// Name: useSimilarGames
// Dependencies: [1916, 1371, 8854, 8853, 7383, 504, 8769, 5163, 2]
// Exports: default

// Module 8968 (useSimilarGames)
import GameStore from "GameStore" /* 1916 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
fn(8854).SIMILAR_GAMES_BLOCKED_GAME_IDS;
let closure_5 = [];
const similarGames = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0) {
  const hasItem = set.has(arg0);
  const similarGameIds = data(8853).useSimilarGameIds(arg0, !hasItem);
  ({ data, isLoading, error } = similarGameIds);
  if (hasItem) {
    let tmp7 = closure_5;
  } else {
    tmp7 = data;
  }
  data = tmp7;
  const obj = data(8853);
  const tmp2 = !hasItem;
  const games = data(7383).useGames(tmp7);
  const tmp3Result = data(7383);
  const items = [GameStore];
  const items1 = [tmp7];
  const stateFromStores = data(504).useStateFromStores(items, () => data.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items1);
  data(504);
  const items2 = [GameStore, UserStore];
  [][0] = tmp7;
  if (hasItem) {
    const obj2 = { isFetching: false, similarGames };
    let obj3 = obj2;
  } else {
    obj3 = { isFetching: null == error && null == data || isLoading || stateFromStores, similarGames: tmp11 };
    const tmp13 = null == error && null == data || isLoading || stateFromStores;
  }
  return obj3;
};
