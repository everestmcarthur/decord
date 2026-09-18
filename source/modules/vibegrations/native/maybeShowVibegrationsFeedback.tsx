// Module ID: 16915
// Function ID: 16916
// Name: maybeShowVibegrationsFeedback
// Dependencies: [11866, 16916, 16917, 16935, 1897, 7234, 4689, 2]
// Exports: default

// Module 16915 (maybeShowVibegrationsFeedback)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import Constants from "Constants" /* 11866 */;
import FeedbackManagerDefault from "FeedbackManager" /* 16917 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const FeedbackType = Constants.FeedbackType;
let result = size.fileFinishedImporting("modules/vibegrations/native/maybeShowVibegrationsFeedback.tsx");

export default function maybeShowVibegrationsFeedback(arg0) {
  _require = arg0;
  const countSettledTurnsResult = require("vibegrationsFeedback").countSettledTurns(arg0);
  importDefault = countSettledTurnsResult;
  let result = countSettledTurnsResult < require("vibegrationsFeedback").MINIMUM_SETTLED_TURNS_FOR_FEEDBACK;
  if (!result) {
    result = require("vibegrationsFeedback").hasShownFeedbackForProject(arg0);
    const tmpResult = require("vibegrationsFeedback");
  }
  if (!result) {
    const result1 = FeedbackManagerDefault.possiblyShowFeedbackModal(FeedbackType.VIBEGRATIONS, () => {
      const result = projectId(paths[1]).markFeedbackShownForProject(projectId);
      projectId = projectId(paths[4])(paths[3], paths.paths);
      const obj = projectId(paths[1]);
      projectId(paths[5]).runAfterInteractions(() => {
        ActionSheetActionCreatorsDefault.openLazy(projectId, "VibegrationsFeedback" + projectId, { projectId, promptCount: countSettledTurnsResult });
      });
    });
  }
};
