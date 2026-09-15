// Module ID: 9667
// Function ID: 9668
// Name: transitionToActivity
// Dependencies: [9599, 1957, 9637, 9600, 4268, 4497, 9598, 9660, 9668, 4840, 9608, 4606, 9636, 2]
// Exports: default

// Module 9667 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4268 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9598 */;
import ChannelCallStore from "ChannelCallStore" /* 9599 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9600 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9637 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4497).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9660)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(9668)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9660)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4840);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9608).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9608);
        tmp15(4606).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4606);
      } else {
        const result = tmp(9636).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9636);
      }
    }
    const tmpResult = tmp(4497);
  }
};
