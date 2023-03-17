import { MongoClient } from "mongodb";

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable not set");
}

if (!MONGODB_DB) {
  throw new Error("MONGODB_DB environment variable not set");
}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  if (!cachedClient) {
    const client = await MongoClient.connect(MONGODB_URI || "", {});
    cachedClient = client;
  }

  const db = cachedClient.db(MONGODB_DB);
  return { client: cachedClient, db };
}
