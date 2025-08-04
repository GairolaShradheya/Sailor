import { NextResponse } from "next/server"
import { ObjectId } from "mongodb";
import clientPromise from "@/app/lib/mongoConnect";


const dbName = 'SignUp';

export async function GET() {
  const client = await clientPromise;
  const db = client.db(dbName);
  const collection = db.collection('documents');
  let result;
  try {
    let result1 = await collection.find({}).toArray();
    if (result1 == undefined) {
      result = [{}]
    } else {
      result = result1
    }
  } catch (error) {
    console.error(error)
  }
  return NextResponse.json(result);
}

export async function POST(request) {
  const client = await clientPromise;
  let db = client.db(dbName);
  let collection = db.collection('documents');
  let data = await request.json();
  const findResult = await collection.insertOne(data[0]);
  return NextResponse.json({ message: 'Hello World', result:findResult })
}

export async function PUT(request) {
  const client = await clientPromise;
  let db =  client.db(dbName);
  let collection= db.collection('documents');
  let data = [];
  try {
    data = await request.json();
  } catch (error) {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }
  const id = new ObjectId(data[0]._id);

  try {
    await collection.replaceOne({ _id: id }, data[1]);
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json({ message: 'Hello World' })
}