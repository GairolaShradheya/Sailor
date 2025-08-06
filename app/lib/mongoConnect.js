// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URL;

let client;
let clientPromise;

if (!process.env.MONGODB_URL) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let global

if (process.env.NODE_ENV === "development") {
  if (!global) {
    client = new MongoClient(uri);
    global= client.connect();
    console.log('connected');
  }
  clientPromise = global;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
  console.log('connected');
}

export default clientPromise;
