// Module ID: 6741
// Function ID: 6742
// Dependencies: [17, 6742]

// Module 6741
import _modDef6742 from "module_6742" /* 6742 */;
import get_ActivityIndicator from "module_17" /* 17 */;

({ Animated, StyleSheet } = get_ActivityIndicator);
const animatedComponent = Animated.createAnimatedComponent(_modDef6742);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });
