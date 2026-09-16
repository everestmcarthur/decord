// Module ID: 12684
// Function ID: 12685
// Name: useGuildPowerupOnDeactivate
// Dependencies: [19, 12679, 2]
// Exports: default

// Module 12684 (useGuildPowerupOnDeactivate)
import useGuildPowerupOnToggleDefault from "useGuildPowerupOnToggle" /* 12679 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default function useGuildPowerupOnDeactivate(arg0, arg1) {
  const tmp = useGuildPowerupOnToggleDefault(arg0, arg1);
  const onToggle = tmp.onToggle;
  const obj = { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: null };
  const items = [onToggle];
  obj.onDeactivate = noop.useCallback(() => onToggle(false), items);
  return obj;
};
