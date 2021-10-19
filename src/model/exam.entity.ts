import { Entity, Column, OneToMany, JoinColumn,PrimaryColumn,Generated } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import BaseModel from './base';
import Session from './session.entity';
@Entity()
export default class Exam extends BaseModel {

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  exam_uri: string;

  @ApiProperty()
  @Column({ nullable: true })
  start_time: Date;

  @ApiProperty()
  @Column()
  /** second */
  exam_time: number;

  @OneToMany(() => Session, (session) => session.exam)
  sessions: Array<Session>;
}
