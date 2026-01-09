require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req, res)=>{
    res.send('vaishnvidotcom')
})
app.get('/Linkedin',(req, res)=>{
    res.send('<h1> Please login at linked in </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>hey! you are on youtube</h2>')
})

app.listen(process.nextTick.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

/*when ever we make change in our code , restart the server with (ctrl+c / ctrl+z) 
    otherwise browser will not reflect the changes made in code
*/