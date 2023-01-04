const config = {
  projectName: 'taro-vue3-demo',
  date: '2022-3-29',
  // 设计稿尺寸
  designWidth: 375,
  // 函数形式，input入参为当前样式文件的绝对路径
  // designWidth (input) {
  //   // 
  //   console.log(input)
  //   if (input.file.replace(/\\+/g, '/').indexOf('@nutui/nutui-taro') > -1) {
  //     return 375
  //   }
  //   return 750
  // },
  // 设计稿尺寸换算规则
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  // Taro 插件配置
  plugins: ['@tarojs/plugin-html'],
  // 全局变量配置
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  // 框架
  framework: 'vue3',
  sass:{
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
  },
  // 小程序端专用配置
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-'], // 忽略的样式名  选择器
          onePxTransform: true, // 开启1px转换
          unitPrecision: 5,
          propList: ['*'],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['nutui-taro'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
