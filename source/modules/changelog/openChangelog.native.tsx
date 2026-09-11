// Module ID: 17411
// Function ID: 17412
// Name: openChangelog
// Dependencies: [2010, 4464, 4810, 15607, 1896, 2]
// Exports: openChangelog

// Module 17411 (openChangelog)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ChangelogConstants from "ChangelogConstants" /* 2010 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4464 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
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
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15607, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
  }
};
