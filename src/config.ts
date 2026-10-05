// Site settings. Change these, rebuild, done.

export const config = {
  /** Production origin, without a trailing slash. */
  siteUrl: "https://playnarra.app",
  /**
   * App Store link, e.g. "https://apps.apple.com/app/id1234567890".
   * While empty, the download button shows "Coming soon to the App Store" and is not a link.
   */
  appStoreUrl: "",
  /** Numeric App Store ID. While empty, the Smart App Banner meta tag is left out. */
  appStoreId: "",
  supportEmail: "emirhantr38@gmail.com",
  discordUrl: "https://discord.gg/3Sm26Urvrw",
  developer: "Emir Han Temur",
  /**
   * true: chapters show real app screenshots in a phone frame (src/assets/screens).
   * A missing screenshot is drawn as a placeholder, so keep this false until they're all in.
   * false: chapters are told by Narra's poses only. NARRA_SCREENS_READY=1 forces true for a test build.
   */
  screensReady: false,
  /** Effective date of the privacy policy and terms (YYYY-MM-DD). */
  lastUpdated: "2026-10-05",
} as const;

export const screensReady = config.screensReady || process.env.NARRA_SCREENS_READY === "1";
