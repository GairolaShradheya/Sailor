import { NextResponse } from "next/server"
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'SignUp';

client.connect()

export async function GET(request) {
  const db = client.db(dbName);
  const collection = db.collection('documents');
  const id= new ObjectId(data[0]);
  let result = await collection.find({_id:id}).toArray();
  return NextResponse.json(result);
}

export async function PUT(request) {
    const db = client.db(dbName);
    const collection = db.collection('documents');
    let data = await request.json()
    const id= new ObjectId(data[1]);
    const data_id = data[0].id
    const result = await collection.find({_id:id}).toArray()
    // if(result[0].cart.includes(data[0])){
    //   console.log('already exist');
    // }  
    // else{
    try{
      await collection.updateOne({ _id: id }, {$push:{cart:data[0]}});
      console.log('updated');
    } catch(error){
      console.error(error);
    }
  // }
    return NextResponse.json({ message: 'Hello World' })
  }