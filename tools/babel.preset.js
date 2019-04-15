const { BUILD_ENV } = process.env;
const presetOptions = BUILD_ENV === 'es' ? { loose: true, modules: false } : { loose: true };

module.exports = {
  presets: [
    ['env', presetOptions],
  ],
};
