import BillModel from '../database/models/BIllModel';
interface Response {
  status: string;
  data: object;
}

export default class BillService {
  constructor() {}

  async createBill(date: Date, description: string, value: number, user_id: number): Promise<Response> {
    const bill = await BillModel.create({
      date,
      description,
      value,
      user_id
    });

    return {status: 'success',data: bill};
  };
  async getBills(id: number): Promise<Response> {
    const bills = await BillModel.findAll({
      where: {
        user_id: id
      }
    });
    return {status: 'success',data: bills};
  }
}