import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Hour, HourSchema } from './entities/hour.entity';
import { HoursController } from './hours.controller';
import { HoursService } from './hours.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Hour.name, schema: HourSchema }])],
  controllers: [HoursController],
  providers: [HoursService]
})
export class HoursModule {}
