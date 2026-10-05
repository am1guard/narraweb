// @ts-check
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://playnarra.app",
  trailingSlash: "always",
  build: {
    format: "directory",
    inlineStylesheets: "always",
  },
  compressHTML: true,
  image: {
    // AVIF first, WebP fallback; sharp runs at build time only.
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  devToolbar: { enabled: false },
});
