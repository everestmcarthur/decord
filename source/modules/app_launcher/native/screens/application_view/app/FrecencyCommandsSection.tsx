// Module ID: 12177
// Function ID: 12178
// Name: FrecencyCommandsSection
// Dependencies: [19, 17, 1074, 21, 4574, 12159, 12178, 4754, 9441, 4570, 1114, 7537, 2]
// Exports: default

// Module 12177 (FrecencyCommandsSection)
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4754 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7537 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9441 */;
import AppDetailContent from "AppDetailContent" /* 12159 */;
import useFilterAndSortToOnlyFrecentCommandsDefault from "useFilterAndSortToOnlyFrecentCommands" /* 12178 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4574);
let obj2 = { container: { marginBottom: fn(12159).BETWEEN_SECTIONS_MARGIN }, header: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 8 } };
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
    obj2.children = arr(context(4570).Heading, obj3);
    const items1 = [arr(View, obj2), arr.map((command, index) => timestampProducer(AppDetailContent.CommandRow, { command, onPressCommand, isFirstRow: 0 === index, isLastRow: index === arr.length - 1, context, onExecuteCommand, installOnDemand, section, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, sectionName }, command.id))];
    obj.children = items1;
    tmp4 = closure_7(View, obj);
  }
  return tmp4;
};
