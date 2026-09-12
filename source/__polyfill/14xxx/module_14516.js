// Module ID: 14516
// Function ID: 14517
// Dependencies: [19, 14498, 14517, 21]
// Exports: default

// Module 14516
import noop from "module_19" /* 19 */;
import module_14498_mod from "module_14498" /* 14498 */;
import _isNativeReflectConstruct_mod from "module_14517" /* 14517 */;
import jsxProd from "jsxProd" /* 21 */;

if (noop) {
  const __esModule = noop.__esModule;
}
let module_14498 = module_14498_mod;
if (!module_14498) {
  let obj = { default: module_14498 };
  let tmp4 = obj;
} else {
  tmp4 = module_14498;
}
module_14498 = tmp4;
let _isNativeReflectConstruct = _isNativeReflectConstruct_mod;
if (!_isNativeReflectConstruct) {
  const obj2 = { default: _isNativeReflectConstruct };
  let tmp6 = obj2;
} else {
  tmp6 = _isNativeReflectConstruct;
}
_isNativeReflectConstruct = tmp6;

export default () => () => {
  closure_0 = closure_0.default();
  return {
    onCommand(type) {
      if ("storybook" === type.type) {
        closure_0.emit("storybook", type.payload);
      }
    },
    features: {
      storybookSwitcher(arg0) {
        closure_0 = arg0;
        return (arg0) => {
          closure_0 = arg0;
          return function StorybookSwitcherContainer(arg0) {
            const obj = { storybookUi: emitter, emitter, children: null };
            const merged = Object.assign(arg0);
            obj.children = <emitter />;
            return <_isNativeReflectConstruct.default storybookUi={emitter} emitter={emitter}>{null}</_isNativeReflectConstruct.default>;
          };
        };
      }
    }
  };
};
