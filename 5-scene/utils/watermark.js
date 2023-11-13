const jimp = require('jimp')

module.exports = async function watermark(waterFile, originFile, newFile) {
  const proportion = 10 // 比例
  const marginProportion = 0.05

  const [water, origin] = await Promise.all([jimp.read(waterFile), jimp.read(originFile)])

  // 对水印图片进行缩放
  const curProportion = origin.bitmap.width / water.bitmap.width
  water.scale(curProportion / proportion)

  // 将图片放到指定位置
  const right = origin.bitmap.width * marginProportion
  const bottom = origin.bitmap.height * marginProportion
  const x = origin.bitmap.width - water.bitmap.width - right
  const y = origin.bitmap.height - water.bitmap.height - bottom

  // 写入水印
  origin.composite(water, x, y, {
    mode: jimp.BLEND_SOURCE_OVER,
    opacitySource: 0.3
  })

  await origin.write(newFile)
  return newFile
}