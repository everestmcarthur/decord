// Module ID: 17421
// Function ID: 17422
// Name: openChangelog
// Dependencies: [2010, 4462, 4808, 15624, 1896, 2]
// Exports: openChangelog

// Module 17421 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ChangelogConstants from "ChangelogConstants" /* 2010 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4462 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import size from "module_2" /* 2 */;

const CHANGELOG_MODAL_KEY = ChangelogConstants.CHANGELOG_MODAL_KEY;
const result = size.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = NavigationRouteUtils.isModalOpen();
  }
  if (!isModalOpenResult) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15624, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
