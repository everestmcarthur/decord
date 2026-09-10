// Module ID: 12912
// Function ID: 12913
// Dependencies: [12827, 12828, 12913, 12854, 12883, 12914, 12838, 12836, 12875]

// Module 12912
import _mod12854 from "module_12854" /* 12854 */;
import setupIntegration from "module_12883" /* 12883 */;


export const captureConsoleIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let handled;
  let CONSOLE_LEVELS = obj.levels;
  if (!CONSOLE_LEVELS) {
    CONSOLE_LEVELS = CONSOLE_LEVELS(handled[0]).CONSOLE_LEVELS;
  }
  handled = obj.handled;
  return {
    name: "CaptureConsole",
    setup(arg0) {
      closure_0 = arg0;
      if ("console" in CONSOLE_LEVELS(handled[1]).GLOBAL_OBJ) {
        let result = CONSOLE_LEVELS(handled[2]).addConsoleInstrumentationHandler((arg0) => {
          ({ args, level } = arg0);
          let hasItem = _mod12854.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            let obj2 = { level: tmp(12914).severityLevelFromString(level), extra: null };
            const obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult = tmp(12914);
            tmp(12854).withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  tmp14(12875).captureException(found, obj2);
                  const tmp14Result = tmp14(12875);
                } else {
                  const tmp14Result2 = tmp14(12836);
                  const safeJoinResult = tmp14(12836).safeJoin(tmp12, " ");
                  args(12875).captureMessage(safeJoinResult, obj2);
                  const obj4 = args(12875);
                }
                tmp12 = args;
              } else if (!args[0]) {
                const obj = args(12836);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(12836).safeJoin(arr.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", arr.slice(1));
                obj2 = args(12875);
                obj2.captureMessage(combined, obj2);
                const tmp4 = args(12836).safeJoin(arr.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult2 = tmp(12854);
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    }
  };
});
