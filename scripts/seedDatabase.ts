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
    name: "Катерина Нанкова",
    photoUrl: "https://i.imgur.com/PoN5jDF.png",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Калина Трифонова",
    photoUrl: "https://i.imgur.com/7pncRdu.png",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Мария Лангарова",
    photoUrl: "https://i.imgur.com/wREo6Yi.png",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Мария-Магдалена",
    photoUrl: "https://i.imgur.com/8mcI76A.png",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Моника Кръстева",
    photoUrl: "https://i.imgur.com/EUuNY1C.png",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Ралица Попова",
    photoUrl: "https://i.imgur.com/2VNSZy9.png",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Рая Демирева",
    photoUrl: "https://i.imgur.com/c1b0lzn.png",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Александра Недева",
    photoUrl: "https://i.imgur.com/aTiu7W1.png",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Симона Айвазова",
    photoUrl: "https://i.imgur.com/tob1NZT.jpeg",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "София Бояджиева",
    photoUrl: "https://i.imgur.com/0NADG95.jpeg",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Валентина Илиева",
    photoUrl: "https://i.imgur.com/X6DjF8I.png",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Вероника Найденова",
    photoUrl: "https://i.imgur.com/xJnEAXg.png",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Виолета Тонева",
    photoUrl: "https://i.imgur.com/gk5h0FB.png",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Яна Атанасова",
    photoUrl: "https://i.imgur.com/ZvgFaMn.jpeg",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
  },
  {
    name: "Яна Каишева",
    photoUrl: "https://i.imgur.com/Suixtnj.jpeg",
    wins: {
      seksapil: 0,
      cuteness: 0,
      wifematerial: 0,
    },
    matchups: {},
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
