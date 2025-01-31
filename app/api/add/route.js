import { NextResponse } from "next/server"
import { MongoClient } from "mongodb";
// import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const url = process.env.MONGODB_URL;
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
  let data = [];
  try {
    data = await request.json();
  } catch (error) {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  if (!Array.isArray(data) || data.length === 0) {
    return NextResponse.json({ message: 'Invalid data format' }, { status: 400 });
  }
  const findResult = await collection.insertOne(data[0]);
  return NextResponse.json({ message: 'Hello World' })
}

export async function PUT(request) {
  const db = client.db(dbName);
  const collection = db.collection('documents');
  let data = [];
  try {
    data = await request.json();
  } catch (error) {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  if (!Array.isArray(data) || data.length === 0) {
    return NextResponse.json({ message: 'Invalid data format' }, { status: 400 });
  }
  const id= new ObjectId(data[0]._id);

  try{
    await collection.replaceOne({ _id: id }, data[1]);
  } catch(error){
    console.error(error);
  }
  return NextResponse.json({ message: 'Hello World' })
}