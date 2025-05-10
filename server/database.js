import 'dotenv/config'
import { connect, Schema, model, connections} from "mongoose";


const url_mongodb = "mongodb+srv://" + process.env.USERNAME_MONGODB + ":" +  process.env.PASSWORD_MONGODB + "@cluster0.qf4ue.mongodb.net/gojo_homes?retryWrites=true&w=majority&appName=Cluster0&"
try {
    await connect(url_mongodb ||"mongodb://localhost:27017/gojo");
    console.log("connect?");
}
catch (err) {
    console.log(err)
}

class DataBase{
    constructor(){
        //schemas 
        this.schemaPR = Schema({
            realEstate: {type: String, default: 'AYAT'},
            project: {type: String, default: ''},
            price: {type: Number},
            price_type: {type: String },
            image_urls: {
                main: {type: String},
                all: []
            },
            features: {
                area: {type: Number,  default: 0},
                bed: {type: Number,  default: 0},
                bathroom: {type: Number, default: 0},
                pool: {type: Boolean, default: false},
                height: {type: Number, default: 0},
                type: {type: String,  default: ""},
                special: {type: String, default: ""},
                reinvated_date: {type: Date, default: Date()},
                built_date: {type: Date, default: null},
                class: {type: String, default: null},
                location_img: {type: String},
                absolute_location: {type: String}
            },
            details: {type: String},
            location: {type: String},
            description: {type: String},
            status: {type: String},
            special_tag: {type: String},
            special_search_tag: {type: String},
            payment_options: {type: String},
            posted_date: {type: Date, default: Date()},
            expired_date: {type: Date},
            sold_out: {type: String, default: false},
            sales_person_name: {type: String},
            sales_person_contact: {type: String},
            flag: {
                type: {type: String, default: "delete"},
                value:{type: Boolean, default: false}
            }
        })

        this.schemaRS = Schema({
            name: {type: String, default: 0},
            rating: {type: Number, default: 0},
            project: {
                project_total: Number,
		        project_finnished: Number,
                site: Number
            },
            properties: {type: Number, default: null},
            icons: {type: String},
            description: {type: String},
            image_urls: {default: []},
            sales_name: {type:String},
            sales_contact: {type: String},
            website: {type: String},
            head_office: {type: String, default: null}
        })

        this.schemaCL = Schema({
            first_name: {type: String},
            last_name: {type: String},
            email: { type: String},
            phone_num: {type: Number},
            property_id: {type: String},
            submition_date: {type: Date, default: Date()},
            willing_to_Share: {type: Boolean, default: null},
            location: {type: String}
        })

        this.schemaAD = Schema({
            username : {type: String},
            email: {type: String},
            password : {type: String},
            logged_in: {type: Boolean, default: null},
            logged_in_time: {type: Date, default: null}
        })

        this.schemaMS = Schema({
            announcement: {type: String},
            posted_date: {type: Date, default: Date()},
            expired_date: {type: Date}
        })

        this.shcemaCT = Schema({
            name: {type: String},
            email: {type: String},
            
        })

        this.modelCL = model("users", this.schemaCL)
        this.modelPR = model("properties", this.schemaPR)
        this.modelRS = model("realEstate", this.schemaRS)
        this.modelAD = model("admins", this.schemaAD)
        this.modelMS = model("announcement", this.schemaMS)

    }

    async addData(data, schema){
        try{
            if(schema === 'admins'){
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

    async findDb(filter = {}, schema, selection = undefined, condition = undefined, quantity=2){
        try {
            if (schema == 'admins'){
                if (quantity < 2){
                    const response = await this.modelAD.findOne({...filter})
                    return response
                } else{
                    const response = await this.modelAD.find({...filter})
                    return response
                }
            }
            else if (schema == 'properties'){
                if(selection || condition){
                    const data = await this.modelPR.find({...filter}).select(selection).where('price').lt(condition)
                    console.log("c")
                    return data                    
                }else{
                    if (quantity > 1 || quantity === undefined){
                        const data = await this.modelPR.find({...filter})
                        return data                        
                    } else if(quantity < 2){
                        const data = await this.modelPR.findOne({...filter}).select('-flag')
                        console.log("whasupaass")
                        return data 
                    }
                }
            }
            else if (schema == 'realestates') {
                if (quantity > 1){
                    const data = await this.modelRS.find({...filter}).select(selection)
                    return data  
                } else{
                    const data = await this.modelRS.findOne({...filter}).select(selection)
                    return data  
                }
                          
            }
            else if (schema == 'users'){
                const data = await this.modelCL.find({...filter})
                return data    
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
                if (k.name !== "admins" || k.name !== "announcements"){
                   names.push({name: k.name}); 
                }
            });
            names.splice(1, 1);
            names.splice(0, 1);
            console.log("foo2", names)
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