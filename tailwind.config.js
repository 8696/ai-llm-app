/** @type {import('tailwindcss').Config} */

const px = {};
for (let i = 0; i < 500; i++) {
  px[i] = i + 'px';
}


module.exports = {
  // 需要使用 tailwind 的文件
  content: [
    './src/**/*.tsx',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      fontSize: {
        ...px,
      },
      // padding、margin、width、height
      spacing: {
        ...px,
      },
    }
  },
  plugins: []
}
