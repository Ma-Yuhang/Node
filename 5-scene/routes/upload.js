const express = require('express')
const path = require('path')
const uploadRouter = express.Router()
const multer = require('multer')
const watermark = require('../utils/watermark')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../public/originImg/'))
  },
  filename: function (req, file, cb) {
    const date = Date.now()
    const randomStr = Math.random().toString(36).slice(-6)
    const ext = path.extname(file.originalname)
    const filename = `${date}-${randomStr}${ext}`
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })

const waterPath = path.resolve(__dirname, '../public/water.png')
uploadRouter.post('/', upload.single('img'), async (req, res) => {
  const url = `/upload/${req.file.filename}`
  const originPath = path.resolve(__dirname, '../public/originImg', req.file.filename)
  const newPath = path.resolve(__dirname, '../public/upload', req.file.filename)
  await watermark(waterPath, originPath, newPath)

  res.send({
    data: url
  })
})


// uploadRouter.post('/', upload.array('img', 3), async (req, res) => {
//   const data = req.files.map(item => {
//     //   const url = `/upload/${req.file.filename}`
//     // const originPath = path.resolve(__dirname, '../public/originImg', req.file.filename)
//     // const newPath = path.resolve(__dirname, '../public/upload', req.file.filename)
//     // await watermark(waterPath, originPath, newPath)
//     return `/upload/${item.filename}`
//   })
//   res.send({
//     data
//   })
// })


module.exports = uploadRouter

