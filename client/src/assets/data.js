
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
        placeholder:"solomon arega",
        id:"sales_name",
        name:"sales_name"
    }, {
        type:"text", 
        placeholder:"someone@testmail.com 0943942493",
        id:"sales_contact",
        name:"sales_contact"
    },{
        type:"text", 
        placeholder:"https:://google.com",
        id:"website",
        name:"website"
    },
    {
        type:"text", 
        placeholder:"piassa, near adwa",
        id:"head_office",
        name:"head_office"
    },{
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
    id:"realEstate",
    name:"realEstate",
 }, {
    type:"number", 
    id:"price",
    name:"price",  
    placeholder:"15000"
 }, {
    Element: "select",
    type:"text",
    id:"price_type", 
    name:"price_type",
    selectioinOptions: [
        {option: "Fixed"},
        {option: "sqm"}
    ],
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
    type:"number" ,
    placeholder:"total number of beds" ,
    id:"bed",
    name:"bed"
}, {
    type:"number" ,
    placeholder:"total number of bathrooms" ,
    id:"bathroom",
    name:"bathroom"
},{
    type:"number", 
    placeholder:"totoal roof height",
    id:"height",
    name:"height"
}, {
    Element: "select",
    type:"text",
    id:"type",
    name:"type",
    selectioinOptions: [
        { option: "Condo"},
        { option: "Apartment"},
        { option: "Villa"},
        {option: "Single-family_home"},
        {option: "Luxury-Home"}
    ],
    
}, {
    type:"checkbox",
    id:"pool",
    name:"pool",
    placeholder:"",
}, {
    type:"date",
    id:"reinvated_date",
    name:"reinvated_date",
    placeholder:"",
},{
    type:"date",
    id:"expired_date",
    name:"expired_date",
    placeholder:" the date this property to be sold out",
},{
    type:"text",
    id:"class",
    name:"class",
    placeholder:"A, B or C",
},
{
    type:"text",
    id:"special_search_tag",
    name:"special_search_tag",
    placeholder:"best sellers",
},
{
    type:"text",
    id:"special_tag",
    name:"special_tag",
    placeholder:"top realestate",
},{
    type:"text",
    id:"absolute_location",
    name:"absolute_location",
    placeholder:"X and Y Coordinate separated by space",
},{
    type:"text",
    id:"sales_person_name",
    name:"sales_person_name",
    placeholder:"Sara desalegn",
},
{
    type:"text",
    id:"sales_person_contact",
    name:"sales_person_contact",
    placeholder:"name and email separated by space",
},
{
    type:"text",
    id:"special",
    name:"special",
    placeholder:"enter special features",
    root:"textarea"
},  {
    type:"text",
    id:"description",
    name:"description",
    placeholder:"add some description here",
    root:"textarea"
},
]




export {data, propertiesData}