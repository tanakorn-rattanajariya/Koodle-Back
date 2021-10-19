import { Controller,Get,Param } from '@nestjs/common';
import { Session } from 'model/index';
import { SessionService } from 'service/index';
import { Post, Body } from '@nestjs/common';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import BaseController from './base';
@Controller('session')
export class SessionController extends BaseController<Session> {
  constructor(private svc: SessionService) {
    super(svc);
  }
}
