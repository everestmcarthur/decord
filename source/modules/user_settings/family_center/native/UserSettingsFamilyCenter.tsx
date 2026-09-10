// Module ID: 14947
// Function ID: 14948
// Name: UserSettingsFamilyCenter
// Dependencies: [32, 19, 17, 7589, 1371, 1074, 1098, 1954, 7590, 21, 5023, 4605, 576, 7214, 7234, 8715, 14948, 14949, 8717, 563, 9862, 1114, 2396, 14950, 14990, 7591, 1242, 7653, 7658, 5042, 4425, 1943, 7263, 9863, 12686, 2]
// Exports: default

// Module 14947 (UserSettingsFamilyCenter)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4425 */;
import Stack_Stack from "Stack/Stack" /* 5023 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7591 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7653 */;
import MetricEvents from "MetricEvents" /* 7658 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7589 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function FamilyCenterLoading() {
  const tmp = closure_19();
  return __initData(Stack_Stack.Stack, { justify: "center", align: "center", style: closure_19().loadingContainer, children: __initData(timestampProducer, {}) });
}
function FamilyCenter() {
  const tmp = closure_19();
  const tmp3 = isLoading(7214);
  const acceptedRequestsCount = familyCenterInitialized(8715).useAcceptedRequestsCount();
  const tmp6 = isLoading(14948)();
  const selectedTab = isLoading(14949)().selectedTab;
  let obj = familyCenterInitialized(8715);
  const selectedTeenId = familyCenterInitialized(8717).useSelectedTeenId();
  let obj2 = familyCenterInitialized(8717);
  items = [FamilyCenterStore];
  const stateFromStoresObject = familyCenterInitialized(563).useStateFromStoresObject(items, () => ({ familyCenterInitialized: FamilyCenterStore.getIsInitialized(), isLoading: FamilyCenterStore.isLoading() }));
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  dependencyMap = tmp10;
  const currentUser = UserStore.getCurrentUser();
  let obj3 = familyCenterInitialized(563);
  [tmp12, _slicedToArray] = obj8.useState(0);
  const callback = obj8.useCallback((nativeEvent) => {
    _slicedToArray(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp11 = _slicedToArray(obj8.useState(0), 2);
  const obj5 = { items: null, onPageChange: null, pageWidth: null, defaultIndex: null };
  const obj6 = { label: null, id: null, page: null };
  const intl = familyCenterInitialized(1114).intl;
  obj6.label = intl.string(isLoading(2396).bdBmqy);
  obj6.id = FamilyCenterSubPages.ACTIVITY;
  obj6.page = closure_15(isLoading(14950), {});
  const items1 = [obj6, ];
  const obj7 = { label: null, id: null, page: null };
  const intl2 = familyCenterInitialized(1114).intl;
  obj7.label = intl2.string(isLoading(2396)["gVWG+6"]);
  obj7.id = FamilyCenterSubPages.REQUESTS;
  obj7.page = closure_15(isLoading(14990), {});
  items1[1] = obj7;
  obj5.items = items1;
  obj5.onPageChange = function onPageChange(arg0) {
    return isLoading(closure_2[25]).selectTab(items[arg0]);
  };
  obj5.pageWidth = tmp12;
  obj5.defaultIndex = items.indexOf(selectedTab);
  const segmentedControlState = familyCenterInitialized(9862).useSegmentedControlState(obj5);
  obj8 = { ageGroup: tmp6, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
  const ref = obj8.useRef(obj8);
  const effect = obj8.useEffect(() => {
    closure_5.current = obj8;
  });
  const items2 = [familyCenterInitialized, null != tmp6];
  const effect1 = obj8.useEffect(() => {
    if (familyCenterInitialized) {
      if (closure_2) {
        ({ ageGroup, numOfAcceptedRequests, selectedTab, selectedTeenId } = ref.current);
        const obj2 = { is_considered_adult: "adult" === ageGroup, num_of_accepted_links: numOfAcceptedRequests, selected_teen_id: selectedTeenId, initial_page: map1[selectedTab], source: constants.SETTINGS };
        AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_VIEWED, obj2);
        const obj4 = { name: MetricEvents.MetricEvents.FAMILY_CENTER_VIEW };
        MonitoringAgentDefault.increment(obj4);
      }
    }
  }, items2);
  isLoading(5042)(() => {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.FAMILY_CENTER_NEW_BADGE, { dismissAction: ContentDismissActionType.AUTO, forceTrack: true });
    let canRefetchResult = !isLoading;
    if (!isLoading) {
      canRefetchResult = FamilyCenterStore.canRefetch();
    }
    if (canRefetchResult) {
      FamilyCenterActionCreatorsDefault.initialPageLoad();
    }
  });
  if (familyCenterInitialized) {
    if (null != currentUser) {
      if (!tmp10) {
        tmp4(7263).openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        return null;
      }
    }
  }
  const obj9 = { value: tmp3(isLoading(7234).FAMILY_CENTER).analyticsLocations, children: null };
  let obj10 = { style: tmp.container, onLayout: callback, children: null };
  let obj4 = familyCenterInitialized(9862);
  const items3 = [closure_15(ref, { style: tmp.segmentedControlContainer, children: closure_15(familyCenterInitialized(9863).SegmentedControl, { state: segmentedControlState }) }), ];
  let obj12 = { style: tmp.container, children: null };
  if (isLoading) {
    let tmp14Result = tmp14(FamilyCenterLoading, {});
  } else {
    const obj13 = { state: segmentedControlState };
    tmp14Result = tmp14(tmp4(12686).SegmentedControlPages, obj13);
  }
  obj12.children = tmp14Result;
  obj12 = tmp14(tmp23, obj12);
  items3[1] = obj12;
  obj10.children = items3;
  obj10 = closure_16(tmp23, obj10);
  obj9.children = obj10;
  closure_15(familyCenterInitialized(7214).AnalyticsLocationProvider, obj9);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const AgeGateSource = fn(1098).AgeGateSource;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const FamilyCenterConstants = fn(7590);
({ FamilyCenterPageLocationAnalyticsIds: closure_12, FamilyCenterSubPageAnalyticsIds: map1, FamilyCenterSubPages } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
const createStyles = fn(4605);
let obj2 = { container: { display: "flex", flex: 1 }, segmentedControlContainer: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, loadingContainer: { minHeight: "100%" } };
let closure_19 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default function FamilyCenterContainer() {
  return __initData(FamilyCenter, {});
};
