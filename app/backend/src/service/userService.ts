import * as bcrypt from 'bcryptjs';
import UserModel from '../database/models/UserModel';
import { TokenManager } from '../token';

interface LoginResponse {
  status: string;
  data: object;
}

export default class UserService {
  constructor(
    private tokenManager: TokenManager = new TokenManager()
  ) {}

 async createUser(username: string, email: string, password: string): Promise<LoginResponse> {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await UserModel.create({
   username,
   email,
   password: hashedPassword,
  });
  const token = this.tokenManager.generateToken(email);
  return {
   status: 'success',
   data: token,
  };
 }
}