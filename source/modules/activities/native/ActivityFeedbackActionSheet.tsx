// Module ID: 17450
// Function ID: 17451
// Name: ActivityFeedbackActionSheet
// Dependencies: [19, 1920, 1074, 11697, 21, 1242, 17451, 11718, 1114, 11700, 4302, 17452, 2]
// Exports: default

// Module 17450 (ActivityFeedbackActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ToastUtils from "ToastUtils" /* 4302 */;
import FeedbackUtils from "FeedbackUtils" /* 11700 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 11718 */;
import getActivityReportOptionsDefault from "getActivityReportOptions" /* 17451 */;
import trackActivityProblemDefault from "trackActivityProblem" /* 17452 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityFeedbackReasons = fn(1920).ActivityFeedbackReasons;
const AnalyticEvents = fn(1074).AnalyticEvents;
const FeedbackType = fn(11697).FeedbackType;
const jsx = fn(21).jsx;
const items = [, , ];
({ OTHER: arr[0], ADS: arr[1], NOT_FUN: arr[2] } = ActivityFeedbackReasons);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivityFeedbackActionSheet.tsx");

export default function ActivityFeedbackActionSheet(activityApplication) {
  activityApplication = activityApplication.activityApplication;
  ({ channel: importDefault, embeddedActivityLocation: dependencyMap, analyticsData: ActivityFeedbackReasons } = activityApplication);
  const embeddedActivityConfig = activityApplication.embeddedActivityConfig;
  let prop;
  if (embeddedActivityConfig != null) {
    prop = embeddedActivityConfig.displays_advertisements;
  }
  let obj = { headerLabel: null, showHeaderCloseButton: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null };
  const tmp2 = getActivityReportOptionsDefault(true, true === prop);
  const intl = activityApplication(1114).intl;
  obj.headerLabel = intl.formatToPlainString(activityApplication(1114).t.QXYwoD, { applicationName: activityApplication.name });
  const intl2 = activityApplication(1114).intl;
  obj.ratingsBodyLabel = intl2.string(activityApplication(1114).t["9hk2KF"]);
  const intl3 = activityApplication(1114).intl;
  obj.reasonsHeaderLabel = intl3.string(activityApplication(1114).t.g1q5fr);
  obj.reasons = tmp2;
  obj.feedbackReasons = items;
  obj.otherKey = ActivityFeedbackReasons.OTHER;
  obj.trackOpen = function trackOpen() {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Activity Feedback Sheet", application_id: activityApplication.id, application_name: activityApplication.name, game_id: activityApplication.id, source: "Activity End" });
  };
  obj.trackReport = function trackReport(dontShowAgain) {
    ({ rating, reason, feedback } = dontShowAgain);
    value = null;
    if (null != reason) {
      value = reason.value;
    }
    if (dontShowAgain.dontShowAgain) {
      const obj2 = { application_id: activityApplication.id, rating };
      AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, obj2);
      const obj4 = { feedbackType: FeedbackType.ACTIVITY, location: "ActivityFeedbackActionSheet" };
      FeedbackUtils.processOptOut(obj4);
    }
    if (null != rating) {
      ToastUtils.presentFeedbackSent();
      const obj6 = { problem: value, channel, embeddedActivityLocation, feedback: null, activityApplication: null, analyticsData: null, location: "Activity End", rating: null };
      if (feedback == null) {
        feedback = "";
      }
      obj6.feedback = feedback;
      obj6.activityApplication = activityApplication;
      obj6.analyticsData = analyticsData;
      obj6.rating = rating;
      trackActivityProblemDefault(obj6);
    }
  };
  return jsx(FeedbackActionSheetDefault, { headerLabel: null, showHeaderCloseButton: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, feedbackReasons: null, otherKey: null, trackOpen: null, trackReport: null });
};
