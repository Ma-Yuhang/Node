const express = require('express')

const router = express.Router()

router.get('/',(req, res) => {
  res.redirect('/teachers/list')
})

router.get('/list',(req, res) => {
  res.send('教师列表')
})

module.exports = router