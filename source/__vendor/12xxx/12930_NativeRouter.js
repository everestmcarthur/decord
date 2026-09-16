// Module ID: 12930
// Function ID: 12931
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4470, 4467]

// Module 12930 (NativeRouter)
import _modDef4467 from "module_4467" /* 4467 */;
import _mod4470 from "module_4470" /* 4470 */;
import noop from "module_19" /* 19 */;

require = fn;
class NativeRouter {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    return jsx(closure_0(closure_1[3]).MemoryRouter, obj);
  }
}
const Alert = fn(17).Alert;
const jsx = fn(21).jsx;
NativeRouter.defaultProps = {
  getUserConfirmation(arg0, arg1) {
    closure_0 = arg1;
    const items = [
      {
        text: "Cancel",
        onPress() {
          return closure_0(false);
        }
      },
      {
        text: "OK",
        onPress() {
          return closure_0(true);
        }
      }
    ];
    Alert.alert("Confirm", arg0, items);
  }
};
NativeRouter.propTypes = { initialEntries: _modDef4467.array, initialIndex: _modDef4467.number, getUserConfirmation: _modDef4467.func, keyLength: _modDef4467.number, children: _modDef4467.node };

export default NativeRouter;
