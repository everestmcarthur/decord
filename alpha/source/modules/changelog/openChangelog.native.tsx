// Module ID: 17738
// Function ID: 17739
// Name: openChangelog
// Dependencies: [2094, 4613, 4959, 15813, 1980, 2]
// Exports: openChangelog

// Module 17738 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ChangelogConstants from "ChangelogConstants" /* 2094 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4613 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15813, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
