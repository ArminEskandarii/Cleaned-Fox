// Preferences specific to Mullvad Browser

pref("browser.startup.homepage", "about:mullvad-browser");

// Do not show the bookmark panel for now, because it makes the initial browser
// window (about:home) bigger, and regular pages will show letterbox margins as
// a result.
pref("browser.toolbars.bookmarks.visibility", "never");

// privacy-browser#19: Enable Mullvad's DOH
pref("network.trr.uri", "https://dns.mullvad.net/dns-query");
pref("network.trr.default_provider_uri", "https://dns.mullvad.net/dns-query");
pref("network.trr.mode", 3);
pref("doh-rollout.provider-list", "[{\"UIName\":\"Mullvad\",\"autoDefault\":true,\"canonicalName\":\"\",\"id\":\"mullvad\",\"last_modified\":0,\"schema\":0,\"uri\":\"https://dns.mullvad.net/dns-query\"},{\"UIName\":\"Mullvad (Ad-blocking)\",\"autoDefault\":false,\"canonicalName\":\"\",\"id\":\"mullvad\",\"last_modified\":0,\"schema\":0,\"uri\":\"https://adblock.dns.mullvad.net/dns-query\"}]");
// privacy-browser#122: Audit DoH heuristics
pref("doh-rollout.disable-heuristics", true);

// privacy-browser#20: Hide NoScript
pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"PersonalToolbar\":[\"personal-bookmarks\"],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"urlbar-container\",\"security-level-button\",\"new-identity-button\",\"downloads-button\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"PanelUI-contents\":[\"home-button\",\"edit-controls\",\"zoom-controls\",\"new-window-button\",\"save-page-button\",\"print-button\",\"bookmarks-menu-button\",\"history-panelmenu\",\"find-button\",\"preferences-button\",\"add-ons-button\",\"developer-button\"],\"addon-bar\":[\"addonbar-closebutton\",\"status-bar\"]},\"seen\":[\"developer-button\",\"_73a6fe31-595d-460b-a920-fcc0f8843232_-browser-action\"],\"dirtyAreaCache\":[\"PersonalToolbar\",\"nav-bar\",\"TabsToolbar\",\"toolbar-menubar\"],\"currentVersion\":14,\"newElementCount\":1}");

// privacy-browser#37: Customization for the about dialog
pref("app.releaseNotesURL.aboutDialog", "about:blank");

// privacy-browser#70: Temporarily disable the language notification
// TODO: Remove when we enable other languages
pref("intl.language_notification.shown", true);

// privacy-browser#94: Disable legacy global microphone/webcam indicator
// Disable the legacy Firefox Quantum-styled global webcam/microphone indicator in favor of each
// platform's native indicator
pref("privacy.webrtc.legacyGlobalIndicator", false);

// privacy-browser#87: Windows and Linux need additional work to make the
// default browser choice working.
// We are shipping only the portable versions for the initial release anyway, so
// we leave this popup enabled only on macOS.
#ifndef XP_MACOSX
pref("browser.shell.checkDefaultBrowser", false);
#endif

// privacy-browser#131: Review a few updater preferences
pref("app.update.notifyDuringDownload", true);
pref("app.update.url.manual", "https://mullvad.net/download/browser");
pref("app.update.url.details", "https://mullvad.net/download/browser");
pref("app.update.badgeWaitTime", 0);
pref("app.releaseNotesURL", "https://github.com/mullvad/mullvad-browser/releases");
// disables the 'What's New?' link in the about dialog, otherwise we need to
// duplicate logic for generating the url to the github releases page
pref("app.releaseNotesURL.aboutDialog", "about:blank");
// point to our feedback url rather than Mozilla's
pref("app.feedback.baseURL", "https://mullvad.net/help/tag/browser/");
