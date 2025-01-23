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
  return NextResponse.json({ message: 'Hello World' })
}

export async function PUT(request) {
  const db = client.db(dbName);
  const collection = db.collection('documents');
  let data = await request.json()
  const id= new ObjectId(data[0]._id);

  try{
    await collection.replaceOne({ _id: id }, data[1]);
    console.log('updated');
  } catch(error){
    console.error(error);
  }
  return NextResponse.json({ message: 'Hello World' })
}