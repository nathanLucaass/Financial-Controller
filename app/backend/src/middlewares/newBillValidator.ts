/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { type Request, type Response, type NextFunction } from 'express'

class NewBillValidator {
  async validate (req: Request, res: Response, next: NextFunction) {
    const { description, value } = req.body

    if (!description || !value) {
      return res.status(400).json({ message: 'Missing required fields' })
    };
    if (value < 0) {
      return res.status(400).json({ message: 'Value must be positive' })
    };
    if (description.length < 5) {
      return res.status(400).json({ message: 'Description must be at least 5 characters long' })
    };

    next()
  }
};

export default new NewBillValidator().validate
