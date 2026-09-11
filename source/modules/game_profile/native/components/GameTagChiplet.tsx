// Module ID: 17242
// Function ID: 17243
// Name: GameTagChiplet
// Dependencies: [19, 17, 21, 4607, 8768, 8779, 9276, 2]

// Module 17242 (GameTagChiplet)
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8768 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8779 */;
import GuildTag from "GuildTag" /* 9276 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_5 = createStyles.createStyles({ container: { flexShrink: 1, minWidth: 0, overflow: "hidden" }, text: { flexShrink: 1, minWidth: 0 }, image: { width: 12, height: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameTagChiplet.tsx");

export default noop.memo((game) => {
  game = game.game;
  ({ userId, textColor } = game);
  const tmp = closure_5();
  const iconURL = game.getIconURL(32);
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.CallTile, sourceUserId: userId };
  const obj3 = { guildTag: game.name, guildBadge: null, containerStyles: null, textStyle: null, onPress: null, textColor: null };
  let tmp5Result;
  if (null != iconURL) {
    const obj4 = { source: null, alt: "", style: null };
    const obj7 = { uri: iconURL };
    obj4.source = obj7;
    obj4.style = tmp.image;
    tmp5Result = tmp5(Image, obj4);
  }
  obj3.guildBadge = tmp5Result;
  ({ container: obj2.containerStyles, text: obj2.textStyle } = tmp);
  obj3.onPress = useOpenGameProfileModalDefault(obj);
  obj3.textColor = textColor;
  return jsx(GuildTag.BaseGuildTagChiplet, { guildTag: game.name, guildBadge: null, containerStyles: null, textStyle: null, onPress: null, textColor: null });
});
