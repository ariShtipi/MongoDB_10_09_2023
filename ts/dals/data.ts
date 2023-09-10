import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");

async function main() {
  await client.connect();
  const db = client.db("project");
  const collection = db.collection("prodacts");
  return collection;
}

export default main;
