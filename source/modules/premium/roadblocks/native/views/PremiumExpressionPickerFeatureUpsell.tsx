// Module ID: 10359
// Function ID: 10360
// Name: PremiumExpressionPickerFeatureUpsell
// Dependencies: [19, 17, 21, 4574, 576, 1611, 6639, 1093, 4310, 9996, 2]
// Exports: default

// Module 10359 (PremiumExpressionPickerFeatureUpsell)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 6639 */;
import noop from "module_19" /* 19 */;

const PremiumFeatureUpsellDefault = tmp(9996);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { container: null };
  const rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0 };
  obj.container = rect;
  return obj;
});
const __initData = { code: "function PremiumExpressionPickerFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx");

export default function PremiumExpressionPickerFeatureUpsell(bottomSheetIndex) {
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
  const shouldShow = bottomSheetIndex.shouldShow;
  const tmp3 = useKeyboardIsOpenDefault();
  ReanimatedRexport;
  const fn = function b() {
    const value1 = shouldShow.get();
    if (!value1) {
      return value1;
    } else {
      value = bottomSheetIndex.get();
      if (inPortalKeyboard) {
        let tmp5 = 1 === value;
      } else {
        tmp5 = 0 === value;
      }
    }
  };
  fn.__closure = { shouldShow, inPortalKeyboard, bottomSheetIndex };
  fn.__workletHash = 15061973364879;
  fn.__initData = __initData;
  let tmp7 = null;
  if (!tmp3) {
    const obj = { style: tmp4.container, children: null };
    const obj2 = { shouldShow: tmp6, featureName: bottomSheetIndex.featureName };
    obj.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: tmp6, featureName: bottomSheetIndex.featureName });
    tmp7 = <View style={tmp4.container}>{null}</View>;
  }
  return tmp7;
};
