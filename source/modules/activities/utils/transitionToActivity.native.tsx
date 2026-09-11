// Module ID: 9628
// Function ID: 9629
// Name: transitionToActivity
// Dependencies: [9560, 1956, 9598, 9561, 4235, 4464, 9559, 9621, 9629, 4808, 9569, 4574, 9597, 2]
// Exports: default

// Module 9628 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4235 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9559 */;
import ChannelCallStore from "ChannelCallStore" /* 9560 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9561 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9598 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4464).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9621)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9629)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9621)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4808);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9569).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9569);
        tmp15(4574).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4574);
      } else {
        const result = tmp(9597).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9597);
      }
    }
    const tmpResult = tmp(4464);
  }
};
