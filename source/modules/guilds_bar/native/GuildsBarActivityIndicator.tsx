// Module ID: 16405
// Function ID: 16406
// Name: GuildsBarActivityIndicator
// Dependencies: [19, 21, 4607, 576, 4308, 5641, 1178, 9878, 9876, 5149, 8715, 8971, 16406, 10201, 16407, 5153, 16408, 5158, 5085, 16401, 2]
// Exports: useActivityIndicatorState

// Module 16405 (GuildsBarActivityIndicator)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4308 */;
import _modDef5085 from "module_5085" /* 5085 */;
import StageIcon from "StageIcon" /* 5149 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5153 */;
import AppsIcon from "AppsIcon" /* 5158 */;
import NativeViewDefault from "NativeView" /* 5641 */;
import _modDef8715 from "module_8715" /* 8715 */;
import ScreenIcon from "ScreenIcon" /* 8971 */;
import _modDef9876 from "module_9876" /* 9876 */;
import CalendarIcon from "CalendarIcon" /* 9878 */;
import VideoIcon from "VideoIcon" /* 10201 */;
import useGuildsBarGuildMediaStateDefault from "useGuildsBarGuildMediaState" /* 16401 */;
import _modDef16406 from "module_16406" /* 16406 */;
import _modDef16407 from "module_16407" /* 16407 */;
import _modDef16408 from "module_16408" /* 16408 */;
import noop from "module_19" /* 19 */;

const native = tmp(1178);
require = fn;
function getMediaIcon(activeEvent) {
  if (activeEvent.activeEvent) {
    const obj2 = { icon: CalendarIcon.CalendarIcon, source: _modDef9876 };
    let tmp6 = obj2;
  } else if (tmp4) {
    const obj3 = { icon: StageIcon.StageIcon, source: _modDef8715 };
    tmp6 = obj3;
  } else if (tmp3) {
    const obj4 = { icon: ScreenIcon.ScreenIcon, source: _modDef16406 };
    tmp6 = obj4;
  } else if (tmp2) {
    const obj5 = { icon: VideoIcon.VideoIcon, source: _modDef16407 };
    tmp6 = obj5;
  } else if (tmp) {
    const obj6 = { icon: VoiceNormalIcon.VoiceNormalIcon, source: _modDef16408 };
    tmp6 = obj6;
  } else {
    tmp6 = null;
    if (tmp5) {
      const obj = { icon: AppsIcon.AppsIcon, source: _modDef5085 };
      tmp6 = obj;
    }
  }
  return tmp6;
}
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let obj = { activityWrapper: null, activityIconWrapper: null, activityIconWrapperActive: null, activityIcon: null };
let size = { position: "absolute", top: -3, right: -3, justifyContent: "center", width: 22, height: 22, padding: 3, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.activityWrapper = size;
const size1 = { justifyContent: "center", width: 16, height: 16, padding: 2, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.activityIconWrapper = size1;
obj.activityIconWrapperActive = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
const size2 = { width: 12, height: 12, borderRadius: nativeDefault.radii.none };
obj.activityIcon = size2;
let closure_5 = createStyles.createStyles(obj);
const memoResult = noop.memo((arg0) => {
  ({ IconComponent, isCurrentUserConnected } = arg0);
  ({ style, source } = arg0);
  let activityIcon = closure_5();
  let WHITE = useToken.useToken(nativeDefault.colors.ICON_DEFAULT);
  const obj2 = { style: null, children: null };
  const items = [activityIcon.activityWrapper, style];
  obj2.style = items;
  const items1 = [activityIcon.activityIconWrapper, ];
  let prop = null;
  const tmp5 = NativeViewDefault;
  if (isCurrentUserConnected) {
    prop = activityIcon.activityIconWrapperActive;
  }
  const obj3 = { style: items1, children: null };
  items1[1] = prop;
  if (null != IconComponent) {
    tmp3(576).colors;
    const colors = { color: null, size: "xxs", style: null };
    colors.color = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
    activityIcon = activityIcon.activityIcon;
    colors.style = activityIcon;
    tmp4(IconComponent, colors);
    const tmp8 = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
  } else {
    const obj4 = { source, color: null, style: null };
    if (isCurrentUserConnected) {
      WHITE = tmp3(576).unsafe_rawColors.WHITE;
    }
    obj4.color = WHITE;
    obj4.style = activityIcon.activityIcon;
    obj3.children = tmp4(native.Icon, obj4);
    obj2.children = tmp4(tmp6, obj3);
    return tmp4(tmp5, obj2);
  }
});
const metroRequire = memoResult;
let obj3 = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarActivityIndicator.tsx");

export default noop.memo(function GuildsBarGuildActivityIndicator(arg0) {
  ({ guildId, style } = arg0);
  const tmp = useGuildsBarGuildMediaStateDefault(guildId);
  closure_0 = tmp;
  const tmp2 = getMediaIcon(tmp);
  closure_1 = tmp2;
  let icon;
  if (tmp2 != null) {
    icon = tmp2.icon;
  }
  const items = [icon, , ];
  let source1;
  if (tmp2 != null) {
    source1 = tmp2.source;
  }
  items[1] = source1;
  items[2] = tmp.isCurrentUserConnected;
  const memo = noop.useMemo(() => {
    let icon;
    if (closure_1 != null) {
      icon = tmp.icon;
    }
    const obj = { IconComponent: icon, source: null, isCurrentUserConnected: null };
    let source;
    if (closure_1 != null) {
      source = tmp.source;
    }
    if (source == null) {
      source = null;
    }
    obj.source = source;
    obj.isCurrentUserConnected = closure_0.isCurrentUserConnected;
    return obj;
  }, items);
  let source = memo.source;
  let tmp9 = null;
  if (null != source) {
    let obj = { IconComponent: tmp7, style, source, isCurrentUserConnected: tmp8 };
    tmp9 = <memoResult IconComponent={tmp7} style={style} source={source} isCurrentUserConnected={tmp8} />;
  }
  return tmp9;
});
export const GuildsBarActivityIndicatorBase = memoResult;
export { getMediaIcon };
export const useActivityIndicatorState = function useActivityIndicatorState(guildId) {
  const tmp = useGuildsBarGuildMediaStateDefault(guildId);
  closure_0 = tmp;
  const tmp2 = getMediaIcon(tmp);
  closure_1 = tmp2;
  let icon;
  if (tmp2 != null) {
    icon = tmp2.icon;
  }
  const items = [icon, , ];
  let source;
  if (tmp2 != null) {
    source = tmp2.source;
  }
  items[1] = source;
  items[2] = tmp.isCurrentUserConnected;
  return noop.useMemo(() => {
    let icon;
    if (closure_1 != null) {
      icon = tmp.icon;
    }
    const obj = { IconComponent: icon, source: null, isCurrentUserConnected: null };
    let source;
    if (closure_1 != null) {
      source = tmp.source;
    }
    if (source == null) {
      source = null;
    }
    obj.source = source;
    obj.isCurrentUserConnected = closure_0.isCurrentUserConnected;
    return obj;
  }, items);
};
