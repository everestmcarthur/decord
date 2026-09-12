// Module ID: 17330
// Function ID: 17331
// Name: MediaPlaybackPanelContainer
// Dependencies: [19, 21, 14624, 4261, 17331, 17333, 2]

// Module 17330 (MediaPlaybackPanelContainer)
import MediaPlayerManager from "MediaPlayerManager" /* 14624 */;
import MediaPlaybackPanelControllerDefault from "MediaPlaybackPanelController" /* 17331 */;
import MediaPlaybackPanelUIDefault from "MediaPlaybackPanelUI" /* 17333 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelContainer.tsx");

export default noop.memo(function MediaPlaybackPanelContainer() {
  const obj = MediaPlayerManager;
  let tmp2 = null;
  if (obj.useMediaPlayerManagerStore(obj2.useShallow((showPip) => {
    showPip = showPip.showPip;
    let tmp = !showPip;
    if (showPip) {
      tmp = !showPip.canAccessMedia;
    }
    if (!tmp) {
      tmp = null == showPip.activeMediaPlayerSource;
    }
    let tmp3 = !tmp;
    if (!tmp) {
      ({ mediaSourceMessage, activeMediaPlayerSource } = showPip);
      if (activeMediaPlayerSource != null) {
        const attachmentIndex = activeMediaPlayerSource.attachmentIndex;
      }
      let flag = false;
      if (null != mediaSourceMessage) {
        flag = false;
        if (null != attachmentIndex) {
          let tmp5;
          if (mediaSourceMessage != null) {
            const contentMessage = mediaSourceMessage.getContentMessage();
            if (contentMessage != null) {
              tmp5 = contentMessage.attachments[attachmentIndex];
            }
          }
          let flag2;
          if (tmp5 != null) {
            const content_type = tmp5.content_type;
            if (content_type != null) {
              flag2 = content_type.startsWith("audio");
            }
          }
          if (flag2 == null) {
            flag2 = false;
          }
          flag = flag2;
        }
      }
      tmp3 = flag;
    }
    return tmp3;
  }))) {
    const obj3 = { children: jsx(MediaPlaybackPanelUIDefault, {}) };
    tmp2 = jsx(MediaPlaybackPanelControllerDefault, { children: jsx(MediaPlaybackPanelUIDefault, {}) });
  }
  return tmp2;
});
