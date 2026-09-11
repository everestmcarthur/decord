// Module ID: 6781
// Function ID: 6782
// Name: NativeDetector
// Dependencies: [19, 17, 21, 6782, 6740, 6799, 6741, 6800, 6801, 6793, 6802]
// Exports: NativeDetector

// Module 6781 (NativeDetector)
import _modDef6741 from "module_6741" /* 6741 */;
import noop from "module_19" /* 19 */;

const require = fn;
const useMemo = fn(19).useMemo;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;

export const NativeDetector = function NativeDetector(gesture) {
  gesture = gesture.gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  if (gesture.config.dispatchesAnimatedEvents) {
    let ReanimatedNativeDetector = tmp(6740).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(6799).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = _modDef6741;
  }
  const obj = gesture(6782);
  const result = gesture(6800).ensureNativeDetectorComponent(ReanimatedNativeDetector);
  const tmpResult = gesture(6800);
  const gestureRelationsUpdater = gesture(6801).useGestureRelationsUpdater(gesture);
  const items = [gesture];
  const tmp6 = useMemo(() => {
    if (obj.isComposedGesture(gesture)) {
      let handlerTags = tmp.handlerTags;
    } else {
      handlerTags = [tmp.handlerTag];
    }
    return handlerTags;
  }, items);
  const tmpResult3 = gesture(6801);
  const detectorAttachmentGuard = gesture(6802).useDetectorAttachmentGuard(tmp6);
  const obj2 = { onGestureHandlerReanimatedEvent: gesture.detectorCallbacks.reanimatedEventHandler };
  const tmpResult4 = gesture(6802);
  return <ReanimatedNativeDetector onStartShouldSetResponder={obj.useJSResponderHandler(gesture).handleStartShouldSetResponder} touchAction={touchAction} userSelect={userSelect} enableContextMenu={enableContextMenu} pointerEvents="box-none" onGestureHandlerStateChange={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerTouchEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerReanimatedStateChange={obj2.onGestureHandlerReanimatedStateChange} onGestureHandlerReanimatedEvent={obj2.onGestureHandlerReanimatedEvent} onGestureHandlerReanimatedTouchEvent={obj2.onGestureHandlerReanimatedTouchEvent} onGestureHandlerAnimatedEvent={gesture.detectorCallbacks.animatedEventHandler} moduleId={globalThis._RNGH_MODULE_ID} handlerTags={tmp6} style={gesture(6740).nativeDetectorStyles.detector}>{children}</ReanimatedNativeDetector>;
};
