// Module ID: 13125
// Function ID: 13126
// Dependencies: [13037, 13040, 13039, 13045]
// Exports: addConsoleInstrumentationHandler

// Module 13125
import _mod13037 from "module_13037" /* 13037 */;
import _mod13039 from "module_13039" /* 13039 */;
import _mod13040 from "module_13040" /* 13040 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13040.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13039.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13040).GLOBAL_OBJ.console) {
        tmp(13045).fill(tmp(13040).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13039.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(13037).triggerHandlers("console", { args: items, level });
            const obj3 = level(13039).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13040).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(13045);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod13037.addHandler("console", arg0);
  _mod13037.maybeInstrument("console", instrumentConsole);
};
