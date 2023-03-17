import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../src/utils/db';

const ADMIN_PASSWORD = 'andrewtate';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { password } = req.body;

  if (password !== ADMIN_PASSWORD) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const { db } = await connectToDatabase();
  const people = await db.collection('people').find().toArray();

  res.status(200).json(people);
};

export default handler;
