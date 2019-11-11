import {
  Queue,
  QueueProcess,
  OnQueueActive,
  OnQueueEvent,
  BullQueueEvents,
} from 'nest-bull';
import { Job, DoneCallback } from 'bull';
import { TokenService } from './token.service';

@Queue({ name: 'store' })
export class MyQueue {

  constructor(private readonly service: TokenService) { }

  @QueueProcess({ name: 'removeToken' })
  removeToken(job: Job<number>) {
    return this.service.createToken(job.data);
  }

  @OnQueueEvent(BullQueueEvents.COMPLETED)
  onCompleted(job: Job) {
    return this.service.removeToken(job.returnvalue);
  }
}
