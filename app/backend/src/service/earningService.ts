import EarningModel from '../database/models/EarningModel';
interface Response {
  status: string;
  data: object;
}

export default class EarningService {
  constructor() {}

  async createEarning(date: Date, description: string, value: number, user_id: number): Promise<Response> {
    const earning = await EarningModel.create({
      date,
      description,
      value,
      user_id
    });

    return {status: 'success',data: earning};
  };
  async getEarnings(id: number): Promise<Response> {
    const earnings = await EarningModel.findAll({
      where: {
        user_id: id
      }
    });
    return {status: 'success',data: earnings};
  }
}