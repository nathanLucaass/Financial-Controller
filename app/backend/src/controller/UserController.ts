import { Request, Response } from "express";
import UserService from "../service/userService";

export default class UserController {
  constructor(private userService: UserService = new UserService()) {}

  async createUser(req: Request, res: Response) {
    const { username, email, password } = req.body;

    const response = await this.userService.createUser(username, email, password);

    return res.status(201).json(response.data);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const response = await this.userService.login(email, password);

    if(response.status === 'error') {
      return res.status(400).json(response.data);
    };

    return res.status(200).json(response.data);
  }
}