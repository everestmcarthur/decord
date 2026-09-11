// Module ID: 8642
// Function ID: 8643
// Dependencies: [41, 42, 93, 95, 98, 19, 8643, 21, 8552, 8559, 8560, 8566, 8645, 8568]

// Module 8642
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import appendTransformPropsDefault from "appendTransformProps" /* 8552 */;
import extractPropsDefault from "extractProps" /* 8559 */;
import extractFontDefault from "extractFont" /* 8566 */;
import _modDef8568 from "module_8568" /* 8568 */;
import _modDef8645 from "module_8645" /* 8645 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const Text = fn;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
_possibleConstructorReturnDefault;
_isNativeReflectConstruct = fn(8643);
const jsx = fn(21).jsx;
class Text {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, Text);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Text);
    tmp3 = closure_4;
    if (closure_7()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = (matrix) => {
      let tmp = matrix;
      if (matrix) {
        tmp = !matrix.matrix;
      }
      if (tmp) {
        tmp = appendTransformPropsDefault(matrix);
      }
      if (tmp) {
        matrix.matrix = tmp;
      }
      const propsAndStylesResult = Text(8559).propsAndStyles(matrix);
      const obj = Text(8559);
      const merged = Object.assign(propsAndStylesResult, Text(8560).pickNotNil(extractFontDefault(propsAndStylesResult, true)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(propsAndStylesResult);
      }
    };
    return tmp3Result;
  }
}
_inherits(Text, _modDef8568);
const entry = {
  key: "render",
  value: function render() {
    const propsAndStylesResult = Text(8559).propsAndStyles(this.props);
    const obj2 = {};
    const obj = Text(8559);
    const merged = Object.assign(propsAndStylesResult);
    obj2.x = null;
    obj2.y = null;
    const tmp2Result = extractPropsDefault(obj2, this);
    const merged1 = Object.assign(tmp2Result, extractFontDefault(propsAndStylesResult, true));
    tmp2Result.ref = this.refMethod;
    const obj3 = {};
    const merged2 = Object.assign(tmp2Result);
    return jsx(_modDef8645, {});
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Text, items);
importDefaultResultResult.displayName = "Text";

export default importDefaultResultResult;
