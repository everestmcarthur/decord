// Module ID: 651
// Function ID: 652
// Name: valueOf
// Dependencies: [523, 652, 616, 653, 654, 645]

// Module 651 (valueOf)
import _mod523 from "module_523" /* 523 */;
import eq from "eq" /* 616 */;
import equalArrays from "equalArrays" /* 645 */;
import _mod652 from "module_652" /* 652 */;
import mapToArray from "mapToArray" /* 653 */;
import setToArray from "setToArray" /* 654 */;

let prototype;
if (_mod523) {
  prototype = _mod523.prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function equalByTag(byteLength, byteLength2, arg2, arg3, arg4, arg5, get) {
  let buffer = byteLength2;
  let buffer2 = byteLength;
  switch (arg2) {
    case "to":
    break;
    case "Date":
      return false;
    case "TypeError":
    break;
    case "Error":
    break;
    case "HTTP":
    break;
    case "T":
    break;
    case "HermesInternal":
    break;
    case "Icon":
    break;
    case "IconComponent":
    break;
    case "c":
    break;
    case "p":
    break;
    case "LengthDelimited":
    break;
    case "limit":
    break;
    case "i":
    break;
    case "it":
    break;
    case "d":
    break;
    case "Map":
    break;
    case "Math":
    break;
    case "h":
    break;
    case "Number":
    break;
    case "Object":
    break;
    case "ct":
    break;
    case "PX_16":
    break;
    case "flex":
    break;
    case "flexDirection":
    break;
    case "PX_8":
    break;
    case "Path":
    break;
    case "Promise":
    break;
    case "s":
    break;
    case "Reflect":
    break;
    case "Set":
    break;
    case "format":
    break;
    case "formatToPlainString":
    break;
    case "String":
    break;
    case "Symbol":
    break;
    case "Text":
    break;
    case "x":
    break;
    case "View":
    break;
    case "w":
    break;
    case "WireType":
    break;
    case "__closure":
    break;
    case "__d":
    break;
    case "__esModule":
    break;
    case "__initData":
    break;
    case "filter":
    break;
    case "__packager_asset":
    break;
    case "k":
    break;
    case "set":
    break;
    case "__workletHash":
    break;
    case "_desired":
    break;
    case "_distance":
    break;
    case "st":
    break;
    case "accessibilityLabel":
    break;
    case "accessibilityRole":
    break;
    case "accessible":
    break;
    case "padding":
    break;
    case "paddingHorizontal":
    break;
    case "add":
    break;
    case "alignItems":
    break;
    case "ao":
    break;
    case "applicationId":
    break;
    case "ti":
    break;
    case "apply":
    break;
    case "assign":
    break;
    case "backgroundColor":
    break;
    case "round":
    break;
    case "bm":
    break;
    case "body":
    break;
    case "borderRadius":
    break;
    case "bottom":
    break;
    case "call":
    break;
    case "channel":
    break;
    case "channelId":
    break;
    case "channel_id":
    break;
    case "id":
    break;
    case "children":
    break;
    case "cix":
    break;
    case "ix":
    break;
    case "unicodeVersion":
    break;
    case "code":
    break;
    case "color":
    break;
    case "colors":
    break;
    case "concat":
    break;
    case "construct":
    break;
    case "constructor":
    break;
    case "container":
    break;
    case "content":
    break;
    case "context":
    break;
    case "text":
    break;
    case "count":
    break;
    case "create":
    break;
    case "createStyles":
    break;
    case "ty":
    break;
    case "current":
    break;
    case "cursor":
    break;
    case "data":
    break;
    case "ddd":
    break;
    case "default":
    break;
    case "defineProperty":
    break;
    case "op":
    break;
    case "delete":
    break;
    case "description":
    break;
    case "ip":
    break;
    case "disabled":
    break;
    case "sa":
    break;
    case "dispatch":
    break;
    case "displayName":
    break;
    case "diversity":
    break;
    case "v":
    break;
    case "done":
    break;
    case "duration":
    break;
    case "enabled":
    break;
    case "end":
    break;
    case "enumerable":
    break;
    case "error":
    break;
    case "exports":
      if (byteLength.byteLength == byteLength2.byteLength) {
        if (byteLength.byteOffset == byteLength2.byteOffset) {
          buffer2 = byteLength.buffer;
          buffer = byteLength2.buffer;
          let tmp34 = buffer2.byteLength != buffer.byteLength;
          if (!tmp34) {
            const tmp40 = new _mod652(buffer2);
            const tmp44 = new _mod652(buffer);
            tmp34 = !arg5(tmp40, tmp44);
          }
          return !tmp34;
        }
      }
      return false;
    case "fileFinishedImporting":
    break;
    case "fill":
    break;
    case "find":
    break;
    case "ind":
      let tmp30 = eq;
      let tmp31 = +byteLength;
      let tmp32 = +byteLength2;
      let tmp30Result = tmp30(tmp31, tmp32);
      return tmp30Result;
    case "flags":
    break;
    case "forEach":
      tmp30 = eq;
      tmp31 = +byteLength;
      tmp32 = +byteLength2;
      tmp30Result = tmp30(tmp31, tmp32);
      return tmp30Result;
    case "gap":
    break;
    case "get":
      tmp30 = eq;
      tmp31 = +byteLength;
      tmp32 = +byteLength2;
      tmp30Result = tmp30(tmp31, tmp32);
      return tmp30Result;
    case "getChannel":
    break;
    case "getCurrentUser":
      let tmp27 = byteLength.name == byteLength2.name;
      if (tmp27) {
        tmp27 = byteLength.message == byteLength2.message;
      }
      return tmp27;
    case "guild":
    break;
    case "guildId":
      let text = `${byteLength2}`;
      let tmp26 = byteLength == `${byteLength2}`;
      return tmp26;
    case "guild_id":
    break;
    case "has":
      text = `${byteLength2}`;
      tmp26 = byteLength == `${byteLength2}`;
      return tmp26;
    case "hasDiversityParent":
    break;
    case "hash":
      let tmp = mapToArray;
      if (!tmp) {
        tmp = setToArray;
      }
      if (byteLength.size != byteLength2.size) {
        if (!tmp8) {
          return false;
        }
      }
      const value = get.get(byteLength);
      if (value) {
        return value == byteLength2;
      } else {
        const result = get.set(byteLength, byteLength2);
        const tmpResult = tmp(byteLength);
        const tmp14 = arg3 | 2;
        const tmp18 = equalArrays;
        get.delete(byteLength);
        return equalArrays(tmpResult, tmp(byteLength2), arg3 | 2, arg4, arg5, get);
      }
      tmp8 = 1 & arg3;
    break;
    case "hd":
    break;
    case "header":
    break;
    case "height":
    break;
    case "httpServerLocation":
      if (valueOf) {
        const call = tmp2.call;
        if (typeof call === "unknown") {
          let callResult = tmp2();
        } else {
          callResult = call(byteLength);
        }
        const call2 = tmp2.call;
        if (typeof call2 === "unknown") {
          let tmp2Result = tmp2();
        } else {
          tmp2Result = call2(byteLength2);
        }
        return callResult == tmp2Result;
      }
    break;
    case "icon":
    break;
    case "includes":
    break;
    case "index":
    break;
    case "indexOf":
    break;
    case "intl":
    break;
    case "items":
    break;
    case "join":
    break;
    case "jsx":
    break;
    case "jsxs":
    break;
    case "justifyContent":
    break;
    case "key":
    break;
    case "keys":
    break;
    case "kind":
    break;
    case "ks":
    break;
    case "space":
    break;
    case "label":
    break;
    case "lc":
    break;
    case "left":
    break;
    case "length":
    break;
    case "lj":
    break;
    case "loadJsonAsset":
    break;
    case "location":
    break;
    case "map":
    break;
    case "marginTop":
    break;
    case "marginBottom":
    break;
    case "match":
    break;
    case "max":
    break;
    case "memo":
    break;
    case "message":
    break;
    case "messageId":
    break;
    case "method":
    break;
    case "methodobject":
    break;
    case "withTiming":
    break;
    case "min":
    break;
    case "mn":
    break;
    case "mode":
    break;
    case "name":
    break;
    case "names":
    break;
    case "next":
    break;
    case "nm":
    break;
    case "no":
    break;
    case "now":
    break;
    case "np":
    break;
    case "onPress":
    break;
    case "opacity":
    break;
    case "options":
    break;
    case "parent":
    break;
    case "paths":
    break;
    case "pos":
    break;
    case "position":
    break;
    case "props":
    break;
    case "prototype":
    break;
    case "type":
    break;
    case "push":
    break;
    case "radii":
    break;
    case "raw":
    break;
    case "ref":
    break;
    case "registerAsset":
    break;
    case "rejectWithError":
    break;
    case "replace":
    break;
    case "resizeMode":
    break;
    case "size":
    break;
    case "resolve":
    break;
    case "result":
    break;
    case "right":
    break;
    case "runOnJS":
    break;
    case "scales":
    break;
    case "shapes":
    break;
    case "sk":
    break;
    case "skuId":
    break;
    case "slice":
    break;
    case "source":
    break;
    case "split":
    break;
    case "spriteIndex":
    break;
    case "sr":
    break;
    case "start":
    break;
    case "state":
    break;
    case "status":
    break;
    case "substring_i":
    break;
    case "string":
    break;
    case "style":
    break;
    case "surrogates":
    break;
    case "tag":
    break;
    case "test":
    break;
    case "then":
    break;
    case "title":
    break;
    case "toCharArray$esjava$1":
    break;
    case "toLowerCase":
    break;
    case "toString":
    break;
    case "top":
    break;
    case "track":
    break;
    case "transform":
    break;
    case "uri":
    break;
    case "url":
    break;
    case "useCallback":
    break;
    case "useEffect":
    break;
    case "useMemo":
    break;
    case "useRef":
    break;
    case "useState":
    break;
    case "useStateFromStores":
    break;
    case "user":
    break;
    case "userId":
    break;
    case "value":
    break;
    case "values":
    break;
    case "variant":
    break;
    case "width":
    break;
    case "window":
    break;
    case "withSpring":
    break;
    case "":
    break;
    case "isArrayBuffer":
    break;
    case "A":
    break;
    case "ay":
    break;
    case "guild_metadata":
    break;
    case "metadataRefreshing":
    break;
    case "getIsLoading":
    break;
    case "getIsLoadingAgeVerification":
    break;
    case "AgeVerificationDmCta":
    break;
    case "tapImageData":
    break;
    case "person_standing_tone5":
    break;
    case "extraBottomHeight":
    break;
    case "$ZodBoolean":
    break;
    case "ZodBoolean":
    break;
    case "B":
    break;
    case "le":
    break;
    case "an":
    break;
    case "n":
    break;
    case "ActionBarPrimaryButton":
    break;
    case "u":
    break;
    case "tt":
    break;
    case "on":
    break;
    case "$ZodDate":
    break;
    case "ZodDate":
    break;
    case "D":
    break;
    case "DateToSystemTimezoneSetter":
    break;
    case "at":
    break;
    case "te":
    break;
    case "mez":
    break;
    case "Setter":
    break;
    case "useDefaultThreadName":
    break;
    case "MarkupParserNodeTypeError":
    break;
    case "E":
    break;
    case "Err":
    break;
    case "ro":
    break;
    case "or":
    break;
    case "khr":
    break;
    case "BOT_HTTP_INTERACTIONS":
    break;
    case "H":
    break;
    case "HT":
    break;
    case "TP":
    break;
    case "P":
    break;
    case "INTERACTIONS":
    break;
    case "NSFW_SPACE_WARNING_MODAL_CLICKED":
    break;
    case "rm":
    break;
    case "m":
    break;
    case "me":
    break;
    case "mes":
    break;
    case "I":
    break;
    case "InternalCard":
    break;
    case "ter":
    break;
    case "na":
    break;
    case "al":
    break;
    case "CardA11yWrapper":
    break;
    case "perGuildMaxCount":
    break;
    case "PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL":
    break;
    case "paymentGatewayPlanId":
    break;
    case "integrationOwner":
    break;
    case "integrationOwnerHook":
    break;
    case "setScrollDirection":
    break;
    case "closeSuspendedUser":
    break;
    case "getChannelIcon":
    break;
    case "getChannelIconComponent":
    break;
    case "getChannelIconComponentWithGuild":
    break;
    case "co":
    break;
    case "C":
    break;
    case "Component":
    break;
    case "om":
    break;
    case "mp":
    break;
    case "po":
    break;
    case "pon":
    break;
    case "one":
    break;
    case "ne":
    break;
    case "en":
    break;
    case "$ZodCheckMaxLength":
    break;
    case "kMaxLength":
    break;
    case "L":
    break;
    case "eng":
    break;
    case "ng":
    break;
    case "el":
    break;
    case "li":
    break;
    case "lim":
    break;
    case "limited":
    break;
    case "limitedTimeBadge":
    break;
    case "mi":
    break;
    case "mit":
    break;
    case "getAppUIViewed":
    break;
    case "wedding":
    break;
    case "getMediaPostEmbedChannelId":
    break;
    case "createGuildReportRaidSystemMessage":
    break;
    case "$ZodMap":
    break;
    case "ZodMap":
    break;
    case "M":
    break;
    case "ap":
    break;
    case "unit_type":
    break;
    case "ToIntlMathematicalValue":
    break;
    case "th":
    break;
    case "ValueSetter":
    break;
    case "$ZodCheckNumberFormat":
    break;
    case "N":
    break;
    case "NumberFormat":
    break;
    case "um":
    break;
    case "b":
    break;
    case "be":
    break;
    case "activeTabId":
    break;
    case "disableEarlyViewCommandExecution":
    break;
    case "threshold_met":
    break;
    case "meetsServerAgeRequirement":
    break;
    case "$ZodObject":
    break;
    case "$ZodObjectJIT":
    break;
    case "ZodObject":
    break;
    case "O":
    break;
    case "j":
    break;
    case "je":
    break;
    case "IT":
    break;
    case "xdays":
    break;
    case "MEDIA_PICKER_SEND_BUTTON_SPRING":
    break;
    case "marginHorizontal":
    break;
    case "Direction":
    break;
    case "rect":
    break;
    case "PX_80":
    break;
    case "_":
    break;
    case "getTrendingType":
    break;
    case "TrendingType":
    break;
    case "beforeItem":
    break;
    case "tempBanned":
    break;
    case "AUTO_MODERATION_REMOVE_REGEX_PATTERNS":
    break;
    case "RNSVGClipPath":
    break;
    case "ClipPath":
    break;
    case "lip":
    break;
    case "$ZodPromise":
    break;
    case "ZodPromise":
    break;
    case "PromiseDeduper":
    break;
    case "is":
    break;
    case "se":
    break;
    case "dup":
    break;
    case "perUserFpsWindow":
    break;
    case "woman_and_man_holding_hands_medium_skin_tone_medium_dark_skin_tone":
    break;
    case "useGameInvitesChannelOfficialApplication":
    break;
    case "invalidEmojis":
    break;
    case "isAVI":
    break;
    case "isAVIF":
    break;
    case "IFD_TYPE_GPS":
    break;
    case "GPSAltitude":
    break;
    case "GPSAltitudeRef":
    break;
    case "Altitude":
    break;
    case "R":
    break;
    case "ReflectionBinaryReader":
    break;
    case "ef":
    break;
    case "f":
    break;
    case "BinaryReader":
    break;
    case "file_cabinet":
    break;
    case "cab":
    break;
    case "$ZodSet":
    break;
    case "ZodSet":
    break;
    case "S":
    break;
    case "et":
    break;
    case "canUseEmojisEverywhere":
    break;
    case "postformat":
    break;
    case "form":
    break;
    case "orm":
    break;
    case "ma":
    break;
    case "mat":
    break;
    case "lai":
    break;
    case "StringBuilder":
    break;
    case "tr":
    break;
    case "tri":
    break;
    case "ring":
    break;
    case "in":
    break;
    case "ing":
    break;
    case "g":
    break;
    case "$ZodSymbol":
    break;
    case "ZodSymbol":
    break;
    case "SymbolLock":
    break;
    case "bo":
    break;
    case "bol":
    break;
    case "QUEST_BAR_MOBILE":
    break;
    case "QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT":
    break;
    case "INTERACTIVE_MUTED":
    break;
    case "baseCost":
    break;
    case "cachedPrimarySuffix":
    break;
    case "unlocked":
    break;
    case "unlockedEmojis":
    break;
    case "lockedEmojis":
    break;
    case "isActionPickSupported":
    break;
    case "buttonLabel":
    break;
    case "generateNewAnimationId":
    break;
    case "ActionSheetHeaderPressableText":
    break;
    case "Pressable":
    break;
    case "ex":
    break;
    case "ext":
    break;
    case "isRenewableEndDateSortEnabled":
    break;
    case "AccessibilityFocusView":
    break;
    case "V":
    break;
    case "W":
    break;
    case "ir":
    break;
    case "re":
    break;
    case "reType":
    break;
    case "pe":
    break;
    case "_clientPromise":
    break;
    case "maxDynamicContentSize":
    break;
    case "ACTION_SHEET_START_HEIGHT_RATIO":
    break;
    case "STAR":
    break;
    case "START":
    break;
    case "IO":
    break;
    case "__":
    break;
    case "__c":
    break;
    case "cl":
    break;
    case "clo":
    break;
    case "lo":
    break;
    case "los":
    break;
    case "os":
    break;
    case "su":
    break;
    case "sur":
    break;
    case "ur":
    break;
    case "isExpanded":
    break;
    case "__data__":
    break;
    case "_d":
    break;
    default:
      return false;
  }
};
