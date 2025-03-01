import DataBase from './database.js';
import express from 'express';
import bodyParser from 'body-parser';
import Uploader from './controllers/claudnary.js';

const app = express()
const Db = new DataBase()

app.use(bodyParser.json())
app.use(express.static('public'))

app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/data',  async(req, res) => {
    const fileContent = await fs.readFile( './data/data.json')
    const data = JSON.parse(fileContent)
    res.status(200).json({data: data})
})

app.get('/data/some', async(req, res) => {
    const response = Db.findDb()
})
app.get('/data/image', (req,res) => {
    // const response = await Db.upload_imgae()
    // console.log(response)

    Db.upload_imgae()
    res.send("we good")
})

app.post('/admin/something', async (req, res) => {
  const data = req.body.data;
  const some = {
    some: "spp",
    ...data
  }
  console.log(some)
//Db.addData(some)
  res.status(200).json({ message: 'User data added!' });
});


app.route('/admin')

app.listen(8080, () => {
    console.log('running on port 8080')
})

