// Module ID: 13048
// Function ID: 13049
// Name: MaskedLinkModalActionCreators
// Dependencies: [19, 21, 13049, 1896, 4953, 2]

// Module 13048 (MaskedLinkModalActionCreators)
import useAlertStore from "useAlertStore" /* 4953 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/masked_link/MaskedLinkModalActionCreators.native.tsx");

export default {
  show(onCancel) {
    onCancel = onCancel.onCancel;
    ({ url, trustUrl, onConfirm, isProtocol } = onCancel);
    const lazyResult = noop.lazy(() => require("asyncRequireImpl")(paths[2], paths.paths));
    useAlertStore.openAlert("masked-link", <lazyResult url={url} trustUrl={trustUrl} onConfirm={onConfirm} onCancel={onCancel} isProtocol={isProtocol} />, onCancel);
  }
};
