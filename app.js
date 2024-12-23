import express from 'express'

const app = express()

// SERVE STATIC FILES FROM 'PUBLIC'
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: './public'})
})

// LISTEN ON PORT 5000

app.listen(5000, () => {
    console.log('SERVER RUNNING ON PORT 5000')    
})