// Module ID: 1986
// Function ID: 1987
// Name: FluxApi
// Dependencies: [1350, 2]
// Exports: hasFluxApi

// Module 1986 (FluxApi)
import shim_mod from "js_shim/shim" /* 1350 */;
import size from "module_2" /* 2 */;

let shim = shim_mod;
shim = shim.getFluxApi();
const result = size.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = shim;
export const hasFluxApi = function hasFluxApi() {
  return null != shim;
};
