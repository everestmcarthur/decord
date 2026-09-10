// Module ID: 16104
// Function ID: 16105
// Name: HomeDrawerAnimations
// Dependencies: [4341, 2]

// Module 16104 (HomeDrawerAnimations)
import ReanimatedRexport from "ReanimatedRexport" /* 4341 */;
import size from "module_2" /* 2 */;

const obj = { duration: 280, easing: null };
const Easing = ReanimatedRexport.Easing;
obj.easing = Easing.out(ReanimatedRexport.Easing.cubic);
const obj2 = { duration: 180, easing: null };
const Easing2 = ReanimatedRexport.Easing;
obj2.easing = Easing2.out(ReanimatedRexport.Easing.cubic);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_SNAP_TIMING = obj2;
