// .vuepress/config.js
const { config } = require("vuepress-theme-hope");

module.exports = config({
  // your config here
  themeConfig: {
    mdEnhance: {
      // 启用下角标
      sub: true,
      // 启用上角标
      sup: true,
      // 启用自定义对齐
      align: true,
      // 启用脚注
      footnote: true,
      // 开启标记
      mark: true,
      // 启用流程图
      flowchart: false,
      // 启用 TeX 支持
      tex: false,
      // 启用代码演示
      demo: false,
      // 启用幻灯片
      presentation: false,
      //代码块显示行号
      lineNumbers: true,
    },
    // 暗色模式 
    darkmode: {auto,},
  },
});
