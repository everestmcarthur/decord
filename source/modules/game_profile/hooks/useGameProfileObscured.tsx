// Module ID: 5163
// Function ID: 5164
// Name: useGameProfileObscured
// Dependencies: [1371, 5164, 504, 2]
// Exports: default, isGameProfileObscured

// Module 5163 (useGameProfileObscured)
import initialize from "initialize" /* 504 */;
import utils from "utils" /* 5164 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default function useGameProfileObscured(contentClassification) {
  initialize;
  [][0] = UserStore;
  let result = null != contentClassification;
  if (result) {
    result = false === tmp4;
  }
  if (result) {
    result = utils.isAgeRestrictedContentClassification(contentClassification.contentClassification);
    const tmpResult = utils;
  }
  return result;
};
export const isGameProfileObscured = function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = utils.isAgeRestrictedContentClassification(game.contentClassification);
  }
  return result;
};
