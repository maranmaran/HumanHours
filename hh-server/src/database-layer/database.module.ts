import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // TODO: Factory conn string from somewhere
  imports: [MongooseModule.forRoot(process.env.MONGO_URL)],
})
export class DatabaseModule {}