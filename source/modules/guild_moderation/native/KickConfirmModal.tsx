// Module ID: 11952
// Function ID: 11953
// Name: KickConfirmModal
// Dependencies: [19, 21, 11016, 11018, 1114, 11945, 2]
// Exports: default

// Module 11952 (KickConfirmModal)
import KickConfirmDefault from "KickConfirm" /* 11945 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirmModal.tsx");

export default function KickConfirmModal(onBeforeGoBack) {
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  let onGoBack;
  onGoBack = require("useNavigatorBackHandler")({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "kick", title: null, render: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.R3QeLQ);
  obj.render = function render() {
    return jsx(KickConfirmDefault, { onKick: onGoBack, guildId, userId });
  };
  return jsx(require("ModalStackNavigator"), { screenKey: "kick", title: null, render: null });
};
