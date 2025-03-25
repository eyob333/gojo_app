import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import ImageUploader from "./utils/imageUploader.js";
import DataBase from "./database.js";


dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "50mb" })); // Increased limit to handle large Base64 images
app.use(cors());

const db = new DataBase()
const uploader = new ImageUploader()


app.get('/admin/database', async(req, res) => {
  try{
    const data = await db.findCollection();
    res.send(data);    
  } catch (err){
    res.send(err);
  }
})

app.post("/admin/database/upload", async (req, res) => {

  try{
    const url = await uploader.upload_imgs( req, res)
    const reqData = req.body.data
    const schema = req.body.schema

    const data = reqData

    if (schema === 'realestate'){
      data = {
        icons: url[0],
        ...reqData
      }
    }
    else if ( schema === 'properties'){
      data = {
        image_urls: {
          main: url[0],
          all: url
        },
        ...reqData
      }
    }

    const database = await db.addData(data, schema)
    console.log(database)
    res.send("okay").status(200)
  } catch (err){
    res.send(err)
  }
  
});

app.post('/admin', async(req, res) => {
  const filter = req.body.filter
  const schema = req.body.schema
  const data = req.body.data
  const resData = await db.findDb(filter, schema)

  if (resData.password === data.password){
    res.send("Authorized")    
  }
  else {
    res.send("un authorized")
  }

})

app.get('/realestate', async(req, res) => {
  const resposne = await db.findDb({}, "realestate", "id name icons" )
  console.log(resposne)
  res.send(resposne)
})


app.get('/realstate/properties', async(req, res) => {
  const filter = req.body.filter
  const schema = req.body.schema

  const response = await db.findDb(filter, schema)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

