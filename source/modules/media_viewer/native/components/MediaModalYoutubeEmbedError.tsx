// Module ID: 13072
// Function ID: 13073
// Name: MediaModalYoutubeEmbedError
// Dependencies: [19, 17, 21, 4607, 576, 9694, 4603, 1114, 5027, 4301, 2]

// Module 13072 (MediaModalYoutubeEmbedError)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4301 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4607);
let obj = { container: { backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center", flex: 1 }, text: null };
let obj3 = { backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center", flex: 1 };
obj.text = { marginBottom: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const obj4 = { marginBottom: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx");

export default noop.memo(function MediaModalYoutubeEmbedError(videoId) {
  videoId = videoId.videoId;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const items = [closure_4(videoId(9694).StreamFailed, { resizeMode: "contain" }), , ];
  const obj2 = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = videoId(1114).intl;
  obj2.children = intl.string(videoId(1114).t.u7vKPs);
  items[1] = closure_4(videoId(4603).Text, obj2);
  const obj3 = { text: null, variant: "primary-overlay", shrink: true, grow: false, onPress: null };
  const intl2 = videoId(1114).intl;
  obj3.text = intl2.string(videoId(1114).t.LLpxJ5);
  obj3.onPress = function onPress() {
    LinkingDefault.openURL("https://youtube.com/watch?v=" + videoId);
  };
  items[2] = closure_4(videoId(5027).Button, obj3);
  obj.children = items;
  return closure_5(View, obj);
});
