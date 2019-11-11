import { Injectable } from '@nestjs/common';
import * as keygen from 'keygen';

@Injectable()
export class TokenService {
  createToken(x: number) {
    return keygen.url();
  }

  removeToken(token: string) {
    console.log(`Removing token ${token}`)
  }
}
