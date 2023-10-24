import * as jwt from 'jsonwebtoken';

export class TokenManager {
  private secret: string;

  constructor(secret: string = process.env.JWT_SECRET || 'jwt_secret') {
    this.secret = secret;
  }

  generateToken(username: string): TokenPayload {
    const jwtPayload = {
      sub: username,
    };

    const token = jwt.sign(jwtPayload, this.secret, {
      algorithm: 'HS256',
      expiresIn: '7d',
    });

    return { token };
  }
}

export type TokenPayload = {
  token: string;
};
