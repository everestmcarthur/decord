// Module ID: 8739
// Function ID: 8740
// Name: UID
// Dependencies: [4809, 5648, 2]
// Exports: UID, uid, useUID

// Module 8739 (UID)
import uniqueIdDefault from "uniqueId" /* 4809 */;
import useInitialValueDefault from "useInitialValue" /* 5648 */;
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
