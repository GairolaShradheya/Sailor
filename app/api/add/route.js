import { NextResponse } from "next/server"
import { ObjectId } from "mongodb";
import connectDB from "@/app/lib/connectDB";
import document from "@/app/components/schema";


const dbName = 'SignUp';

export async function GET() {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  await connectDB();
  let data = await document.findOne({email}) || []
  return NextResponse.json(data)
}
0
export async function POST(request) {
  await connectDB();
  let data = await request.json();
  const exists = await document.findOne({ email: data[0].email });
  if (exists) {
    return NextResponse.json({ message: "Email already exists", status: 400 });
  }
  let newUser = await document.create(data[0])
  return NextResponse.json({ message: 'Hello World', status: 200 })
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