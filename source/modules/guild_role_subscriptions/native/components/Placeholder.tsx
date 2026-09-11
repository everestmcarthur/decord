// Module ID: 17766
// Function ID: 17767
// Name: Placeholder
// Dependencies: [19, 17, 21, 4606, 2]
// Exports: default

// Module 17766 (Placeholder)
import noop from "module_19" /* 19 */;

const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_2 = createStyles.createStyles({ spinner: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/Placeholder.tsx");

export default function Placeholder() {
  return <ActivityIndicator style={closure_2().spinner} />;
};
