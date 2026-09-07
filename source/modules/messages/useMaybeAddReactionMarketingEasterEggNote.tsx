// Module ID: 10339
// Function ID: 10340
// Name: useMaybeAddReactionMarketingEasterEggNote
// Dependencies: [10340, 2]
// Exports: default

// Module 10339 (useMaybeAddReactionMarketingEasterEggNote)
import set from "set" /* 2 */;
import useMaybeAddPollsMarketingEasterEggNoteDefault from "useMaybeAddPollsMarketingEasterEggNote" /* 10340 */;

const result = set.fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = useMaybeAddPollsMarketingEasterEggNoteDefault(arg0);
  }
  return tmp;
};
