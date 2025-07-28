import { NextResponse } from "next/server"
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

const dbName = 'SignUp';

client.connect()

export async function POST(request) {
  const db = client.db(dbName);
  const collection = db.collection('documents');
  let data = await request.json()
  try {
    let result = await collection.findOne(data);
    if (result==undefined){
      console.log("No related data.");
      return NextResponse.json({ message: 'Data not found', success:false });
    }else{
      console.log("I got the dataaaaaa");
      return NextResponse.json({...result,success:true});
    }
  }catch(error){
    console.error("Failed to find data :",error)
    return NextResponse.json({ message: 'Failed to find data' });
  }
  
}