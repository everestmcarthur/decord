// Module ID: 17700
// Function ID: 17701
// Name: RestrictedHoursActionCreators
// Dependencies: [5, 4959, 17701, 1980, 2]
// Exports: openRestrictedHoursModal

// Module 17700 (RestrictedHoursActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

const require = fn;
function closeRestrictedHoursModal() {
  ModalActionCreatorsDefault.popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
    await require("asyncRequireImpl")(paths[2], paths.paths);
    return arg1.default;
  }), { onClose: closeRestrictedHoursModal }, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
};
export { closeRestrictedHoursModal };
