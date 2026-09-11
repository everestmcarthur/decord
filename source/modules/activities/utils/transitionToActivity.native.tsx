// Module ID: 9626
// Function ID: 9627
// Name: transitionToActivity
// Dependencies: [9558, 1956, 9596, 9559, 4235, 4464, 9557, 9619, 9627, 4807, 9567, 4573, 9595, 2]
// Exports: default

// Module 9626 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4235 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9557 */;
import ChannelCallStore from "ChannelCallStore" /* 9558 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9559 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9596 */;
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
      tmp4 = tmp15(9619)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9627)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9619)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4807);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9567).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9567);
        tmp15(4573).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4573);
      } else {
        const result = tmp(9595).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9595);
      }
    }
    const tmpResult = tmp(4464);
  }
};
