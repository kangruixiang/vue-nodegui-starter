const os = require("os");
const path = require("path");

const ankiProfile = "test";

if (os.platform() === "win32") {
  var ankiPath = path.join(process.env.APPDATA, ankiProfile);
} else {
  var ankiPath = path.join(
    process.env.HOME,
    "/Library/Application Support/",
    ankiProfile
  );
}

exports.default = ankiPath;
