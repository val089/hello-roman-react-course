//KONFIGURACJA STORY BOOKA
//określamy gdzie storybook ma szukać stories, a w addons znajdują się dodatkowo pluginy
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
};
