const express = require('express')
const path = require('path')
const downloadRouter = express.Router()



downloadRouter.get('/:filename',(req, res) => {
  const absPath = path.resolve(__dirname, '../resources', req.params.filename)
  res.download(absPath, req.params.filename)
})


module.exports = downloadRouter

