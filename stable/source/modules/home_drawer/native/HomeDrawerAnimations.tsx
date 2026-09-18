// Module ID: 16027
// Function ID: 16028
// Name: HomeDrawerAnimations
// Dependencies: [4296, 2]

// Module 16027 (HomeDrawerAnimations)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
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
