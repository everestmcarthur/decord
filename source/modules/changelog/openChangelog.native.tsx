// Module ID: 17536
// Function ID: 17537
// Name: openChangelog
// Dependencies: [2011, 4495, 4841, 15657, 1897, 2]
// Exports: openChangelog

// Module 17536 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ChangelogConstants from "ChangelogConstants" /* 2011 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4495 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15657, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
