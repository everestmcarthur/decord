// Module ID: 6782
// Function ID: 6783
// Name: NativeDetector
// Dependencies: [19, 17, 21, 6783, 6741, 6800, 6742, 6801, 6802, 6794, 6803]
// Exports: NativeDetector

// Module 6782 (NativeDetector)
import _modDef6742 from "module_6742" /* 6742 */;
import noop from "module_19" /* 19 */;

const require = fn;
const useMemo = fn(19).useMemo;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;

export const NativeDetector = function NativeDetector(gesture) {
  gesture = gesture.gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  if (gesture.config.dispatchesAnimatedEvents) {
    let ReanimatedNativeDetector = tmp(6741).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(6800).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = _modDef6742;
  }
  const obj = gesture(6783);
  const result = gesture(6801).ensureNativeDetectorComponent(ReanimatedNativeDetector);
  const tmpResult = gesture(6801);
  const gestureRelationsUpdater = gesture(6802).useGestureRelationsUpdater(gesture);
  const items = [gesture];
  const tmp6 = useMemo(() => {
    if (obj.isComposedGesture(gesture)) {
      let handlerTags = tmp.handlerTags;
    } else {
      handlerTags = [tmp.handlerTag];
    }
    return handlerTags;
  }, items);
  const tmpResult3 = gesture(6802);
  const detectorAttachmentGuard = gesture(6803).useDetectorAttachmentGuard(tmp6);
  const obj2 = { onGestureHandlerReanimatedEvent: gesture.detectorCallbacks.reanimatedEventHandler };
  const tmpResult4 = gesture(6803);
  return <ReanimatedNativeDetector onStartShouldSetResponder={obj.useJSResponderHandler(gesture).handleStartShouldSetResponder} touchAction={touchAction} userSelect={userSelect} enableContextMenu={enableContextMenu} pointerEvents="box-none" onGestureHandlerStateChange={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerTouchEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerReanimatedStateChange={obj2.onGestureHandlerReanimatedStateChange} onGestureHandlerReanimatedEvent={obj2.onGestureHandlerReanimatedEvent} onGestureHandlerReanimatedTouchEvent={obj2.onGestureHandlerReanimatedTouchEvent} onGestureHandlerAnimatedEvent={gesture.detectorCallbacks.animatedEventHandler} moduleId={globalThis._RNGH_MODULE_ID} handlerTags={tmp6} style={gesture(6741).nativeDetectorStyles.detector}>{children}</ReanimatedNativeDetector>;
};
