export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
  
    // 导航栏背景色
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '导航栏标题文字',
    // 导航栏标题颜色 block和white为白色
    navigationBarTextStyle: 'black',
    // 导航栏样式，custom时，只保留右上角胶囊按钮
    navigationStyle: 'default',
    // 下拉loading的样式 dark和 light
    backgroundTextStyle: 'light',
  },
  // 小程序端特有属性
  debug: true, // 开启调试模式
  navigateToMiniProgramAppIdList: [], // 允许跳转的小程序appid
  requiredBackgroundModes: ['audio'], // 后台运行时需要的权限类型-后台使用的能力
})
