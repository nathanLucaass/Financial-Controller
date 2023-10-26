/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { type Request, type Response, type NextFunction } from 'express'

class NewBillValidator {
  async validate (req: Request, res: Response, next: NextFunction) {
    const { date, description, value } = req.body;
    const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!date) {
      return res.status(400).json({ message: 'Missing Date' })
    };
    if(!description) {
      return res.status(400).json({ message: 'Missing Description' })
    };
    if(!value) {
      return res.status(400).json({ message: 'Missing Value' })
    }
    if (value < 0) {
      return res.status(400).json({ message: 'Value must be positive' })
    };
    if (description.length < 5) {
      return res.status(400).json({ message: 'Description must be at least 5 characters long' })
    };
    if (!dataRegex.test(date)) {
      return res.status(400).json({ message: 'Date must be in the format dd/mm/yyyy' })
    };

    next()
  }
};

export default new NewBillValidator().validate
