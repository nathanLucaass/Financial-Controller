import { type Request, type Response } from 'express'
import EarningService from '../service/earningService'

export default class EarningController {
  constructor (private readonly earningService: EarningService = new EarningService()) {}

  async createEarning (req: Request, res: Response): Promise<Response> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { date, description, value, user_id } = req.body

    const response = await this.earningService.createEarning(date, description, value, user_id)

    return res.status(201).json(response.data)
  }

  async getEarnings (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const response = await this.earningService.getEarnings(Number(id))

    return res.status(200).json(response.data)
  }
}
