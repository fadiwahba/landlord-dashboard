import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorResponse } from '../../../api'
import { Payment, Payments } from '../../data/payment'
import { delay } from '../delay';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Payment[] | ErrorResponse>
) {
  if (req.method === 'GET') {
    await delay(1000);

    res.status(200).json(Payments.instance);
  }
  else {
    res.status(404).json({ message: 'The requested resource could not be found' });
  }
}
