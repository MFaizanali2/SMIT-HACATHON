import { v2 as cloudinary } from 'cloudinary';
import multer from "multer" 
import dotenv from "dotenv" 
import  { CloudinaryStorage }  from  'multer-storage-cloudinary';




dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});


const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
         folder : "uploads",
         allowedFormats: ["jpg", "png", "gif", "jpeg","pdf"]
    }
    
  });

const uploads = multer({storage})

export default uploads;