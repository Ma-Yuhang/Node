const express = require('express')
const path = require('path')
const uploadRouter = express.Router()
const multer = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../public/upload/'))
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


// uploadRouter.post('/',upload.single('img'), (req, res) => {
//   res.send({
//     data: `/upload/${req.file.filename}`
//   })
// })

uploadRouter.post('/',upload.array('img', 3), (req, res) => {
  console.log(req.files);
  const data = req.files.map(item => {
    return `/upload/${item.filename}`
  })
  res.send({
    data
  })
})


module.exports = uploadRouter

