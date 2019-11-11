import { Body, Controller, Get, Module, Param, Post } from '@nestjs/common';
import { DoneCallback, Job, Queue } from 'bull';
import { BullModule, InjectQueue } from 'nest-bull';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenService } from './token.service';
import { MyQueue } from './my-queue';

@Module({
  imports: [
    BullModule.register({
      name: 'store',
      options: {
        redis: {
          port: 6379,
        },
      },
      processors: [
        (job: Job, done: DoneCallback) => { done(null, job.data); },
      ],
    }),
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    TokenService,
    MyQueue,
  ],
})
export class AppModule { }