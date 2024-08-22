import { webpackBundler } from "@vuepress/bundler-webpack";
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),
  theme: defaultTheme({
    hostname: "localhost",
  }),
});
