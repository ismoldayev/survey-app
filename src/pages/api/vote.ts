import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../src/utils/db';
import { ObjectId } from 'mongodb';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { characteristic, selectedPersonId } = req.body;

  const { db } = await connectToDatabase();
  await db.collection('people').updateOne(
    { _id: new ObjectId(selectedPersonId) },
    { $inc: { [`wins.${characteristic}`]: 1 } }
  );
  
  res.status(200).json({ message: 'Vote submitted successfully' });
};

export default handler;
