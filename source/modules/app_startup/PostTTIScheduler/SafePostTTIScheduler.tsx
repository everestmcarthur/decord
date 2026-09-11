// Module ID: 7739
// Function ID: 7740
// Name: SafePostTTIScheduler
// Dependencies: [7740, 2]
// Exports: waitSafelyForPostTTI

// Module 7739 (SafePostTTIScheduler)
import PostTTIScheduler from "PostTTIScheduler" /* 7740 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx");

export const waitSafelyForPostTTI = function waitSafelyForPostTTI(arg0) {
  return new Promise((arg0) => {
    closure_0 = arg0;
    const timeout = setTimeout(() => {
      closure_0();
    }, num);
    PostTTIScheduler.schedulePostTTIEvent(() => {
      clearTimeout(closure_1);
      closure_0();
    });
  });
};
