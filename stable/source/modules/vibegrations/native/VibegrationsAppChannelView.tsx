// Module ID: 16616
// Function ID: 16617
// Name: VibegrationsAppChannelView
// Dependencies: [32, 19, 17, 9516, 9517, 21, 4560, 576, 16013, 1877, 7247, 16617, 9574, 9513, 16618, 4556, 1114, 3547, 4975, 2]
// Exports: default

// Module 16616 (VibegrationsAppChannelView)
import nativeDefault from "native" /* 576 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9513 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9574 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9516 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FramesConstants = fn(9517);
({ EmbeddedSurfaceType: closure_8, FrameLayoutModes: closure_9, isLaunched: c10 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { flex: 1, paddingBottom }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 }, copy: null };
  const obj2 = { flex: 1, paddingBottom };
  const obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 };
  obj.copy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelView.tsx");

export default function VibegrationsAppChannelView(channel) {
  channel = channel.channel;
  _require = channel;
  let disallowGesture;
  let disallowGesture1;
  let first;
  noop = undefined;
  closure_7 = undefined;
  let tmp2 = disallowGesture1;
  let container = closure_13(disallowGesture(disallowGesture1[9])());
  let InlineFrameView = _require;
  let result = require("VibegrationsUtils").vibegrationsAppIdFromTopic(channel.topic);
  disallowGesture = result;
  const guild_id = channel.guild_id;
  disallowGesture1 = guild_id;
  const tmp4 = first(noop.useState(false), 2);
  first = tmp4[0];
  noop = tmp4[1];
  const items = [channel.id, guild_id];
  const memo = noop.useMemo(() => ({ type: constants.APP_CHANNEL, channelId: id.id, guildId: disallowGesture1 }), items);
  const tmp7 = disallowGesture(tmp2[11])(result, memo);
  const id2 = tmp7;
  let id = null;
  if (null != tmp7) {
    id = null;
    if (closure_10(tmp7)) {
      id = tmp7;
    }
  }
  const items1 = [result, first, tmp7, memo];
  const effect = obj2.useEffect(() => {
    if (null != disallowGesture) {
      if (!first) {
        if (null == closure_6) {
          const mainFrame = FramesStore.getMainFrame();
          if (null != mainFrame) {
            FramesNativeManagerDefault.leaveFrame(mainFrame.id);
          }
          const obj3 = { applicationId: tmp, surface: memo };
          FramesActionCreatorsDefault.launchFrame(obj3).catch(() => closure_1_4(true));
          const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj3);
        }
      }
    }
  }, items1);
  closure_7 = obj2.useRef(null);
  const items2 = [tmp7];
  const effect1 = obj2.useEffect(() => {
    id = undefined;
    if (id2 != null) {
      id = id2.id;
    }
    if (id == null) {
      id = null;
    }
    closure_7.current = id;
  }, items2);
  const effect2 = obj2.useEffect(() => () => {
    if (null != ref.current) {
      disallowGesture(disallowGesture1[12]).leaveFrame(tmp.current);
      const obj = disallowGesture(disallowGesture1[12]);
    }
  }, []);
  _require = tmp13;
  disallowGesture = obj2.useContext(tmp(tmp2[8])).disallowGesture;
  const context = obj2.useContext(InlineFrameView(tmp2[8]).MainTabsChannelScreenStackContext);
  disallowGesture1 = undefined;
  if (context != null) {
    disallowGesture1 = context.disallowGesture;
  }
  if (disallowGesture1 == null) {
    disallowGesture1 = null;
  }
  const items3 = [null != id, disallowGesture, disallowGesture1];
  const effect3 = obj2.useEffect(() => {
    if (closure_0) {
      let result = disallowGesture.set(true);
      if (disallowGesture1 != null) {
        let result1 = disallowGesture1.set(true);
      }
      return () => {
        const result = disallowGesture.set(false);
        if (disallowGesture1 != null) {
          const result1 = disallowGesture1.set(false);
        }
      };
    }
  }, items3);
  if (null == result) {
    return null;
  } else if (null != id) {
    let obj3 = { style: null, children: null };
    container = container.container;
    obj3.style = container;
    InlineFrameView = InlineFrameView(tmp2[14]).InlineFrameView;
    const obj4 = { frameId: null, layoutMode: null };
    id = id.id;
    obj4.frameId = id;
    obj4.layoutMode = constants2.FOCUSED;
    tmp2 = closure_11(InlineFrameView, obj4);
    obj3.children = tmp2;
    let tmp21 = closure_11(id2, obj3);
  } else if (first) {
    const obj5 = { style: container.centered, children: null };
    const obj6 = { style: container.copy, children: null };
    const obj7 = { variant: "heading-lg/bold", color: "text-default", children: channel.name };
    const items4 = [closure_11(InlineFrameView(tmp2[15]).Text, obj7), ];
    const obj8 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl = InlineFrameView(tmp2[16]).intl;
    obj8.children = intl.string(tmp(tmp2[17]).QM4w4h);
    items4[1] = closure_11(InlineFrameView(tmp2[15]).Text, obj8);
    obj6.children = items4;
    const items5 = [closure_12(id2, obj6), ];
    const obj9 = { variant: "primary", text: null, onPress: null };
    const intl2 = InlineFrameView(tmp2[16]).intl;
    obj9.text = intl2.string(tmp(tmp2[17]).jLMpUv);
    obj9.onPress = tmp17;
    items5[1] = closure_11(InlineFrameView(tmp2[18]).Button, obj9);
    obj5.children = items5;
    tmp21 = closure_12(id2, obj5);
  } else {
    const obj10 = { style: container.centered, children: closure_11(memo, {}) };
    tmp21 = closure_11(id2, obj10);
  }
};
