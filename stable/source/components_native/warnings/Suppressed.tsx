// Module ID: 16920
// Function ID: 16921
// Name: Suppressed
// Dependencies: [19, 13755, 21, 16921, 1114, 16922, 16923, 4994, 2]

// Module 16920 (Suppressed)
import util from "util" /* 1114 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 16921 */;
import _modDef16922 from "module_16922" /* 16922 */;
import _modDef16923 from "module_16923" /* 16923 */;
import noop from "module_19" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 13755 */;

require = fn;
const jsx = fn(21).jsx;
const Component = noop.Component;
class Suppressed extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.close = function close() {
      PermissionActionCreatorsDefault.clearSuppressWarning();
    };
    return applyArgumentsResult;
  }
}
Suppressed.prototype["render"] = function render() {
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isAFKChannelResult) {
    let stringResult = string(t.KuYcnU);
    const intl3 = tmp2(1114).intl;
    let stringResult1 = intl3.string(tmp2(1114).t["RaFZ3+"]);
    let tmp7 = _modDef16922;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1114).intl;
    stringResult1 = intl2.string(tmp2(1114).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = _modDef16923;
  }
  return jsx(tmp6(4994), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;
