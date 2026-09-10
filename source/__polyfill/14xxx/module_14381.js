// Module ID: 14381
// Function ID: 14382
// Dependencies: [14382]

// Module 14381
import module_14382_mod from "module_14382" /* 14382 */;

const call = prototype.call;
let module_14382 = module_14382_mod;
if (module_14382) {
  const bind = prototype.bind;
  module_14382 = bind.bind(call, call);
}
if (!module_14382) {
  module_14382 = (arg0) => {
    closure_0 = arg0;
    return () => {
      const apply = call.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(tmp2);
      } else {
        applyArgumentsResult = apply(tmp2, arguments);
      }
      return applyArgumentsResult;
    };
  };
}

export default module_14382;
