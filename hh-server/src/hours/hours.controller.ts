import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { parseISO } from 'date-fns';
import { CreateHourDto } from './dto/create-hour.dto';
import { UpdateHourDto } from './dto/update-hour.dto';
import { HoursService } from './hours.service';

@ApiTags('hours')
@Controller('hours')
export class HoursController {
  constructor(private readonly hoursService: HoursService) {}

  @Post()
  @ApiOperation({ summary: 'Creates work hour record'})
  create(@Body() createHourDto: CreateHourDto) {
    return this.hoursService.create(createHourDto);
  }

  @Get()
  @ApiOperation({ summary: 'Gets all work hours'})
  findAll() {
    return this.hoursService.findAll();
  }

  @Get('project:projectId')
  @ApiOperation({ summary: 'Gets all work hours for specific project'})
  findByProject(@Param('projectId', ParseUUIDPipe) projectId: string) {
    return this.hoursService.findByProject(projectId);
  }
  
  @Get('month:date')
  @ApiOperation({ summary: 'Gets all work hours in specific month of the date'})
  findByMonth(@Param('date') date: string) {
    // TODO: Create transformation pipe
    return this.hoursService.findByMonth(parseISO(date));
  }
  
  @Get('week:date')
  @ApiOperation({ summary: 'Gets all work hours in specific week of the date'})
  findByWeek(@Param('date', ) date: string) {
    return this.hoursService.findByWeek(parseISO(date));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Gets work hour record by id'})
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.hoursService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates work hour record'})
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateHourDto: UpdateHourDto) {
    return this.hoursService.update(+id, updateHourDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes work hour record'})
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.hoursService.remove(+id);
  }
}
