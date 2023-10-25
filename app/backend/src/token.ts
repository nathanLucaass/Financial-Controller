import * as jwt from 'jsonwebtoken'

export class TokenManager {
  private readonly secret: string

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  constructor (secret: string = process.env.JWT_SECRET ?? 'jwt_secret') {
    this.secret = secret
  }

  generateToken (username: string): TokenPayload {
    const jwtPayload = {
      sub: username
    }

    const token = jwt.sign(jwtPayload, this.secret, {
      algorithm: 'HS256',
      expiresIn: '7d'
    })

    return { token }
  }
}

export interface TokenPayload {
  token: string
}
