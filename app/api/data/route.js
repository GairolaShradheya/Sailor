import { NextResponse } from "next/server"
import clientPromise from "@/app/lib/mongoConnect";

const dbName = 'SignUp';

export async function POST(request) {
  const client = await clientPromise;
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