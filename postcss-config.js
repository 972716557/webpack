// postcss.config.js
//使用 postcss-loader，自动添加 CSS3 部分属性的浏览器前缀

// 上面我们用到的 transform: translateX(-50%);，需要加上不同的浏览器前缀，这个我们可以使用 postcss-loader 来帮助我们完成

// postcss配置文件
module.exports = {
  plugins: {
    autoprefixer: require("autoprefixer"),
  },
};
