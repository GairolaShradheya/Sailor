import { NextResponse } from "next/server"
import { MongoClient } from "mongodb";
// import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'SignUp';

client.connect()

export async function GET() {
  const db = client.db(dbName);
  const collection = db.collection('documents');
  let result = await collection.find({}).toArray();
  return NextResponse.json(result);
}

export async function POST(request) {
  const db = client.db(dbName);
  const collection = db.collection('documents');
  let data = await request.json()
  const findResult = await collection.insertOne(data[0]);
  console.log(data);
  return NextResponse.json({ message: 'Hello World' })
}

export async function PUT(request) {
  const db = client.db(dbName);
  const collection = db.collection('documents');
  let data = await request.json()
  const id= new ObjectId(data[0]._id);

  try{
    await collection.updateOne({ _id: id }, { $set: {password:data[0].password} });
    console.log('updated');
  } catch(error){
    confirm.error('errrrrroooorrrrrr');
  }
  return NextResponse.json({ message: 'Hello World' })
}