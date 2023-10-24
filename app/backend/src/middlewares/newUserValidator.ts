import { Request, Response, NextFunction } from "express";
import UserModel from "../database/models/UserModel";

class NewUserValidator {
  async validate(req: Request, res: Response, next: NextFunction) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    if(password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }
    const user = await UserModel.findOne({ where: { email } });
    if(user) {
      return res.status(409).json({ message: 'User already exists' });
    }

    next();
  }
}

export default new NewUserValidator().validate;