// Module ID: 12886
// Function ID: 12887
// Dependencies: [12801, 12802, 12887, 12828, 12857, 12888, 12812, 12810, 12849]

// Module 12886
import _mod12828 from "module_12828" /* 12828 */;
import setupIntegration from "module_12857" /* 12857 */;


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
          let hasItem = _mod12828.getClient() === args;
          if (hasItem) {
            hasItem = CONSOLE_LEVELS.includes(level);
          }
          if (hasItem) {
            closure_2 = handled;
            let obj2 = { level: tmp(12888).severityLevelFromString(level), extra: null };
            const obj3 = { arguments: args };
            obj2.extra = obj3;
            const tmpResult = tmp(12888);
            tmp(12828).withScope((addEventProcessor) => {
              addEventProcessor.addEventProcessor((arg0) => {
                arg0.logger = "console";
                const result = args(level[6]).addExceptionMechanism(arg0, { handled, type: "console" });
                return arg0;
              });
              if ("assert" !== level) {
                const found = args.find((item) => item instanceof Error);
                if (found) {
                  tmp14(12849).captureException(found, obj2);
                  const tmp14Result = tmp14(12849);
                } else {
                  const tmp14Result2 = tmp14(12810);
                  const safeJoinResult = tmp14(12810).safeJoin(tmp12, " ");
                  args(12849).captureMessage(safeJoinResult, obj2);
                  const obj4 = args(12849);
                }
                tmp12 = args;
              } else if (!args[0]) {
                const obj = args(12810);
                const _HermesInternal = HermesInternal;
                const combined = "Assertion failed: " + args(12810).safeJoin(arr.slice(1), " ") || "console.assert";
                addEventProcessor.setExtra("arguments", arr.slice(1));
                obj2 = args(12849);
                obj2.captureMessage(combined, obj2);
                const tmp4 = args(12810).safeJoin(arr.slice(1), " ") || "console.assert";
              }
            });
            const tmpResult2 = tmp(12828);
          }
        });
        let tmpResult = CONSOLE_LEVELS(handled[2]);
      }
    }
  };
});
