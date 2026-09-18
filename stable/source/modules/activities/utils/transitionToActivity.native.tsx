// Module ID: 9541
// Function ID: 9542
// Name: transitionToActivity
// Dependencies: [9473, 1956, 9511, 9474, 4189, 4417, 9472, 9532, 9542, 4761, 9482, 4527, 9510, 2]
// Exports: default

// Module 9541 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4189 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9472 */;
import ChannelCallStore from "ChannelCallStore" /* 9473 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9474 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9511 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4417).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9532)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9542)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9532)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4761);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9482).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9482);
        tmp15(4527).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4527);
      } else {
        const result = tmp(9510).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9510);
      }
    }
    const tmpResult = tmp(4417);
  }
};
