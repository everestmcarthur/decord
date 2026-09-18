// Module ID: 231
// Function ID: 232
// Dependencies: [41, 42, 232]

// Module 231
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const Alert = arg1;
class Alert {
  constructor() {
    tmp = c2(this, Alert);
    return;
  }
}
const entry = {
  key: "alert",
  value: function alert(Alert, arg1, items, arg3) {
    closure_0 = arg3;
    const _default = Alert(232).default;
    if (_default) {
      let str = Alert;
      const buttonClicked = _default.getConstants();
      if (!Alert) {
        str = "";
      }
      let str2 = arg1;
      let obj = { title: str, message: null, cancelable: false };
      if (!arg1) {
        str2 = "";
      }
      obj.message = str2;
      let cancelable = arg3;
      if (arg3) {
        cancelable = arg3.cancelable;
      }
      if (cancelable) {
        obj.cancelable = arg3.cancelable;
      }
      if (items) {
        let substr = items.slice(0, 3);
      } else {
        substr = [{ text: "OK" }];
      }
      const arr = substr.pop();
      const arr4 = substr.pop();
      const arr5 = substr.pop();
      if (arr5) {
        obj.buttonNeutral = arr5.text || "";
      }
      if (arr4) {
        obj.buttonNegative = arr4.text || "";
      }
      if (arr) {
        obj.buttonPositive = arr.text || "OK";
      }
      _default.showAlert(obj, (arg0) => console.warn(arg0), (arg0, arg1) => {
        if (arg0 === buttonClicked.buttonClicked) {
          if (arg1 === tmp.buttonNeutral) {
            if (arr5.onPress) {
              obj2.onPress();
            }
            obj2 = arr5;
          } else if (arg1 === tmp.buttonNegative) {
            if (arr4.onPress) {
              obj.onPress();
            }
            obj = arr4;
          } else {
            let onPress = arg1 === tmp.buttonPositive;
            if (onPress) {
              onPress = arr.onPress;
            }
            if (onPress) {
              arr.onPress();
            }
          }
        } else {
          let onDismiss = arg0 === tmp.dismissed && closure_0;
          if (onDismiss) {
            onDismiss = closure_0.onDismiss;
          }
          if (onDismiss) {
            closure_0.onDismiss();
          }
        }
      });
    }
  }
};
const items = [
  entry,
  {
    key: "prompt",
    value: function prompt(dependencyMap, arg1, arg2) {

    }
  }
];

export default _createClassDefault(Alert, null, items);
