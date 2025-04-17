import 'dotenv/config'
import { v2 as cloudinary } from 'cloudinary'

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
}

class ImageUploader{
  constructor(){
    this.init()
  }

  init(){
    // Cloudinary Config
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUDNARY_API_KEY,
      api_secret: process.env.CLOUDNARY_API_SECREAT,
    });
  }

  async upload_imgs(req, res){
    try {
        const { images } = req.body;
        if (!images || !Array.isArray(images) || images.length === 0) {
          return res.status(400).json({ message: "No images provided" });
        }

        const uploadPromises = images.map(image => 
          cloudinary.uploader.upload(image, opts)
        );

        const results = await Promise.all(uploadPromises);
        const urls = results.map(result => result.secure_url);
        // console.log("foo2", results)
  
        return urls;
      } catch (error) {
        
        // console.error("Upload Error:", error);
        // res.status(500).json({ message: "Upload failed", error: error.message });
        return error
      }    
    }
  
  async upload_img(req, res){
    try {
      const { image } = req.body;
      if (!image){
        return res.status(400).json({ message: "No image provided" });
      }
        
      const result = await cloudinary.uploader.upload(image, opts);
      this.url = result.secure_url;
      console.log(result)
    } catch (error) {
      console.error("Upload Error:", error);
      return res.status(500).json({ message: "Upload failed", error: error.message });
    }

  }
}

export default ImageUploader