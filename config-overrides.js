/* config-overrides.js */
const {
  override,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra')
const path = require('path')

// 通过相对路径取得绝对路径
function resolve(dir) {
  console.log(path.join(__dirname, dir))
    return path.join(__dirname, dir)
}


module.exports = override(
  addWebpackAlias({
    '@': resolve('src'),
    '@/components': resolve('./src/components'),
    '@/pages': resolve('./src/pages'),
    '@/styles': resolve('./src/styles'),
  }),
  addLessLoader({
    lessOptions: (loaderContext) => {
      console.log(loaderContext)
    },
  }),
)