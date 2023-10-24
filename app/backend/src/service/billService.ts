import BillModel from '../database/models/BIllModel';
interface Response {
  status: string;
  data: object;
}

export default class BillService {
  constructor() {}

  async createBill(date: Date, description: string, value: number): Promise<Response> {
    const bill = await BillModel.create({
      date,
      description,
      value,
    });

    return {status: 'success',data: bill};
  };
}