// Module ID: 12545
// Function ID: 12546
// Name: useGuildPowerupOnDeactivate
// Dependencies: [19, 12540, 2]
// Exports: default

// Module 12545 (useGuildPowerupOnDeactivate)
import closure_2 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default function useGuildPowerupOnDeactivate(arg0, arg1) {
  const tmp = onToggle(12540)(arg0, arg1);
  onToggle = tmp.onToggle;
  const items = [onToggle];
  return { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: React.useCallback(() => onToggle(false), items) };
};
