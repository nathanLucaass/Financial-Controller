import { Request, Response } from "express";
import UserService from "../service/userService";

export default class UserController {
  constructor(
    private userService: UserService = new UserService()
  ) {}

  async createUser(req: Request, res: Response) {
    const { username, email, password } = req.body;
    const response = await this.userService.createUser(username, email, password);
    return res.status(201).json(response.data);
  }
}