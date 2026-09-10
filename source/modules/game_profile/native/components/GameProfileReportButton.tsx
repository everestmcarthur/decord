// Module ID: 8966
// Function ID: 8967
// Name: GameProfileReportButton
// Dependencies: [19, 21, 4572, 8756, 4808, 8967, 1896, 8967, 5025, 1114, 2]
// Exports: default

// Module 8966 (GameProfileReportButton)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8756 */;
import GameDetectionReportModal from "GameDetectionReportModal" /* 8967 */;
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
    obj2.pushLazy(asyncRequireImpl(8967, dependencyMap.paths), obj3, GameDetectionReportModal.MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1114).intl;
  obj.text = intl.string(applicationId(1114).t.qP2cXd);
  obj.onPress = callback;
  return jsx(applicationId(5025).Button, { variant: "secondary", size: "md", text: null, onPress: null });
};
