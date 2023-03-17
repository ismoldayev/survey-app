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
    name: "Иван Иванов",
    photoUrl: "https://i.imgur.com/uM0bzV0.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Камен Монев",
    photoUrl: "https://i.imgur.com/FdhFOh8.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Мартин Добрев",
    photoUrl: "https://i.imgur.com/gsnUYPI.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Месру Гемеджи",
    photoUrl: "https://i.imgur.com/YuD2tIi.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Момчил Марков",
    photoUrl: "https://i.imgur.com/xFUttrt.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Никола Николов",
    photoUrl: "https://i.imgur.com/ULj62ko.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Петър Добрев",
    photoUrl: "https://i.imgur.com/XvXEuz1.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Симеон Обретенов",
    photoUrl: "https://i.imgur.com/Nrk7dIA.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Теодор Попов",
    photoUrl: "https://i.imgur.com/HGkTSUO.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Денис Каим",
    photoUrl: "https://i.imgur.com/EsDJzHE.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Дамян Славов",
    photoUrl: "https://i.imgur.com/J7GcOjX.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Георги Райчев",
    photoUrl: "https://i.imgur.com/9ckC6Ur.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Хари Алтъпармаков",
    photoUrl: "https://i.imgur.com/YmoBekT.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Иван Лупов",
    photoUrl: "https://i.imgur.com/D8h9FAA.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Огнян Арсов",
    photoUrl: "https://i.imgur.com/rIBR7rO.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Иван Димов",
    photoUrl: "https://i.imgur.com/VXsUiXg.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Борис Тодоров",
    photoUrl: "https://i.imgur.com/I62lAlr.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Борис Станчев",
    photoUrl: "https://i.imgur.com/utHLyDO.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Александър Янев",
    photoUrl: "https://i.imgur.com/mOs6zD0.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "King",
    photoUrl: "https://i.imgur.com/5xFicQA.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Радослав Кънев",
    photoUrl: "https://i.imgur.com/R1gB48D.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Мартин Гоцев",
    photoUrl: "https://i.imgur.com/cZDGrYD.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Калоян Петров",
    photoUrl: "https://i.imgur.com/2ho9acl.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Илиян Илиев",
    photoUrl: "https://i.imgur.com/FcLwRCS.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Георги Велков",
    photoUrl: "https://i.imgur.com/c1MXoDK.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Даниел де Храул",
    photoUrl: "https://i.imgur.com/yDGUWW5.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Маргулан Исмолдаев",
    photoUrl: "https://i.imgur.com/micc4gX.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Станислав Великов",
    photoUrl: "https://i.imgur.com/UiVVHVx.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Александър Димитров",
    photoUrl: "https://i.imgur.com/awvohfV.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Даниел Димитров",
    photoUrl: "https://i.imgur.com/VlFncuF.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Антоний Георгиев",
    photoUrl: "https://i.imgur.com/v9fiHki.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
    },
    matchups: {},
  },
  {
    name: "Анжело Кискуцу",
    photoUrl: "https://i.imgur.com/IsJEVCd.png",
    wins: {
      attractiveness: 0,
      intelligence: 0,
      charisma: 0,
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
