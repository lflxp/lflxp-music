const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const dayjs = require('dayjs')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const isEnvProduction = process.env.NODE_ENV === 'production'

// 注入版本信息
process.env.VUE_APP_VERSION = require('./package.json').version
// 注入版本更新时间
process.env.VUE_APP_UPDATE_TIME = dayjs().locale('zh-cn').format('YYYY-MM-DD')

module.exports = defineConfig({
  publicPath: '/music/',
  devServer: {
    proxy: {
      '/login': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/api': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/admin': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/music': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/playlist': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/lyric': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/toplist': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/search': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/song': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/comment': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/personalized': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/static': {
        target: process.env.BACKGROUND_APPLICATION_URL
      },
      '/admin': {
        target: process.env.BACKGROUND_APPLICATION_URL
      }
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('base', resolve('src/base'))
      .set('components', resolve('src/components'))
      .set('pages', resolve('src/pages'))
    config.plugin('html').tap((args) => {
      if (isEnvProduction) {
        if (!args[0].minify) {
          /* 参考 https://github.com/jantimon/html-webpack-plugin#minification */
          args[0].minify = {
            collapseWhitespace: true,
            keepClosingSlash: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            trimCustomFragments: true
          }
        }
        args[0].minify.minifyJS = true
        args[0].minify.minifyCSS = true
      }
      return args
    })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('src/styles/var.less'),
        resolve('src/styles/mixin.less')
      ]
    }
  }
})
