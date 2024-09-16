const express = require('express')
const app = express()
const port = 3000


app.get('/alive', (req, res) => {
    return "Alive"
})

app.get('/page',(req,res)=>{
    return "<html> <h1>hihihi</h1> </html>"
})

app.get('/', (req, res) => {
    const file = `${__dirname}/TVAdsAgentV6.apk`;
    res.download(file); // Set disposition and send it.
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
