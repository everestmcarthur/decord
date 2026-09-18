// Module ID: 4488
// Function ID: 4489
// Name: ArtboardByIndex
// Dependencies: []
// Exports: ArtboardByIndex, ArtboardByName

// Module 4488 (ArtboardByIndex)

export const ArtboardByIndex = (index) => {
  if (Number.isInteger(index)) {
    const obj = { type: "index", index };
    return obj;
  } else {
    const _Error = Error;
    const error = new Error("Artboard index must be an integer");
    throw error;
  }
};
export (name) => ({ type: "name", name })
