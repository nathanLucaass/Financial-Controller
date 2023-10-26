import BillModel from '../database/models/BIllModel'
interface Response {
  status: string
  data: object
}

export default class BillService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async createBill (date: string, description: string, value: number, user_id: number): Promise<Response> {
    const bill = await BillModel.create({
      date,
      description,
      value,
      user_id
    })

    return { status: 'success', data: bill }
  };

  async getBills (id: number): Promise<Response> {
    const bills = await BillModel.findAll({
      where: {
        user_id: id
      }
    })
    return { status: 'success', data: bills }
  }
}
