// Module ID: 5736
// Function ID: 5737
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5736

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
