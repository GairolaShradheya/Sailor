import { NextResponse } from "next/server"
import { ObjectId } from "mongodb";
import connectDB from "@/app/lib/connectDB";
import document from "@/app/components/schema";

let isConnected = false;


const dbName = 'SignUp';

export async function GET() {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  await connectDB();
  let data = await document.findOne({ email }) || []
  return NextResponse.json(data)
}

export async function POST(request) {
  let [data] = await request.json();

  // Connect in the background
  connectDB()
    .then(() => {
      return document.updateOne(
        { email: data.email },
        { $setOnInsert: data },
        { upsert: true }
      );
    })
    .catch(err => console.error("DB insert error:", err));

  // Respond immediately
  return NextResponse.json({ message: "We got your request, processing...", status: 202 });
}


export async function PUT(request) {
  await connectDB();
  let data = await request.json();
  const id = new ObjectId(data[0]._id);
  try {
    await collection.replaceOne({ _id: id }, data[1]);
    return NextResponse.json({ message: 'Hello World', status: 200 })
  } catch (error) {
    return NextResponse.json({ message: error, status: 400 })
  }
}