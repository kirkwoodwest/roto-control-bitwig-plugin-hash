loadAPI(22);

host.setShouldFailOnDeprecatedUse(true);

host.defineController(
  "kirkwoodwest",
  "plugin-data-hash",
  "0.1",
  "8877297f-fb1d-4e86-98ec-8978a24e8125",
  "kirkwoodwest"
);

let cursorTrack;
let cursorDevice;
let isPlugin = true;
const PARAM_COUNT = 64;

host.defineMidiPorts(0, 0);

let idList = []; // index → parameter_id

function init() {
  println("plugin-data-hash initialized!");

  cursorTrack = host.createCursorTrack(1,1);
  cursorDevice = cursorTrack.createCursorDevice();
  cursorDevice.createCursorRemoteControlsPage(8);

  // Store ID list for index lookup
  cursorDevice.addDirectParameterIdObserver((ids) => {
    idList = ids;
  });

cursorDevice.addDirectParameterNameObserver(PARAM_COUNT, (parameterId, name) => {
  const index = findIndexById(parameterId);
  if (index === -1) return;
  
  const convertedId = parameterId;//convertParameterId(parameterId)
  const paramIdHash = getPluginHash(convertedId, 6);
  const nameHash = getPluginHash(name, 6);

  println(`[${index}] : ${paramIdHash} : ${parameterId} : ${name} : ${nameHash}`);

  
});

  println("Observers added.");
}

function flush() {}

function exit() {
  println("plugin-data-hash exited.");
}

// Helper to find the index of a parameter_id in idList[]
function findIndexById(parameterId) {
  for (let i = 0; i < idList.length; i++) {
    if (idList[i] === parameterId) {
      return i;
    }
  }
  return -1; // not found
}

function convertParameterId(id) {
  if (!isPlugin) return id;
  return id.replace(/^CONTENTS\//, "CONTENTS/ROOT_GENERIC_MODULE/");
}

function getPluginHash(text, hashSize) {
  const sha1 = java.security.MessageDigest.getInstance("SHA-1");
  const inputBytes = new java.lang.String(text).getBytes("UTF-8");
  const hashBytes = sha1.digest(inputBytes);
  let hex = "";
  for (let i = 0; i < hashSize; i++) {
    const masked = hashBytes[i] & 127;
    const hexPart = masked.toString(16).toLowerCase();
    hex += hexPart.length < 2 ? "0" + hexPart : hexPart;
  }
  return hex;
}

function processHashByte(byteVal) {
  return byteVal & 0x7F; // mask to 0–127
}

function toHexString(byteVal) {
  const hex = (byteVal & 0xFF).toString(16).toUpperCase();
  return hex.length < 2 ? "0" + hex : hex;
}

function createHashList(name, size) {
  const hashBytes = getPluginHash(name, size);
  const hexList = [];
  for (let i = 0; i < hashBytes.length; i++) {
    hexList.push(toHexString(hashBytes[i]));
  }
  return hexList;
}