// Module ID: 16853
// Function ID: 16854
// Name: Separators
// Dependencies: [19, 17, 7994, 21, 4638, 2]
// Exports: CardVerticalSeparator, MediaVerticalSeparator, MessageVerticalSeparator

// Module 16853 (Separators)
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const SearchConstants = fn(7994);
({ MEDIA_ITEM_GAP_WIDTH, FILES_OR_LINKS_GAP_WIDTH } = SearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_2 = createStyles.createStyles({ filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH }, mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH }, messageSeparator: { height: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/Separators.tsx");

export const MessageVerticalSeparator = function MessageVerticalSeparator() {
  return <View style={closure_2().messageSeparator} />;
};
export const MediaVerticalSeparator = function MediaVerticalSeparator() {
  return <View style={closure_2().mediaSeparator} />;
};
export const CardVerticalSeparator = function CardVerticalSeparator() {
  return <View style={closure_2().filesOrLinksSeparator} />;
};
