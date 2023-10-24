import { Request, Response } from "express";
import EarningService from "../service/earningService";

export default class EarningController {
  constructor(private earningService: EarningService = new EarningService()) {}

  async createEarning(req: Request, res: Response) {
    const { date, description, value, user_id } = req.body;

    const response = await this.earningService.createEarning(date, description, value, user_id);

    return res.status(201).json(response.data);
  }

  async getEarnings(req: Request, res: Response) {
    const { id } = req.params;

    const response = await this.earningService.getEarnings(Number(id));

    return res.status(200).json(response.data);
  }
}