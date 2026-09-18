// Module ID: 16617
// Function ID: 16618
// Name: useGuildsBarSelectedGuildScroller
// Dependencies: [19, 4543, 2]
// Exports: default

// Module 16617 (useGuildsBarSelectedGuildScroller)
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4543 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/hooks/useGuildsBarSelectedGuildScroller.tsx");

export default function useGuildsBarSelectedGuildScroller(arg0) {
  noop = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    function handleSelectedGuildChange() {
      let guildId = SelectedGuildStore.getGuildId();
      if (guildId !== c0) {
        let tmp3 = guildId;
        if (guildId == null) {
          tmp3 = null;
        }
        c0 = tmp3;
        if (guildId == null) {
          guildId = null;
        }
        _null(guildId, false);
      }
    }
    c0 = null;
    SelectedGuildStore.addChangeListener(handleSelectedGuildChange);
    return () => {
      SelectedGuildStore.removeChangeListener(handleSelectedGuildChange);
    };
  }, items);
};
