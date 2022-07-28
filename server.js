// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// DEPENDENCIES
const methodOverride = require('method-override')

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
 // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  
// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

