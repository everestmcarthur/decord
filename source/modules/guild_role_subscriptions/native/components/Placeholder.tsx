// Module ID: 17716
// Function ID: 17717
// Name: Placeholder
// Dependencies: [19, 17, 21, 4574, 2]
// Exports: default

// Module 17716 (Placeholder)
import noop from "module_19" /* 19 */;

const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let closure_2 = createStyles.createStyles({ spinner: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/Placeholder.tsx");

export default function Placeholder() {
  return <ActivityIndicator style={closure_2().spinner} />;
};
