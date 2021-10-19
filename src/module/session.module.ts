import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionService } from 'service/index';
import { SessionController } from 'controller/index';
import { Session } from 'model/index';

@Module({
  imports: [TypeOrmModule.forFeature([Session])],
  exports: [TypeOrmModule],
  providers: [SessionService],
  controllers: [SessionController],
})
export default class SessionModule {}
