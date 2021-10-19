import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamService } from 'service/index';
import { ExamController } from 'controller/index';
import { Exam } from 'model/index';

@Module({
  imports: [TypeOrmModule.forFeature([Exam])],
  exports: [TypeOrmModule],
  providers: [ExamService],
  controllers: [ExamController],
})
export default class ExamModule {}
