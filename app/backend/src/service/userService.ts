import * as bcrypt from 'bcryptjs'
import UserModel from '../database/models/UserModel'
import { TokenManager } from '../token'

interface Response {
  status: string
  data: object
}

export default class UserService {
  constructor (
    private readonly tokenManager: TokenManager = new TokenManager()
  ) {}

  async createUser (username: string, email: string, password: string): Promise<Response> {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword
    })

    return { status: 'success', data: user }
  };

  async login (email: string, password: string): Promise<Response> {
    const user = await UserModel.findOne({ where: { email } })
    

    if (user == null) {
      return { status: 'error', data: { message: 'User not found' } }
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return { status: 'error', data: { message: 'Invalid password' } }
    }

    const token = this.tokenManager.generateToken(email)
    return { status: 'success', data: { userId: user?.dataValues.id, userName: user?.dataValues.username, token } }
  };
};
