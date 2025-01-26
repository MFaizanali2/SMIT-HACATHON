import express from "express"
import { ListingRoutes } from "../routes/Webroutes.js"


export const AllRoutes = express()


AllRoutes.use("/User",ListingRoutes)