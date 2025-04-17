import { useState } from "react";
import axios from "axios";
import "./Upload.css"
import Input from "../../ui/Input"
import { propertiesData  as inputdata, realestate } from "../../../assets/data";

const UploadProperties = (...props) => {
  const [files, setFiles] = useState([]);
  const [data, setData] =useState({})
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);


  function handeleDataChange(event){
    const { name, value } = event.target

    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(data)
  }

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    console.log(event.target)
    setFiles(selectedFiles);
    
    const previewUrls = selectedFiles.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
      });
    });
    
    Promise.all(previewUrls).then(setPreviews);
  };

  const uploadImages = async (event) => {
    console.log(event.target)
    if (files.length === 0) return alert("Please select at least one file");
    
    setLoading(true);
    try {
      const reqFormat = {
        realestate: data.realstate,
        price: Number(data.price),
        price_type: data.price_type,
        project: data.project,
        features: {
          area: Number(data.area),
          pool: Boolean(data.pool),
          height: Number(data.height),
          type: data.type,
          special: data.special,
        },
        location: data.location,
        detail: data.details,
        description: data.description
      }
      const response = await axios.post("http://localhost:1424/admin/database/upload", { images: previews, data: reqFormat, schema: "properties"});
      console.log("Upload successful: ", response.data);
      alert("Files uploaded successfully!");
    } catch (error) {
      console.error("Upload error: ", error);
      alert("Failed to upload files");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="upload">
      <h3>{props.dName}</h3>
      <div className="input-field">
          {inputdata.map( d => <Input key={d.name} type={d.type} placeholder={d.placeholder} id={d.id} name={d.name} root={d.root} onChange={handeleDataChange} />
          )}         

        <Input type="file" accept="image/*" multiple onChange={handleFileChange} />

        {previews.map((src, index) => (
          <img key={index} src={src} alt="Preview" style={{ width: "100px", margin: "5px" }} />
        ))}
      </div>
      <button onClick={uploadImages} disabled={loading} >
        <p>{loading ? "Uploading..." : "Upload"}</p>
      </button>
    </div>
  );
};

export default UploadProperties;
