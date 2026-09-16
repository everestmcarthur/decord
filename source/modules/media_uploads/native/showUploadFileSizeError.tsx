// Module ID: 9453
// Function ID: 9454
// Name: showUploadFileSizeError
// Dependencies: [1184, 1372, 1074, 4631, 1374, 1886, 7957, 5265, 4818, 9454, 9455, 5215, 5223, 9456, 1094, 7292, 1115, 4534, 5214, 4982, 2]
// Exports: default

// Module 9453 (showUploadFileSizeError)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1886 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4818 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4982 */;
import utils_UploadUtils from "utils/UploadUtils" /* 5223 */;
import KestrelExperiment from "KestrelExperiment" /* 5265 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7292 */;
import buildFileSizeLimitEventProperties from "buildFileSizeLimitEventProperties" /* 9454 */;
import getUploaderFileSizeMetrics from "getUploaderFileSizeMetrics" /* 9455 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9456 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const FileUploadErrorTypes = fn(4631).FileUploadErrorTypes;
const PremiumConstants = fn(1374);
({ PremiumTypes: closure_8, PremiumUpsellTypes: closure_9 } = PremiumConstants);
const constants = { NITRO_UPSELL: "Nitro Upsell", OVER_MAX_SIZE: "Over Max Size" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_uploads/native/showUploadFileSizeError.tsx");

export default function showUploadFileSizeError(arg0) {
  ({ file, maxSize, analyticsLocations, errorReason } = arg0);
  let items;
  let items1;
  ({ baseMaxSize, guildId } = arg0);
  const currentUser = UserStore.getCurrentUser();
  const isPremiumExactlyResult = PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2.TIER_2);
  if (null != file.items) {
    let attachmentMimeTypes = tmp2(7957).getAttachmentMimeTypes(file.items);
    const tmp2Result = tmp2(7957);
  } else {
    attachmentMimeTypes = [];
  }
  items = [];
  items1 = [];
  if (null != file.items) {
    const items2 = file.items;
    const item = items2.forEach((postCompressionSize) => {
      let num = postCompressionSize.postCompressionSize;
      if (num == null) {
        num = 0;
      }
      items.push(num);
      items1.push(postCompressionSize.preCompressionSize);
    });
  }
  const kestrelConfig = KestrelExperiment.getKestrelConfig({ location: "native.showUploadFileSizeError" });
  const tmp2Result11 = KestrelExperiment;
  const tmp2Result12 = AppAnalyticsUtils;
  const tmp7 = constants;
  const obj2 = { guildId, channelId: null, userIndividualFileSizeLimit: null, numAttachments: null, preCompressionFileSizes: null, preCompressionAggregateSize: null, postCompressionFileSizes: null, postCompressionAggregateSize: null, attachmentMimeTypes: null, errorType: null, kestrelVariant: null };
  const tmp2Result13 = buildFileSizeLimitEventProperties;
  obj2.channelId = getUploaderFileSizeMetrics.getUploaderChannelId(file);
  obj2.userIndividualFileSizeLimit = baseMaxSize;
  obj2.numAttachments = file.attachmentsCount;
  obj2.preCompressionFileSizes = items1;
  obj2.preCompressionAggregateSize = file.totalPreCompressionSize;
  obj2.postCompressionFileSizes = items;
  obj2.postCompressionAggregateSize = file.totalPostCompressionSize;
  obj2.attachmentMimeTypes = attachmentMimeTypes;
  let ERROR_SOURCE_UNKNOWN = errorReason;
  if (errorReason == null) {
    ERROR_SOURCE_UNKNOWN = FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN;
  }
  obj2.errorType = ERROR_SOURCE_UNKNOWN;
  const tmp2Result14 = getUploaderFileSizeMetrics;
  obj2.kestrelVariant = KestrelExperiment.getKestrelVariantName(kestrelConfig);
  tmp2Result12.trackWithMetadata(constants.FILE_SIZE_LIMIT_EXCEEDED, tmp2Result13.buildFileSizeLimitEventProperties(obj2));
  let num = 0;
  if (!isPremiumExactlyResult) {
    let applyResult = maxSize;
    if (null != file.items) {
      applyResult = maxSize;
      if (errorReason !== FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN) {
        const _Math = Math;
        if (errorReason === tmp11.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE) {
          items1 = items;
        }
        const items3 = [];
        HermesBuiltin.arraySpread(items1, 0);
        applyResult = HermesBuiltin.apply(items3, _Math);
      }
    }
    num = applyResult;
  }
  let tmp21 = isPremiumExactlyResult;
  if (!isPremiumExactlyResult) {
    tmp21 = num > tmp2(5215).getNitroFileUploadLimitBytes({ location: "native.showUploadFileSizeError" });
    const tmp2Result16 = tmp2(5215);
  }
  if (!tmp21) {
    tmp21 = tmp20;
  }
  if (!tmp21) {
    tmp21 = errorReason === tmp19.ERROR_SOURCE_UNKNOWN;
  }
  const tmp2Result15 = KestrelExperiment;
  const obj3 = { alert_type: tmp21 ? constants.OVER_MAX_SIZE : constants.NITRO_UPSELL, num_attachments: file.attachmentsCount, total_attachment_size: file.currentSize, has_image: file.hasImage, has_video: file.hasVideo, is_premium: isPremiumExactlyResult, image_compression_quality: null, image_compression_setting_enabled: null };
  const tmp2Result17 = AppAnalyticsUtils;
  obj3.image_compression_quality = utils_UploadUtils.getImageCompressionQuality();
  obj3.image_compression_setting_enabled = UnsyncedUserSettingsStore.dataSavingMode;
  tmp2Result17.trackWithMetadata(tmp7.FILE_UPLOAD_ALERT_VIEWED, obj3);
  if (tmp21) {
    if (errorReason === tmp19.ERROR_SOURCE_UNKNOWN) {
      const intl4 = tmp2(1115).intl;
      let stringResult = intl4.string(tmp2(1115).t.B3vFdU);
      const intl5 = tmp2(1115).intl;
      let stringResult1 = intl5.string(tmp2(1115).t.zMEjJg);
    } else {
      if (kestrelConfig.enabled) {
        if (!kestrelConfig.isGA) {
          const intl = tmp2(1115).intl;
          stringResult = intl.string(tmp2(1115).t.bRYgjH);
        }
        const intl3 = tmp2(1115).intl;
        const formatToPlainString = intl3.formatToPlainString;
        const t = tmp2(1115).t;
        if (tmp20) {
          const obj4 = { maxSize: tmp2(4534).formatSize(tmp2(5214).MAX_TOTAL_ATTACHMENT_SIZE / tmp2(4534).BYTE_IN_KB, { useKibibytes: true }) };
          stringResult1 = formatToPlainString(t.tUOJdH, obj4);
          const tmp2Result19 = tmp2(4534);
        } else {
          const obj5 = { maxSize: tmp2(4534).formatSize(maxSize / tmp2(4534).BYTE_IN_KB, { useKibibytes: true }) };
          stringResult1 = formatToPlainString(t.fxEKdS, obj5);
          const tmp2Result20 = tmp2(4534);
        }
      }
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t["/tGlcj"]);
    }
    const obj6 = { title: stringResult, body: stringResult1 };
    AlertActionCreatorsDefault.show(obj6);
  } else {
    const obj7 = { initialUpsellKey: tmp2(1094).UpsellTypes.UPLOAD, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null, largestFileSize: null };
    const obj8 = { section: constants2.FILE_UPLOAD_POPOUT };
    obj7.analyticsLocation = obj8;
    const items4 = [];
    const obj13 = PremiumUpsellUtilsDefault;
    items4[HermesBuiltin.arraySpread(analyticsLocations, 0)] = AnalyticsLocationDefault.FILE_UPLOAD_POPOUT;
    obj7.analyticsLocations = items4;
    const obj9 = { type: constants3.UPLOAD_ERROR_UPSELL };
    obj7.analyticsProperties = obj9;
    obj7.largestFileSize = num;
    const result = obj13.handleShowUpsellAlert(obj7);
  }
};
