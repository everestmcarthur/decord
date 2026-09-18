// Module ID: 11347
// Function ID: 11348
// Name: OrbLottieAnimation
// Dependencies: [19, 21, 4656, 4573, 11348, 11350, 2]

// Module 11347 (OrbLottieAnimation)
import shared from "shared" /* 4573 */;
import useTheme from "useTheme" /* 4656 */;
import "module_19";

require = fn;
const noop = fn(19);
({ useRef: c3, useEffect: closure_4, forwardRef } = noop);
const jsx = fn(21).jsx;
const forwardRefResult = forwardRef((animationType, ref) => {
  animationType = animationType.animationType;
  const theme = useTheme.useTheme();
  const tmp5 = React3(null);
  const items = [animationType];
  React4(() => {
    if (null !== animationType) {
      const current = ref.current;
      if (current != null) {
        current.play();
      }
    }
  }, items);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    play() {
      const current = ref.current;
      let playResult;
      if (current != null) {
        playResult = current.play();
      }
      return playResult;
    }
  }));
  if (isThemeLightResult) {
    let SpendEarnOrbsLottie = tmp(11348).SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = tmp(11350).SpendEarnOrbsLottie;
  }
  const size = { ref: tmp5, size: "custom", width: 60, height: 60, opacity: 0.8, animation: null, useLottieDefaultColors: true };
  let str = "spend";
  if (null != animationType) {
    str = animationType;
  }
  size.animation = str;
  return <SpendEarnOrbsLottie ref={tmp5} size="custom" width={60} height={60} opacity={0.8} animation={null} useLottieDefaultColors />;
});
forwardRefResult.displayName = "OrbsLottieAnimation";
let size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default forwardRefResult;
export const OrbLottieAnimation = forwardRefResult;
