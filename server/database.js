import 'dotenv/config'
import { connect, Schema, model, connections} from "mongoose";


const url_mongodb = "mongodb+srv://" + process.env.USERNAME_MONGODB + ":" +  process.env.PASSWORD_MONGODB + "@cluster0.qf4ue.mongodb.net/gojo_homes?retryWrites=true&w=majority&appName=Cluster0&"
connect(url_mongodb ||"mongodb://localhost:27017/gojo");

class DataBase{
    constructor(){
        //schemas 
        this.schemaPR = Schema({
            realEstate: {type: String},
            project: {type: String, default: ''},
            price: {type: Number},
            price_type: {type: String },
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
            details: {type: String},
            location: {type: String},
            description: {type: String},
            flag: {type: Boolean, default: false}
        })

        this.schemaRS = Schema({
            name: {type: String, default: 0},
            rating: {type: Number, default: 0},
            project: {
                project_total: Number,
		        project_finnished: Number,
                site: Number
            },
            properties: {type: Number},
            icons: {type: String},
            detail: {type: String},
            description: {type: String},
            image_urls: {default: []},
            sales: {type: String}
        })

        this.schemaCL = Schema({
            first_name: {type: String},
            last_name: {type: String},
            email: { type: String},
            phoneNum: {type: Number},
            
        })

        this.schemaAD = Schema({
            username : {type: String},
            email: {type: String},
            password : {type: String}
        })

        this.modelCL = model("users", this.schemaCL)
        this.modelPR = model("properties", this.schemaPR)
        this.modelRS = model("realEstate", this.schemaRS)
        this.modelAD = model("admins", this.schemaAD)

    }

    async addData(data, schema){
        try{
            if(schema === 'admin'){
                const response = await this.modelAD(data)
                response.save()
                return response
            }
            else if (schema === 'realestate'){
                const response = await this.modelRS(data)
                response.save()
                return response
            }
            else if ( schema === 'properties'){
               const response =  await this.modelPR(data)
                response.save()
                return response
            }
            else{
                return "error";
            }

        } catch(err){
            return err;
        }

    }

    async findDb(filter = {}, schema){
        try {
            if (schema == 'admin'){
                const response = await this.modelAD.findOne({...filter})
                return response
            }
            else if (schema == 'properties'){
                const data = await this.modelPR.find({...filter})
                return data    
            }
            else if (schema == 'realestate') {
                const data = await this.modelRS.find({...filter}).select('name icons')
                return data            
            }
            else{
                return "error"
            }

        } catch (err){
            return err
        }

    }
    async findCollection(){

        try{
            const collections = await connections[0].listCollections();
            const names = [];
            collections.map((k) =>{
                names.push({name: k.name});
            });
            console.log(names);
            return names     
        } catch (err) {
            return err
        }
    };


    async updateDb(){
        const response = await this.modelRS.updateManysave()     
        console.log(response)
    }
    
    
    async deleteDb(){
    
    }
    
}

export default DataBase