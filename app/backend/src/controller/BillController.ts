import { Request, Response } from "express";
import BillService from "../service/billService";

export default class BillController {
  constructor(private billService: BillService = new BillService()) {}

  async createBill(req: Request, res: Response) {
    const { date, description, value, user_id } = req.body;

    const response = await this.billService.createBill(date, description, value, user_id);

    return res.status(201).json(response.data);
  }

  async getBills(req: Request, res: Response) {
    const { id } = req.params;

    const response = await this.billService.getBills(Number(id));

    return res.status(200).json(response.data);
  }
}