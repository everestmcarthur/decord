// Module ID: 8055
// Function ID: 8056
// Name: UID
// Dependencies: [4844, 5686, 2]
// Exports: UID, uid, useUID

// Module 8055 (UID)
import uniqueIdDefault from "uniqueId" /* 4844 */;
import useInitialValueDefault from "useInitialValue" /* 5686 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
};
export const useUID = function useUID() {
  return useInitialValueDefault(() => uniqueIdDefault("uid_"));
};
export const UID = function UID(children) {
  return children.children(useInitialValueDefault(() => uniqueIdDefault("uid_")));
};
