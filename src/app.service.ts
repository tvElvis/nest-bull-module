import { Injectable } from '@nestjs/common';
import { Queue, Job } from 'bull';
import { InjectQueue, QueueProcess } from 'nest-bull';
import { TokenService } from './token.service';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('store') readonly queue: Queue,
  ) { }

  async createSmthWithJob() {
    return this.queue.add('removeToken', null, { delay: 20000, removeOnComplete: true });
  }
}
