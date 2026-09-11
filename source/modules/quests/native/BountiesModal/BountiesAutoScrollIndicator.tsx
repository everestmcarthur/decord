// Module ID: 15112
// Function ID: 15113
// Name: BountiesAutoScrollIndicator
// Dependencies: [19, 17, 21, 4343, 4608, 4607, 576, 4308, 15113, 4603, 1114, 15115, 2]
// Exports: default

// Module 15112 (BountiesAutoScrollIndicator)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useToken from "useToken" /* 4308 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4343 */;
import Text_Text from "Text/Text" /* 4603 */;
import timing from "timing" /* 4608 */;
import ArrowSmallUpIcon from "ArrowSmallUpIcon" /* 15113 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

const CircularProgress = tmp2(15115);
require = fn;
function BouncingArrow(children) {
  let sharedValue;
  sharedValue = sharedValue(4343).useSharedValue(0);
  let items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const obj2 = ReanimatedRexport;
    const obj4 = { duration: 500, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj4.easing = Easing.inOut(ReanimatedRexport.Easing.quad);
    const withTimingResult = timing.withTiming(-6, obj4);
    const obj6 = { duration: 500, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj6.easing = Easing2.inOut(ReanimatedRexport.Easing.quad);
    const result = sharedValue.set(obj.withRepeat(obj2.withSequence(withTimingResult, timing.withTiming(0, obj6)), -1));
    return () => sharedValue(dependencyMap[3]).cancelAnimation(closure_1_0);
  }, items);
  let obj = sharedValue(4343);
  const fn = function l() {
    const obj = { transform: null };
    const items = [{ translateY: sharedValue.get() }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { translateY: sharedValue };
  fn.__workletHash = 10126349088819;
  fn.__initData = __initData;
  const style = sharedValue(4343).useAnimatedStyle(fn);
  return closure_5(ReanimatedRexportDefault.View, { style, children: children.children });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const __initData = { code: "function BountiesAutoScrollIndicatorTsx1(){const{translateY}=this.__closure;return{transform:[{translateY:translateY.get()}]};}" };
const createStyles = fn(4607);
let obj2 = { root: { alignItems: "center", gap: nativeDefault.space.PX_8 }, ringContainer: { alignItems: "center", justifyContent: "center", width: 40, height: 40 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesAutoScrollIndicator.tsx");

export default function BountiesAutoScrollIndicator(showProgressRing) {
  let flag = showProgressRing.showProgressRing;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_9();
  const token = useToken.useToken(nativeDefault.colors.WHITE);
  const tmp6 = hasOwnProperty(ArrowSmallUpIcon.ArrowSmallUpIcon, { size: "md", color: nativeDefault.colors.WHITE });
  closure_0 = tmp6;
  const obj3 = { style: tmp.root, children: null };
  const obj4 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.eafsh4);
  const items = [hasOwnProperty(Text_Text.Text, obj4), ];
  const obj5 = { style: tmp.ringContainer, children: null };
  if (flag) {
    const obj6 = {
      size: 40,
      width: 3,
      fill: 100 * showProgressRing.progress,
      duration: 0,
      rotation: 0,
      lineCap: "round",
      tintColor: token,
      backgroundColor: "rgba(255, 255, 255, 0.35)",
      children() {
          return closure_0;
        }
    };
    let tmp5Result = tmp5(CircularProgress.AnimatedCircularProgress, obj6);
  } else {
    const obj7 = { children: tmp6 };
    tmp5Result = tmp5(BouncingArrow, obj7);
  }
  obj5.children = tmp5Result;
  items[1] = hasOwnProperty(View, obj5);
  obj3.children = items;
  return timestampProducer(View, obj3);
};
