import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // TODO: Factory conn string from somewhere
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@pricelydev.axkl5.mongodb.net/human-hours?retryWrites=true&w=majority')],
})
export class DatabaseModule {}