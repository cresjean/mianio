'use strict';
let express = require('express')
let app = express()
let router = express.Router()
var jsonfile = require('jsonfile')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/articles', (req, res) => {
  jsonfile.readFile('/opt/mianio/api/mock-data/articles.json', (err, obj) => {
      res.json(obj)
  })


})
app.use('/api', router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
