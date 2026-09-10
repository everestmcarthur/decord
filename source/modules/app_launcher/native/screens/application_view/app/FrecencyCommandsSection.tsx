// Module ID: 12217
// Function ID: 12218
// Name: FrecencyCommandsSection
// Dependencies: [19, 17, 1074, 21, 4605, 12199, 12218, 4785, 9479, 4601, 1114, 7575, 2]
// Exports: default

// Module 12217 (FrecencyCommandsSection)
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4785 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7575 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9479 */;
import AppDetailContent from "AppDetailContent" /* 12199 */;
import useFilterAndSortToOnlyFrecentCommandsDefault from "useFilterAndSortToOnlyFrecentCommands" /* 12218 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4605);
let obj2 = { container: { marginBottom: fn(12199).BETWEEN_SECTIONS_MARGIN }, header: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 8 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/FrecencyCommandsSection.tsx");

export default function FrecencyCommandsSection(commands) {
  const context = commands.context;
  ({ onPressCommand: importDefault, section: dependencyMap, onExecuteCommand: noop, installOnDemand: View, sectionName } = commands);
  const tmp = closure_8();
  const arr = useFilterAndSortToOnlyFrecentCommandsDefault({ context, commands: commands.allCommands, limit: 5 });
  const items = [arr.length, sectionName];
  const effect = noop.useEffect(() => {
    if (0 !== arr.length) {
      const obj2 = { num: arr.length, section_name: sectionName, location: AppLauncherTypes.AppLauncherLocations.APP_DETAIL };
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN, obj2);
    }
  }, items);
  let tmp4 = null;
  if (0 !== arr.length) {
    let obj = { style: tmp.container, children: null };
    let obj2 = { style: tmp.header, children: null };
    const obj3 = { variant: "text-md/medium", color: "text-default", children: null };
    const intl = context(1114).intl;
    obj3.children = intl.string(context(1114).t.acSE0h);
    obj2.children = arr(context(4601).Heading, obj3);
    const items1 = [arr(View, obj2), arr.map((command, index) => timestampProducer(AppDetailContent.CommandRow, { command, onPressCommand, isFirstRow: 0 === index, isLastRow: index === arr.length - 1, context, onExecuteCommand, installOnDemand, section, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, sectionName }, command.id))];
    obj.children = items1;
    tmp4 = closure_7(View, obj);
  }
  return tmp4;
};
