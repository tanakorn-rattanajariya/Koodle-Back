import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session, Exam } from 'model/index';
import BaseService from './base';
import { STATUS } from 'model/session.entity';
@Injectable()
export default class SessionService extends BaseService<Session> {
  constructor(
    @InjectRepository(Session)
    private rep: Repository<Session>,
  ) {
    super(rep);
  }
  public get(id: string): Promise<Session> {
    return this.rep.findOne(id, { relations: ['exam'] });
  }
  public create(data: Session): Promise<Session> {
    const newData = { ...data, status: STATUS.WAITING };
    return this.rep.save(newData);
  }
  public async update(data: Session, id: string): Promise<Session> {
    const newData = { ...data, id };
    await this.rep.save(newData);
    const response = await this.rep.findOne(id, { relations: ['exam'] });
    return response;
  }
}
