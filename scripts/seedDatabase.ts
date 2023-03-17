import { MongoClient, ObjectId } from 'mongodb';
import { config } from 'dotenv';
config({ path: './.env.local' });


const MONGODB_URI = process.env.MONGODB_URI ?? "";
const MONGODB_DB = process.env.MONGODB_DB ?? "";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable not set");
}

if (!MONGODB_DB) {
  throw new Error("MONGODB_DB environment variable not set");
}

const people = [
  {

    name: "Person 1",
    photoUrl: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
  },
  {
    name: "Person 2",
    photoUrl: "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
  },
  // Add more people here
];

async function seedDatabase() {
  const client = await MongoClient.connect(MONGODB_URI, {});

  const db = client.db(MONGODB_DB);

  console.log("Connected to the database");

  await db.collection("people").deleteMany({});
  console.log('Cleared "people" collection');

  await db.collection("people").insertMany(people);
  console.log('Inserted initial data into "people" collection');

  await client.close();
}

seedDatabase()
  .then(() => {
    console.log("Database seeding complete");
  })
  .catch((error) => {
    console.error("Error seeding the database:", error);
  });
