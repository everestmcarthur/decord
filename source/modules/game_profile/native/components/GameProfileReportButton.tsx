// Module ID: 9055
// Function ID: 9056
// Name: GameProfileReportButton
// Dependencies: [19, 21, 4607, 8833, 4843, 9056, 1897, 9056, 5062, 1115, 2]
// Exports: default

// Module 9055 (GameProfileReportButton)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8833 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 9056 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

export default function GameProfileReportButton(applicationId) {
  applicationId = applicationId.applicationId;
  const trackAction = applicationId.trackAction;
  const items = [applicationId, trackAction];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Feedback);
    const obj2 = ModalActionCreatorsDefault;
    const obj3 = { applicationId };
    obj2.pushLazy(asyncRequireImpl(9056, dependencyMap.paths), obj3, GameDetectionReportModal.MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1115).intl;
  obj.text = intl.string(applicationId(1115).t.qP2cXd);
  obj.onPress = callback;
  return jsx(applicationId(5062).Button, { variant: "secondary", size: "md", text: null, onPress: null });
};
