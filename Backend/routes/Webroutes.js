import express from "express"
import uploads from "../helpers/Cloudinary.js"
import { AddController, DeleteController, GetController } from "../otherController/otherController.js"



export const ListingRoutes = express.Router()

ListingRoutes.get("/" , GetController)

ListingRoutes.post("/add", uploads.single('CNICImage') , AddController)

ListingRoutes.delete("/delete/:id", DeleteController)
