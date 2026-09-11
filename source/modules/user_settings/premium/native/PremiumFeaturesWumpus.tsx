// Module ID: 9477
// Function ID: 9478
// Name: PremiumFeaturesWumpus
// Dependencies: [19, 1373, 21, 4607, 7017, 9478, 9479, 9480, 9481, 9482, 9483, 5639, 2]
// Exports: default

// Module 9477 (PremiumFeaturesWumpus)
import _modDef9478 from "module_9478" /* 9478 */;
import _modDef9483 from "module_9483" /* 9483 */;
import noop from "module_19" /* 19 */;

const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4607);
let obj2 = { clouds: { position: "absolute", top: 0, right: 0 }, wumpus: { position: "absolute", top: 22, right: 22, height: 90 }, wumpusLeft: null };
const obj3 = { transform: null };
let items = [{ scaleX: -1 }];
obj3.transform = items;
obj2.wumpusLeft = obj3;
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx");

export default function PremiumFeaturesWumpus(premiumType) {
  premiumType = premiumType.premiumType;
  const tmp = closure_7();
  const tmp2 = premiumType(7017)();
  dependencyMap = tmp2;
  const items = [premiumType, tmp2];
  const memo = noop.useMemo(() => {
    if (premiumType === PremiumTypes.TIER_0) {
      const obj2 = { wumpusImageSource: _modDef9478, cloudsImageSource: importDefault(closure_1 ? 9479 : 9480) };
    } else {
      if (closure_1) {
        let tmp4 = 9481;
      } else {
        tmp4 = 9482;
      }
      const obj = { wumpusImageSource: _modDef9483, cloudsImageSource: importDefault(tmp4) };
      return obj;
    }
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  const items1 = [closure_4(premiumType(5639), { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource }), ];
  const items2 = [tmp.wumpus, ];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  let obj2 = { children: null };
  items2[1] = wumpusLeft;
  items1[1] = closure_4(premiumType(5639), { style: items2, resizeMode: "contain", source: wumpusImageSource });
  obj2.children = items1;
  return closure_6(closure_5, obj2);
};
