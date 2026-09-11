// Module ID: 11174
// Function ID: 11175
// Name: useCollectiblesShopStyles
// Dependencies: [7625, 576, 11175, 2]

// Module 11174 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 576 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 11175 */;
import tinycolor_mod from "tinycolor" /* 7625 */;

let tinycolor = tinycolor_mod;
const importDefaultResultResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE);
let tinycolor = tinycolor_mod;
const saturateResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE).saturate(1);
const importDefaultResult1Result = tinycolor(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default createUseCollectiblesShopStylesDefault({ dark: tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1), light: saturateResult });
