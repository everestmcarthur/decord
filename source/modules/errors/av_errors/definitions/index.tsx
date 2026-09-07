// Module ID: 17835
// Function ID: 17836
// Name: ErrorDefinitions
// Dependencies: [9115, 17836, 17838, 17839, 17841, 17842, 17843, 17844, 17845, 17846, 17847, 17848, 17849, 17850, 17851, 17852, 17853, 17854, 2]

// Module 17835 (ErrorDefinitions)
import set from "set" /* 2 */;
import mapped from "mapped" /* 9115 */;
import AVErrorNoAudioInputDetectedDefinition from "AVErrorNoAudioInputDetectedDefinition" /* 17836 */;
import AVErrorNoInputDevicesDefinition from "AVErrorNoInputDevicesDefinition" /* 17838 */;
import AVErrorStreamViewLowFPSDefinition from "AVErrorStreamViewLowFPSDefinition" /* 17839 */;
import AVErrorStreamViewHighPacketLossDefinition from "AVErrorStreamViewHighPacketLossDefinition" /* 17841 */;
import AVErrorStreamSendHighPacketLossDefinition from "AVErrorStreamSendHighPacketLossDefinition" /* 17842 */;
import AVErrorStreamSendLowFPSDefinition from "AVErrorStreamSendLowFPSDefinition" /* 17843 */;
import AVErrorStreamBadNetworkQualityDefinition from "AVErrorStreamBadNetworkQualityDefinition" /* 17844 */;
import AVErrorStreamSoundshareFailedDefinition from "AVErrorStreamSoundshareFailedDefinition" /* 17845 */;
import AVErrorStreamFailedToStartDefinition from "AVErrorStreamFailedToStartDefinition" /* 17846 */;
import AVErrorStreamReconnectingDefinition from "AVErrorStreamReconnectingDefinition" /* 17847 */;
import AVErrorScreenshareOSErrorDefinition from "AVErrorScreenshareOSErrorDefinition" /* 17848 */;
import AVErrorAudioCaptureSampleRateMismatchDefinition from "AVErrorAudioCaptureSampleRateMismatchDefinition" /* 17849 */;
import AVErrorVideoStreamSenderReadyTimeoutDefinition from "AVErrorVideoStreamSenderReadyTimeoutDefinition" /* 17850 */;
import AVErrorVideoStreamReceiverReadyTimeoutDefinition from "AVErrorVideoStreamReceiverReadyTimeoutDefinition" /* 17851 */;
import AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition from "AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition" /* 17852 */;
import AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition from "AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition" /* 17853 */;
import AVErrorCameraSendLowFPSDefinition from "AVErrorCameraSendLowFPSDefinition" /* 17854 */;

const obj = {};
obj[mapped.AVError.NO_AUDIO_INPUT_DETECTED] = AVErrorNoAudioInputDetectedDefinition.AVErrorNoAudioInputDetectedDefinition;
obj[mapped.AVError.NO_INPUT_DEVICES] = AVErrorNoInputDevicesDefinition.AVErrorNoInputDevicesDefinition;
obj[mapped.AVError.STREAM_VIEW_LOW_FPS] = AVErrorStreamViewLowFPSDefinition.AVErrorStreamViewLowFPSDefinition;
obj[mapped.AVError.STREAM_VIEW_HIGH_PACKET_LOSS] = AVErrorStreamViewHighPacketLossDefinition.AVErrorStreamViewHighPacketLossDefinition;
obj[mapped.AVError.STREAM_SEND_HIGH_PACKET_LOSS] = AVErrorStreamSendHighPacketLossDefinition.AVErrorStreamSendHighPacketLossDefinition;
obj[mapped.AVError.STREAM_SEND_LOW_FPS] = AVErrorStreamSendLowFPSDefinition.AVErrorStreamSendLowFPSDefinition;
obj[mapped.AVError.STREAM_BAD_NETWORK_QUALITY] = AVErrorStreamBadNetworkQualityDefinition.AVErrorStreamBadNetworkQualityDefinition;
obj[mapped.AVError.STREAM_SOUNDSHARE_FAILED] = AVErrorStreamSoundshareFailedDefinition.AVErrorStreamSoundshareFailedDefinition;
obj[mapped.AVError.STREAM_FAILED_TO_START] = AVErrorStreamFailedToStartDefinition.AVErrorStreamFailedToStartDefinition;
obj[mapped.AVError.STREAM_RECONNECTING] = AVErrorStreamReconnectingDefinition.AVErrorStreamReconnectingDefinition;
obj[mapped.AVError.SCREENSHARE_OS_ERROR] = AVErrorScreenshareOSErrorDefinition.AVErrorScreenshareOSErrorDefinition;
obj[mapped.AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH] = AVErrorAudioCaptureSampleRateMismatchDefinition.AVErrorAudioCaptureSampleRateMismatchDefinition;
obj[mapped.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT] = AVErrorVideoStreamSenderReadyTimeoutDefinition.AVErrorVideoStreamSenderReadyTimeoutDefinition;
obj[mapped.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT] = AVErrorVideoStreamReceiverReadyTimeoutDefinition.AVErrorVideoStreamReceiverReadyTimeoutDefinition;
obj[mapped.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM] = AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition.AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition;
obj[mapped.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM] = AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition.AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition;
obj[mapped.AVError.CAMERA_SEND_LOW_FPS] = AVErrorCameraSendLowFPSDefinition.AVErrorCameraSendLowFPSDefinition;
const result = set.fileFinishedImporting("modules/errors/av_errors/definitions/index.tsx");

export const ErrorDefinitions = obj;
