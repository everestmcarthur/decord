// Module ID: 9638
// Function ID: 9639
// Name: transitionToActivity
// Dependencies: [9639, 2040, 9314, 9640, 4385, 4613, 9645, 9613, 13178, 4957, 9615, 4723, 9592, 2]
// Exports: default

// Module 9638 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4385 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9314 */;
import ChannelCallStore from "ChannelCallStore" /* 9639 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9640 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9645 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4613).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9613)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(13178)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9613)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(4957);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9615).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9615);
        tmp15(4723).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4723);
      } else {
        const result = tmp(9592).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9592);
      }
    }
    const tmpResult = tmp(4613);
  }
};
