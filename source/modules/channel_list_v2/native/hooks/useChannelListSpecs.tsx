// Module ID: 16135
// Function ID: 16136
// Name: useChannelListSpecs
// Dependencies: [19, 10123, 16136, 1477, 16020, 4982, 1611, 10998, 2]
// Exports: default

// Module 16135 (useChannelListSpecs)
import closure_3 from "noop" /* 19 */;
import hairlineWidth from "hairlineWidth" /* 10123 */;

const require = arg1;
({ STICKY_BANNER_ASPECT_RATIO: c4, BANNER_MAX_HEIGHT_PERCENTAGE: c5 } = hairlineWidth);
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(16136).useRedesignGuildHeaderHeight(banner);
  height = height(1477)().height;
  const tmp2 = height(16020)();
  dependencyMap = tmp2;
  const obj = redesignGuildHeaderHeight(16136);
  const fontScale = redesignGuildHeaderHeight(4982).useFontScale();
  closure_4 = tmp4;
  const top = height(1611)().top;
  const items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(dependencyMap / closure_4, height * top);
    }
    return { bannerHeight: height(10998)(num), bannerWidth: height(10998)(dependencyMap), headerHeight: height(10998)(redesignGuildHeaderHeight), fontScale, listTop: height(10998)(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: height(10998)(24), listViewportHeight: height(10998)(height - top) };
  }, items);
};
