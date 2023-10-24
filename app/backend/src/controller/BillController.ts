import { Request, Response } from "express";
import BillService from "../service/billService";

export default class BillController {
  constructor(private billService: BillService = new BillService()) {}

  async createBill(req: Request, res: Response) {
    const { date, description, value } = req.body;

    const response = await this.billService.createBill(date, description, value);

    return res.status(201).json(response.data);
  }
}