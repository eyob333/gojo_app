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

const db = new DataBase();
const uploader = new ImageUploader();

app.get('/', (req, res) => {
  try{
    res.send("what are u doing here");
  } catch (e) {
     res.send("u f u p");
  }
 
});

app.post('/admin', async(req, res) => {
  try{
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
  } catch (err){
      console.log(err)
      res.send(err)
  }
});

app.get('/admin/collection', async(req, res) => {
  try{
    const data = await db.findCollection();
    res.send(data);    
  } catch (err){
    console.log("another foo",err)
    res.send("an error occured!!");
  }
});


app.post('/admin/database', async(req, res) => {
  try{
    console.log('something')
    const schema = req.body.schema
    const filter = req.body.filter
    const data = await db.findDb(filter, schema)
    console.log(data)
    res.send(data);
  } catch(err) {
    console.log("foo",err)
    res.send(err)
  }
});

app.post("/admin/database/upload", async (req, res) => {
  console.log('server is down')
  try{
    const url = await uploader.upload_imgs( req, res) 
    const reqData = req.body.data
    const schema = req.body.schema
    let data = reqData

    if (schema === 'realestate'){
      const newUrl = url;
      const nanUrl = newUrl.splice(1);
      data = {
        icons: nanUrl,
        image_url: url[0],
        ...reqData
      }
    }
    else if(schema === 'properties'){
      const newUrl = url;
      const nanUrl = newUrl.splice(1);
      const lasturl = nanUrl.pop();
      data = {
        image_urls: {
          main: url[0],
          all: nanUrl
        },
        location_img: lasturl,
        ...reqData
      }

    }
    const database = await db.addData(data, schema)
    console.log(database)
    res.send("okay")
  } catch (err){
    console.log("some foo", err);
    res.send(err).statusCode(404)
  }
  
});

app.post('/database/properties', async(req, res) =>{
  try{
    const filter = req.body.filter
    const schema = req.body.schema
    const selection = req.body.selection
    const condition  = req.body.condition
    const quantity = req.body.quantity

    const response = await db.findDb(filter, schema, selection, condition, quantity)
    console.log(response)
    res.send(response)    
  } catch (err){
    console.log("foo foo foo", err)
    res.send(err).status(300).statusCode(300)
  }
});

app.post('/database/realestate', async(req, res) => {
  try{
    const selection = req.body.selection
    const filter = req.body.filter
    const quantity = req.body.quantity
    const resposne = await db.findDb(filter, "realestates", selection, undefined, quantity)
    console.log(resposne)
    res.send(resposne)
  } catch (err){
    res.send(err);
  }
});

// app.get('/realstate/properties', async(req, res) => {
//   try{
//     const filter = req.body.filter
//     const schema = req.body.schema
//     const selection = req.body.selection
//     const condition  = req.body.condition

//     const response = await db.findDb(filter, schema, selection, condition)
//     res.send(response)    
//   } catch (err){
//     res.send(err)
//   }
// });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);