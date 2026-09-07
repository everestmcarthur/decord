// Module ID: 9540
// Function ID: 9541
// Name: transitionToActivity
// Dependencies: [9472, 1956, 9510, 9473, 4189, 4417, 9471, 9531, 9541, 4761, 9481, 4527, 9509, 2]
// Exports: default

// Module 9540 (transitionToActivity)
import set from "set" /* 2 */;
import getEmbeddedActivityLocationChannelId from "getEmbeddedActivityLocationChannelId" /* 4189 */;
import ChannelCallCameraPreviewDefault from "ChannelCallCameraPreview" /* 9471 */;
import VoiceChatDrawerState2 from "VoiceChatDrawerState" /* 9472 */;
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH" /* 9473 */;
import ActivityPanelModes2 from "ActivityPanelModes" /* 9510 */;
import closure_4 from "participantFromServer" /* 1956 */;

const setVoiceChatDrawerState = VoiceChatDrawerState2.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelModes2.ActivityPanelModes;
const VoiceChatDrawerState = BOX_MODE_ACTIONSHEET_WIDTH.VoiceChatDrawerState;
let result = set.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  let obj = getEmbeddedActivityLocationChannelId;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    let tmpResult = tmp(4417);
    const isModalOpenResult = tmpResult.isModalOpen(ChannelCallCameraPreviewDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9531)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9541)(embeddedActivityLocationChannelId);
    }
    selfEmbeddedActivityForLocation = selfEmbeddedActivityForLocation.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9531)(embeddedActivityLocationChannelId)) {
        let tmp15Result = tmp15(4761);
        tmpResult = tmp(9481);
        obj = { applicationId: null, instanceId: null };
        ({ applicationId: obj5[0], compositeInstanceId: obj5[1] } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmpResult.getEmbeddedActivityParticipantId(obj));
        tmp15Result = tmp15(4527);
        tmp15Result.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const result = tmp(9509).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult1 = tmp(9509);
      }
    }
  }
};
