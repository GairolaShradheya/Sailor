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
  // In development, use a global variable so it doesn't reconnect every time
  if (!global) {
    client = new MongoClient(uri);
    global= client.connect();
  }
  clientPromise = global;
} else {
  // In production (like Vercel), don't use global
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
