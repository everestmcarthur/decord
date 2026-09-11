// Module ID: 7016
// Function ID: 7017
// Name: useWideAuthView
// Dependencies: [7017, 1608, 2]
// Exports: default

// Module 7016 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7017 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};
