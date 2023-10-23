import * as bcrypt from 'bcryptjs';
import UserModel from '../database/models/UserModel';

interface LoginResponse {
  status: string;
  data: object;
}

export default class UserService {
 async createUser(username: string, email: string, password: string): Promise<LoginResponse> {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await UserModel.create({
   username,
   email,
   password: hashedPassword,
  });
  return {
   status: 'success',
   data: user,
  };
 }
}