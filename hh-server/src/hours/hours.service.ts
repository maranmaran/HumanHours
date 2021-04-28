import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { getMonth, getWeek } from 'date-fns';
import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { CreateHourDto } from './dto/create-hour.dto';
import { UpdateHourDto } from './dto/update-hour.dto';
import { Hour, HourDocument } from './entities/hour.entity';

@Injectable()
export class HoursService {
  constructor(
    @InjectModel(Hour.name)
    private hourModel: Model<HourDocument>,
  ) {}

  create(createHourDto: CreateHourDto) {
    const createdHour = new this.hourModel(createHourDto);
    createdHour.date = new Date();
    createdHour.id = uuid();

    return createdHour.save();  
  }

  findAll() {
    return this.hourModel.find().exec();
  }

  findByProject(projectId: string) {
    return this.hourModel.find().where('projectId').equals(projectId).exec();
  }
  
  findByMonth(date: Date) {
    const month = getMonth(date) + 1;
    
    return this.hourModel
    .aggregate([
      { $addFields: {  
        "month" : {$month: '$date'} 
        } 
      },
      { $match: { month } }
    ])
    .exec();
  }
  
  findByWeek(date: Date) {
    const week = getWeek(date) - 1;
    
    return this.hourModel 
    .aggregate([
      { $addFields: {  
        "week" : {$week: '$date'} 
        } 
      },
      { $match: { week } }
    ])
    .exec();
  }

  findOne(id: number) {
    return this.hourModel.findById(id).exec();
  }

  update(id: number, updateHourDto: UpdateHourDto) {
    return this.hourModel.updateOne({ _id: id }, updateHourDto);
  }

  remove(id: number) {
    return this.hourModel.deleteOne({_id: id});
  }
}
