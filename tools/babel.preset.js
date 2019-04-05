const { BUILD_ENV } = process.env;
const presetOptions = BUILD_ENV === 'hot' || BUILD_ENV === 'umd' || BUILD_ENV === 'es' ?
  { loose: true, modules: false } :
  { loose: true };

const plugins = [
  'transform-decorators-legacy',
  'dynamic-import-node'
];

module.exports = {
  presets: [
    ['env', presetOptions],
    'stage-1',
    'react',
  ],
  plugins,
};
