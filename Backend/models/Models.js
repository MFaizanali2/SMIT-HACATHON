import mongoose from "mongoose";


const ListingSchema = new mongoose.Schema({
    Username :{type:String},
    FatherName :{type:String},
    CNIC :{type:String},
    Address:{type:String},
    CNICImage :{type:String},
    Purpose :{type:String},
    BankAccount :{type:String},
    AccountNumber :{type:String},
    GuarantedName1:{type:String},
    GuarantedAddress1:{type:String},
    GuarantedCnic1:{type:String},
    GuarantedName2:{type:String},
    GuarantedAddress2:{type:String},
    GuarantedAddress2:{type:String},

},{timestamps:true})



const Listing = mongoose.model("listing" ,ListingSchema)

export default Listing;