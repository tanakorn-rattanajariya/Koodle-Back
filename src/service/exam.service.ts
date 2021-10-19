import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Exam } from 'model/index';
import BaseService from './base';

@Injectable()
export default class ExamService extends BaseService<Exam> {
  constructor(
    @InjectRepository(Exam)
    private rep: Repository<Exam>,
  ) {
    super(rep);
  }
}
