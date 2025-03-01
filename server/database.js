import 'dotenv/config'
import { connect, Schema, model} from "mongoose";
import { v2 as cloudnary} from "cloudinary"


const url_mongodb = "mongodb+srv://" + process.env.USERNAME_MONGODB + ":" +  process.env.PASSWORD_MONGODB + "@cluster0.qf4ue.mongodb.net/gojo_homes?retryWrites=true&w=majority&appName=Cluster0&"
connect(url_mongodb ||"mongodb://localhost:27017/gojo");
// connect("mongodb://localhost:27017/gojo");

class DataBase{
    constructor(){

        //schemas 
        this.schemaPR = Schema({
            realEstate: {type: String},
            project: {type: String},
            price: {type: Number},
            image_urls: {
                main: {type: String},
                all: []
            },
            features: {
                area: {type: Number,  default: 0},
                pool: {type: Boolean, default: false},
                height: {type: Number, default: 0},
                type: {type: String,  default: ""},
                special: {type: String, default: ""},
                date: {type: Date}
            },

            location: {type: String},
            description: {type: String},
        })

        this.schemaRS = Schema({
            name: {type: String},
            rating: {type: Number},
            project: {
                name: {type: String},
                site: {type: String}
            },
            properties: {type: Number},
            image_urls: []
        })

        this.schemaCL = Schema({
            first_name: {type: String},
            last_name: {type: String},
            email: { type: String},
            phoneNum: {type: Number},
            location: {},
            
        })

        this.modelCL = model("users", this.schemaCL)
        this.modelRS = model("properties", this.schemaPR)
        this.modelPR = model("realEstate", this.schemaRS)

    }

    addData(data){
        const response = this.modelPR(data)
        response.save()

        console.log(response)
    }

    async upload_imgae(){
        const results = await cloudnary.uploader.upload('./public/images/stock.jpg').catch( d => {
            console.log(d)
        })
        const url = cloudnary.url(results.public_id)
        console.log(url)
    }
 
    async findDb({filter, model}){
        const data = await this.modelRS.find()
        return data
    }
    
    async updateDb(){
        const response = await this.modelRS.updateManysave()     
        console.log(response)
    }
    
    
    async deleteDb(){
    
    }
    
}


export default DataBase