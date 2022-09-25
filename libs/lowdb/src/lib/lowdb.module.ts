import { Module } from '@nestjs/common';
import { LowdbController } from './lowdb.controller';

@Module({
  controllers: [LowdbController],
  providers: [],
  exports: [],
})
export class LowdbModule {}
