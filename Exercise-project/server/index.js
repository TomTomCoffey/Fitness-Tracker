const express = require('express')
const path = require('path')
///const products = require('./controllers/products')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Middleware
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist')))


// Actions
app
    .get('/', (req, res) => {
        res.send('Hello World! From Express')
    })
   /// .use('/products', products)



app.listen(port, () => 
  console.log(`Server running at http://${hostname}:${port}/`)
);