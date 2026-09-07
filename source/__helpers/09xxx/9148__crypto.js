// Module ID: 9148
// Function ID: 9149
// Name: _crypto
// Dependencies: []

// Module 9148 (_crypto)
arg5.crypto = undefined;
let _crypto;
if (typeof globalThis === "object") {
  const _globalThis2 = globalThis;
  if ("crypto" in globalThis) {
    const _globalThis = globalThis;
    _crypto = crypto;
  }
}
arg5.crypto = _crypto;
