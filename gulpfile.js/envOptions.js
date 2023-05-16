const srcPath = './source';
const distPath = './dist';
const nodePath = './node_modules';

let envOptions = {
  string: 'env',
  default: {
    env: 'develop',
  },
  copyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
      `!${srcPath}/assets/style/**/*.css`,
      `!${srcPath}/assets/js/**/*.js`,
    ],
    path: distPath,
  },
  html: {
    src: [
      `${srcPath}/**/*.html`,
    ],
    ejsSrc: [
      `${srcPath}/**/*.ejs`,
    ],
    path: distPath,
  },
  style: {
    src: [
      `${srcPath}/assets/style/**/*.css`,
    ],
    path: `${distPath}/assets/style`,
  },
  javascript: {
    src: [
      `${srcPath}/assets/js/**/*.js`,
    ],
    concat: 'all.js',
    path: `${distPath}/assets/js`,
  },
  vendors: {
    src: [
      `${nodePath}/flowbite/dist/flowbite.min.js`,
    ],
    concat: 'vendors.js',
    path: `${distPath}/assets/js`,
  },
  images: {
    src: [
      `${srcPath}/assets/images/**/*`,
    ],
    path: `${distPath}/assets/images`,
  },
  clean: {
    src: distPath
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;