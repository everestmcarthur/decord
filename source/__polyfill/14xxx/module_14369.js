// Module ID: 14369
// Function ID: 14370
// Dependencies: [14354, 14350, 14370]

// Module 14369
import _mod14350 from "module_14350" /* 14350 */;
import _mod14354 from "module_14354" /* 14354 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14354(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14350.String(SymbolResult);
    let tmp5 = !StringResult;
    if (StringResult) {
      const _Object = Object;
      const _Symbol = Symbol;
      tmp5 = !(Object(SymbolResult) instanceof Symbol);
    }
    if (!tmp5) {
      const _Symbol2 = Symbol;
      let tmp2Result = !sham;
      if (!sham) {
        tmp2Result = tmp2(14370);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14370) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
