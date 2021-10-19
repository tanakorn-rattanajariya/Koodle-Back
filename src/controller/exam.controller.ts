import { Controller } from '@nestjs/common';
import { Exam } from 'model/index';
import { ExamService } from 'service/index';
import { Post, Body } from '@nestjs/common';
import BaseController from './base';
@Controller('exam')
export class ExamController extends BaseController<Exam> {
  constructor(private svc: ExamService) {
    super(svc);
  }
}
