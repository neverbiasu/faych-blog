import { getDirname, path } from 'vuepress/utils';
import { socialSharePlugin } from 'vuepress-plugin-social-share';
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';

const __dirname = getDirname(import.meta.url);

export const faychTheme = {
  return: {
    name: 'faych-theme',

    clientConfigFile: path.resolve(__dirname, 'client.ts'),

    // templateBuild: path.resolve(__dirname, 'templates/build.html'),
    // templateDev: path.resolve(__dirname, 'templates/dev.html'),

    plugins: [
      ['@vuepress/plugin-catalog'],
      [socialSharePlugin()],
      [mediumZoomPlugin()],
      [removeHtmlExtensionPlugin()]
    ]
  }
};
