// Module ID: 15203
// Function ID: 15204
// Name: useVideoQuestCaptions
// Dependencies: [32, 19, 11379, 1272, 15204, 2]
// Exports: useVideoQuestCaptions

// Module 15203 (useVideoQuestCaptions)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = { NONE: "none", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx");

export const useVideoQuestCaptions = (quest) => {
  const questAsset = url(11379).getQuestAsset(quest, url(11379).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  url = undefined;
  if (questAsset != null) {
    url = questAsset.url;
  }
  let obj = url(11379);
  [tmp4, dependencyMap] = noop.useState(constants.NONE);
  const captions = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = captions[1];
  const items = [url];
  const effect = noop.useEffect(() => {
    if (null != url) {
      const HTTP = HTTPUtils.HTTP;
      const obj = { url: tmp, rejectWithError: true };
      value = HTTP.get(obj);
      value.then((text) => {
        try {
          closure_1_2(url(15204).parseVtt(text.text).cues);
          dependencyMap(constants.SUCCESS);
        } catch (err) {
          dependencyMap(constants.ERROR);
        }
      }).catch(() => {
        dependencyMap(constants.ERROR);
      });
      const nextPromise = value.then((text) => {
        try {
          closure_1_2(url(15204).parseVtt(text.text).cues);
          dependencyMap(constants.SUCCESS);
        } catch (err) {
          dependencyMap(constants.ERROR);
        }
      });
    } else {
      dependencyMap(constants.NONE);
    }
  }, items);
  return { captions: captions[0], status };
};
