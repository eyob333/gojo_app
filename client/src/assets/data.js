import Root from "../pages/Root"

const data = [ {
        type:"text", 
        placeholder:"Ayat",
        id:"realstate",
        name:"realstate",
     }, {
        type:"number", 
        id:"properties",
        name:"properties",  
        placeholder:"15000"
     }, {
        type:"number",
        id:"rating", 
        name:"rating",
        placeholder:"7.8"
     }, {
        type:"number",
        id:"project",
        name:"project",
        placeholder:"15"
     }, {
        type:"number",
        id:"finished_project",
        name:"finished_project",
        placeholder:"6",
        img: 'https://picsum.photos/200'
    }, {
        type:"number" ,
        placeholder:"10" ,
        id:"site",
        name:"site"
    }, {
        type:"text", 
        placeholder:"someone@testmail.com, 0943942493, solomon arega",
        id:"sales",
        name:"sales"
    }, {
        type:"text",
        id:"details",
        name:"details",
        placeholder:"input details here",
        root:"textarea"
    }, {
        type:"text",
        id:"description",
        name:"description",
        placeholder:"add some description here",
        root:"textarea"
    },
]

const propertiesData = [ {
    type:"text", 
    placeholder:"Ayat",
    id:"realstate",
    name:"realstate",
 }, {
    type:"number", 
    id:"price",
    name:"price",  
    placeholder:"15000"
 }, {
    type:"text",
    id:"price_type", 
    name:"price_type",
    placeholder:"/sq (m)"
 }, {
    type:"text",
    id:"project",
    name:"project",
    placeholder:"hevens gate"
 }, {
    type:"text",
    id:"location",
    name:"location",
    placeholder:"6kilo new aau",

}, {
    type:"number" ,
    placeholder:"enter the totoal area" ,
    id:"area",
    name:"area"
}, {
    type:"number", 
    placeholder:"totoal roof height",
    id:"height",
    name:"height"
}, {
    type:"text",
    id:"type",
    name:"type",
    placeholder:"Appartment, condo",
    
}, {
    type:"checkbox",
    id:"pool",
    name:"pool",
    placeholder:"",
}, {
    type:"text",
    id:"special",
    name:"special",
    placeholder:"enter special features",
    root:"textarea"
},  {
    type:"text",
    id:"details",
    name:"details",
    placeholder:"input details here",
    root:"textarea"
}, {
    type:"text",
    id:"description",
    name:"description",
    placeholder:"add some description here",
    root:"textarea"
},
]

const uploadConfig = [
    {
        type: "number",
        name: "realestate",
        id: "realestate",
        placeholder: 'Ayat',
    },
    {
        type: "text",
        name: "price",
        id: "price",
        placeholder: '85934',
    },
    {
        type: "text",
        name: "price_type",
        id: "price_type",
        placeholder: '/sq(M) or full',
    },
    {
        type: "checkbox",
        name: "pool",
        id: "pool",
    },
    
]
const realestate = [{
    name: "AYAT",
    project: 5,
    properties: 34,
    site: 7,
    rating: 4.5,
    website: "sdks",
    email: "soem",
    icons: 'src/assets/ayat_logo.daf534f7.webp'
    
},{
    name: "DMC",
    project: 5,
    properties: 34,
    site: 7,
    rating: 4.5,
    website: "",
    email: "soem",
    icons: '/src/assets/dmc-img.webp'
    
},{
    name: "OVID",
    project: 5,
    properties: 34,
    site: 7,
    rating: 4.5,
    website: "sdks",
    email: "soem",
    icons: '/src/assets/ovid-realestate-white.webp'
    
},{
    name: "NOAH",
    project: 5,
    properties: 34,
    site: 7,
    rating: 4.5,
    website: "sdks",
    email: "soem",
    icons: './assets/NOAH-Logo.webp'
    
},]

const deals = [{
    name: "vila", 
    price: 58,
    type: "/sq(m)", 
    description: "2 bed rooms", 
    details: "sdksdlksdklfsd, lsd, sd", 
    img: 'https://picsum.photos/200'
    },{
        name: "appartment", 
        price: 45,
        type: "/sq(m)", 
        description: "2 bed rooms", 
        details: "sdksdlksdklfsd, lsd, sd",
        img: 'https://picsum.photos/200'
    },
    {
        name: "condo", 
        price: 78,
        type: "/sq(m)", 
        details: "jskdsl, sldkfsd", 
        description: "2 bed rooms",
        img: 'https://picsum.photos/200'
    },{
        name: "appartment", 
        price: 45,
        type: "/sq(m)", 
        description: "2 bed rooms", 
        details: "sdksdlksdklfsd, lsd, sd",
        img: 'https://picsum.photos/200'
    },
    {
        name: "condo", 
        price: 78,
        type: "/sq(m)", 
        details: "jskdsl, sldkfsd", 
        description: "2 bed rooms",
        img: 'https://picsum.photos/200'
    }
]


export {data, deals, realestate, propertiesData}