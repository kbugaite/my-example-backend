const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./router')
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

// app.get('/test', (req, res) => {
//     res.send('You are on the testing route')
// })
// app.get('/', (req, res) => {
//     res.send('You are on the base url page/homepage')
// })

app.listen(port, () => {
    console.log(`My app is listening on http://localhost:${port}`)
})