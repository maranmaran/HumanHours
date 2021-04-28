import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { HoursModule } from './hours/hours.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@pricelydev.axkl5.mongodb.net/human-hours?retryWrites=true&w=majority'),
    ProjectsModule, 
    HoursModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
