const express = require('express')
const path = require('path');
//const jokes = require('./controllers/jokes');
//const products = require('./controllers/products')
const sessions = require('./controllers/sessions')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Middleware
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist')))
    .use((req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    })



// Actions
app
    .get('/api/v1/', (req, res) => {
        res.send('Hello World! From Express')
    })
    .use('/api/v1/sessions', sessions)
   // .use('/api/v1/jokes', jokes)

// Catch all
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})


console.log('1: About to start server')

app.listen(port, () => 
  console.log(`2: Server running at http://${hostname}:${port}/`)
);

console.log('3: Asked server to start')