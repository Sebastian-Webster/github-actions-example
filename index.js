const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>GitHub Actions Example</h1>')
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})