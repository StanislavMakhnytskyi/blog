const express = require('express')
const { randomBytes } = require('crypto')

const app = express()
app.use(express.json())

const comments = {}

app.get('/comments', (req, res) => {
  res.send(comments)
})

app.comment('/comments', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  comments[id] = {
    id,
    title,
  }

  res.status(201).send(comments[id])
})

app.listen(4000, () => {
  console.log('Listening on 4000')
})
