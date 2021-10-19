import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  Generated,
  RelationId,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import BaseModel from './base';
import Exam from './exam.entity';
@Entity()
export default class Session extends BaseModel {
  @Column()
  @Generated('uuid')
  exam_id: string;

  @ApiProperty()
  @Column({ nullable: true })
  start_time: Date;

  @Column()
  status: STATUS;

  @ApiProperty()
  @ManyToOne(() => Exam, (exam) => exam.sessions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'exam_id' })
  exam: Exam;
}

export enum STATUS {
  WAITING = 'WAITING',
  DOING = 'DOING',
  COMPLETE = 'COMPLETE',
}
