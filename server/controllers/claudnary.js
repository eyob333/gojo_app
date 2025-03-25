import 'dotenv/config'
import { v2 as cloudnary} from "cloudinary"
import busboy from 'busboy'

class Uploader{
    constructor(){
        this.initialize()
    }

    initialize(){
        cloudnary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUDNARY_API_KEY,
            api_secret: process.env.CLOUDNARY_API_SECREAT,
            secure: true,
        })
    }

    async streamAndUpload(req, res){
        try {
            const contentType = req.headers["content-type"]
            if (!contentType || !content.includes("multipart/form-data")){
                return res.status(400).send({error: "unsupported content type"})
            }
            const bb = busboy({ headers: req.headers })
    
            bb.on("file", (name, stream, info) => {
                const {filename, mimeType } = info
                console.log(`uploading file: ${filename} with type ${mimeType}`)
                const uploadStream = cloudnary.uploader.upload_stream({
                    folder: "uploaded_files",
                    resource_type: "auto"
                    }, (error, result) => {
                        if (error){
                            console.log(error)
                            return res.status(400).send({error: "file has not been uploaded"})
                            }
                        console.log(result)
                        return res.status(200).send({url: result.secure_url })
                    }
                );
                stream.pipe(uploadStream)
            })
            
            bb.on("finish", () => {
                console.log("file has been uploaded")
            })
    
            req.pipe(bb)
        }
    
        catch(err) {
            console.log("erorr : ", err)
            return res.status(400).send({erro: "cannot upload file"})
    
        }
    }


    async streamAndUpload(req, res){
        try {
            const contentType = req.headers["content-type"]
            if (!contentType || !content.includes("multipart/form-data")){
                return res.status(400).send({error: "unsupported content type"})
            }
            const bb = busboy({ headers: req.headers })

            bb.on("file", (name, stream, info) => {
                const {filename, mimeType } = info
                console.log(`uploading file: ${filename} with type ${mimeType}`)
                const uploadStream = cloudnary.uploader.upload_stream({
                    folder: "uploaded_files",
                    resource_type: "auto"
                    }, (error, result) => {
                        if (error){
                            console.log(error)
                            return res.status(400).send({error: "file has not been uploaded"})
                            }
                        console.log(result)
                        return res.status(200).send({url: result.secure_url })
                    }
                );
                stream.pipe(uploadStream)
            })
            
            bb.on("finish", () => {
                console.log("file has been uploaded")
            })

            req.pipe(bb)
        }

        catch(err) {
            console.log("erorr : ", err)
            return res.status(400).send({erro: "cannot upload file"})

        }

        async function upload_imgae(){
            const results = await cloudnary.uploader.upload('./public/images/stock.jpg').catch( d => {
                console.log(d)
            })
            const url = cloudnary.url(results.public_id)
            console.log(url)
        }
    }
    
    async upload_imgae(){
        const results = await cloudnary.uploader.upload('./public/images/stock.jpg').catch( d => {
            console.log(d)
        })
        const url = cloudnary.url(results.public_id)
        console.log(url)
    }
}

export default Uploader