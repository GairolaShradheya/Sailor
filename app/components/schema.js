import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
    {
        id:{type:Number},
        title:{type:String},
        price:{type:mongoose.Decimal128},
        description:{type:String},
        category:{type:String},
        image:{type:String},
        rating:{
            rate:{type:mongoose.Decimal128},
            count:{type:Number}
        }
    }
)

const documentSchema = new mongoose.Schema(
  {
    name: { type: String }, // Unique field
    email: { type: String, required: true, unique: true },    // Another unique field
    password: { type: String, required:true },
    address: {type:String, required:true},
    number:{type:Number},
    image:{type:String},
    cart:[CartSchema]
  }
);

const document = mongoose.models.document || mongoose.model("document", documentSchema);

export default document;
