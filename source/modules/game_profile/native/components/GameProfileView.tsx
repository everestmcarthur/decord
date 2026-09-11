// Module ID: 8804
// Function ID: 8805
// Name: GameProfileView
// Dependencies: [19, 17, 21, 4606, 576, 7235, 7255, 8805, 8809, 8812, 8813, 8823, 8824, 8827, 8841, 8854, 8965, 8967, 8986, 8987, 2]
// Exports: default

// Module 8804 (GameProfileView)
import nativeDefault from "native" /* 576 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7235 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7255 */;
import GameProfileHeaderDefault from "GameProfileHeader" /* 8805 */;
import GameProfileMediaDefault from "GameProfileMedia" /* 8809 */;
import GameProfileReviewsDefault from "GameProfileReviews" /* 8813 */;
import GameProfileSummaryDefault from "GameProfileSummary" /* 8823 */;
import GameProfileLinkAccountDefault from "GameProfileLinkAccount" /* 8824 */;
import GameProfileCommunityDefault from "GameProfileCommunity" /* 8827 */;
import GameProfileAnnouncementsDefault from "GameProfileAnnouncements" /* 8841 */;
import GameProfileShopCarouselDefault from "GameProfileShopCarousel" /* 8854 */;
import GameProfileSimilarGamesDefault from "GameProfileSimilarGames" /* 8965 */;
import GameProfileDetailsDefault from "GameProfileDetails" /* 8967 */;
import GameProfileGameClaimCtaDefault from "GameProfileGameClaimCta" /* 8986 */;
import GameProfileReportButtonDefault from "GameProfileReportButton" /* 8987 */;
import noop from "module_19" /* 19 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4606);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingBottom: nativeDefault.space.PX_16 }, body: null, buttonsContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingBottom: nativeDefault.space.PX_16 };
obj2.body = { flexDirection: "column", paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_32, maxWidth: 520, alignSelf: "center", width: "100%" };
let obj4 = { flexDirection: "column", paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_32, maxWidth: 520, alignSelf: "center", width: "100%" };
obj2.buttonsContainer = { flexDirection: "column", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileView.tsx");

export default function GameProfileView(arg0) {
  ({ game, viewId, source, trackAction, closeModal, websiteButtons, onStoreLinksMeasured } = arg0);
  ({ invite, onGuildInviteResolved, scrollY, onHeaderHeightMeasured, scrollOffsetRef } = arg0);
  const tmp = closure_7();
  noop.useRef(null);
  noop.useRef(null);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.GAME_PROFILE).analyticsLocations;
  const items = [onStoreLinksMeasured];
  closure_3 = noop.useCallback(() => {
    const current = ref.current;
    const current2 = ref2.current;
    if (tmp) {
      if (onStoreLinksMeasured != null) {
        tmp2(current + current2);
      }
    }
  }, items);
  const obj = { value: analyticsLocations, children: null };
  const obj2 = { style: tmp.container, children: null };
  const items1 = [hasOwnProperty(GameProfileHeaderDefault, { game, scrollY, onHeightMeasured: onHeaderHeightMeasured }), ];
  const obj3 = {
    style: tmp.body,
    onLayout(nativeEvent) {
      closure_1.current = nativeEvent.nativeEvent.layout.y;
      closure_3();
    },
    children: null
  };
  const items2 = [hasOwnProperty(GameProfileMediaDefault, { game, viewId, source, trackAction }), , , , , , , , , , ];
  let tmp5Result = websiteButtons.length > 0;
  if (tmp5Result) {
    const obj4 = {
      onLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          closure_2.current = layout.y + layout.height;
          closure_3();
        },
      children: null
    };
    const obj5 = { game, websiteButtons, trackAction };
    obj4.children = tmp5(tmp2(8812), obj5);
    tmp5Result = tmp5(tmp7, obj4);
  }
  items2[1] = tmp5Result;
  items2[2] = hasOwnProperty(GameProfileReviewsDefault, { game, trackAction });
  items2[3] = hasOwnProperty(GameProfileSummaryDefault, { game, viewId, source, trackAction });
  items2[4] = hasOwnProperty(GameProfileLinkAccountDefault, { game, analyticsLocations, trackAction });
  items2[5] = hasOwnProperty(GameProfileCommunityDefault, { closeModal, game, onInviteResolved: onGuildInviteResolved, trackAction });
  items2[6] = hasOwnProperty(GameProfileAnnouncementsDefault, { gameId: game.id, invite, closeModal, trackAction, scrollOffsetRef });
  items2[7] = hasOwnProperty(GameProfileShopCarouselDefault, { game, closeModal, trackAction });
  items2[8] = hasOwnProperty(GameProfileSimilarGamesDefault, { gameId: game.id, trackAction });
  items2[9] = hasOwnProperty(GameProfileDetailsDefault, { game, viewId, source, trackAction });
  const obj8 = { style: tmp.buttonsContainer, children: null };
  const items3 = [hasOwnProperty(GameProfileGameClaimCtaDefault, { game, trackAction }), hasOwnProperty(GameProfileReportButtonDefault, { applicationId: game.id, trackAction })];
  obj8.children = items3;
  items2[10] = timestampProducer(View, obj8);
  obj3.children = items2;
  items1[1] = timestampProducer(View, obj3);
  obj2.children = items1;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(useAnalyticsLocations.AnalyticsLocationProvider, obj);
};
