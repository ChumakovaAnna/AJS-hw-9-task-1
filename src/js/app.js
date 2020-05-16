import Settings from "./settingsGeneral/settings";

console.log("worked");
const usedSettings = new Settings();

usedSettings.newSetting = "light";
usedSettings.newSetting = "pop";

console.log(usedSettings.settings);
