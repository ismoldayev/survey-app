import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../src/utils/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { db } = await connectToDatabase();
  const people = await db.collection('people').aggregate([{ $sample: { size: 2 } }]).toArray();

  res.status(200).json({ personA: people[0], personB: people[1] });
};

export default handler;