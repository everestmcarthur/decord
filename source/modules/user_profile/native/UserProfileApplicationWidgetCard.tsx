// Module ID: 9013
// Function ID: 9014
// Name: UserProfileApplicationWidgetCard
// Dependencies: [19, 17, 2025, 502, 21, 4606, 576, 9014, 9015, 9107, 9108, 9109, 9110, 504, 9016, 7241, 7382, 8766, 8777, 9111, 7238, 9099, 8425, 7280, 7696, 9120, 4602, 1114, 2]
// Exports: default

// Module 9013 (UserProfileApplicationWidgetCard)
import nativeDefault from "native" /* 576 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 9016 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4606);
let obj2 = { appIcon: null, header: null, divider: null, stillSyncing: null };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.appIcon = size;
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
let obj4 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
obj2.stillSyncing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  userId = userId.userId;
  ({ widget, cardStyle } = userId);
  dependencyMap = undefined;
  let token;
  let tmp = closure_11();
  const items = [LocaleStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores];
  const memo = token.useMemo(() => resolvedValuesFromUserApplicationIdentityProfile.createCompactNumberFormat(stateFromStores), items1);
  const obj = userId(504);
  const items2 = [AuthenticationStore];
  const stateFromStores1 = userId(504).useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj2 = userId(504);
  const getOrFetchApplication = userId(7241).useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  const obj3 = userId(7241);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = userId(7382).useGame(canonicalGameId).data;
  let id;
  const tmp2Result = userId(7382);
  if (data != null) {
    id = data.id;
  }
  const tmp10 = stateFromStores(8766);
  const tmp10Result = tmp10({ location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(8777).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" });
  dependencyMap = tmp10Result;
  const obj4 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(8777).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = stateFromStores(9111)(userId, widget.applicationId));
  const tmp14 = stateFromStores(7238)(getOrFetchApplication);
  token = tmp14.token;
  ({ fetched, canStartAuthorization } = tmp14);
  const tmp15 = surfaceConfigs[userId(undefined, 9099).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp16 = surfaceConfigs[userId(undefined, 9099).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp17 = null;
  if (null != iconURL) {
    const obj5 = { source: null, style: null };
    const obj6 = { uri: iconURL };
    obj5.source = obj6;
    obj5.style = tmp.appIcon;
    tmp17 = closure_9(closure_4, obj5);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp20 = null != token;
        if (tmp20) {
          const _Array = Array;
          let someResult = Array.from(tmp2(8425).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES).some((item) => {
            const scopes = token.scopes;
            return scopes.includes(item);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8425).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8425).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
          }
          tmp20 = someResult;
          const arr = Array.from(tmp2(8425).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
        }
        if (fetched) {
          if (canStartAuthorization) {
            let tmp23 = null;
          }
          return tmp23;
        }
        const obj7 = { style: cardStyle, title: null, titleLeadingIcon: null, children: null };
        const tmp9Result = tmp9(7280);
        obj7.title = tmp2(7696).getWidgetTitle(widget);
        obj7.titleLeadingIcon = tmp17;
        const obj8 = { style: tmp.stillSyncing, children: null };
        const obj9 = { size: "xs", color: tmp9(576).colors.TEXT_MUTED };
        const items3 = [closure_9(tmp2(9120).HourglassIcon, obj9), ];
        const obj10 = { variant: "text-sm/medium", color: "text-muted", children: null };
        const intl = tmp2(1114).intl;
        obj10.children = intl.string(tmp2(1114).t.z5K4Uv);
        items3[1] = closure_9(tmp2(4602).Text, obj10);
        obj8.children = items3;
        obj7.children = closure_10(closure_6, obj8);
        tmp23 = closure_9(tmp9Result, obj7);
        const tmp2Result5 = tmp2(7696);
      }
    }
  }
  const tmp13 = stateFromStores(9111)(userId, widget.applicationId);
  const result = userId(9016).bindResolveFieldValue(resolutionContext);
  const obj11 = {
    style: tmp.header,
    onPress() {
      let tmp;
      if (closure_2 != null) {
        tmp = closure_2();
      }
      return tmp;
    },
    disabled: null == tmp10Result,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const tmp29 = closure_10;
  const tmp2Result6 = userId(9016);
  obj11.accessibilityLabel = userId(7696).getWidgetTitle(widget);
  const items4 = [tmp17, ];
  const obj12 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: null };
  const tmp2Result7 = userId(7696);
  obj12.children = userId(7696).getWidgetTitle(widget);
  items4[1] = closure_9(userId(4602).Text, obj12);
  obj11.children = items4;
  const tmp31 = closure_10(closure_5, obj11);
  if (tmp15 != null) {
    const layout = tmp15.layout;
  }
  let tmp30Result = null;
  if (null != tmp15) {
    if (tmp2(9014).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj13 = { header: tmp31, topConfig: tmp15, resolveFieldValue: result, numberFormat: memo };
      tmp30Result = tmp30(tmp9(9015), obj13);
    } else {
      tmp30Result = null;
      if (tmp2(9014).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj14 = { header: tmp31, topConfig: tmp15, resolveFieldValue: result, numberFormat: memo };
        tmp30Result = tmp30(tmp9(9107), obj14);
      }
    }
  }
  if (tmp16 != null) {
    const layout2 = tmp16.layout;
  }
  let tmp30Result2 = null;
  if (null != tmp16) {
    if (tmp2(9014).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj15 = { bottomConfig: tmp16, resolveFieldValue: result, numberFormat: memo };
      tmp30Result2 = tmp30(tmp9(9108), obj15);
    } else if (tmp2(9014).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj16 = { bottomConfig: tmp16, resolveFieldValue: result };
      tmp30Result2 = tmp30(tmp9(9109), obj16);
    } else {
      tmp30Result2 = null;
      if (tmp2(9014).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj17 = { bottomConfig: tmp16, resolveFieldValue: result };
        tmp30Result2 = tmp30(tmp9(9110), obj17);
      }
    }
  }
  let tmp29Result = null;
  if (null != tmp30Result) {
    tmp29Result = null;
    if (null != tmp30Result2) {
      const obj18 = { style: cardStyle, children: null };
      const items5 = [tmp30Result, , ];
      const obj19 = { style: tmp.divider };
      items5[1] = tmp30(closure_6, obj19);
      items5[2] = tmp30Result2;
      obj18.children = items5;
      tmp29Result = tmp29(tmp9(7280), obj18);
      const tmp9Result2 = tmp9(7280);
    }
  }
  return tmp29Result;
};
