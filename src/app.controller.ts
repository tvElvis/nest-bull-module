import { Body, Controller, Get, Module, Param, Post } from '@nestjs/common';
import { DoneCallback, Job, Queue } from 'bull';
import { BullModule, InjectQueue, OnQueueEvent, Process, BullQueueEvents } from 'nest-bull';
import { AppService } from './app.service';

@Controller('job')
export class AppController {

  constructor(
    private readonly appService: AppService,
  ) { }

  @Post()
  createSmthWithJob() {
    return this.appService.createSmthWithJob();
  }
}