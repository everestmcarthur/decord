// Module ID: 10835
// Function ID: 10836
// Name: computeOffsetIfSizeChanged
// Dependencies: []
// Exports: computeOffsetIfSizeChanged

// Module 10835 (computeOffsetIfSizeChanged)
function computeOffsetIfSizeChanged(handlerOffset) {
  return handlerOffset.handlerOffset / handlerOffset.prevSize * handlerOffset.size;
}
computeOffsetIfSizeChanged.__closure = {};
computeOffsetIfSizeChanged.__workletHash = 15588362707928;
computeOffsetIfSizeChanged.__initData = { code: "function computeOffsetIfSizeChanged_Pnpm_computeOffsetIfSizeChangedTs1(params){const{handlerOffset:handlerOffset,prevSize:prevSize,size:size}=params;return handlerOffset/prevSize*size;}" };

export { computeOffsetIfSizeChanged };
