__path = process.cwd()
const express = require('express');
const Spotify = require('spotifydl-core').default

const credentials = {
    clientId: 'd37a3ad1c3b9475a85cd42d836441953',
    clientSecret: 'fa6c23efc96547f4b77f2214adc0c61c'
}

const spotify = new Spotify(credentials);



let express = require('express');
let router = express.Router();	   
router.get('/', (req, res) => {
const url = req.query.url   
let song = await spotify.downloadTrack(url ,'spo.mp3');
const jsond = { "status" : "ok"}	     
res.sendfile(__path + '/spo.mp3') })

let cors = require('cors')
let secure = require('ssl-express-www')
let PORT = process.env.PORT || 8080 || 5000 || 3000
let app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("assets"))

app.use('/',  router)
app.listen(PORT, () => {
    console.log("Server running on port " + PORT) 
})

