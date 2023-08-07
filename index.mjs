import express from 'express'

const app = express()
const port = 3000

app.use('/assets', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('./index.html')
})

app.listen(port, () => { console.log(port) })
