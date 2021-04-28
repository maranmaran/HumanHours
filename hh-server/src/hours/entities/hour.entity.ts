import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type HourDocument = Hour & Document;

@Schema()
export class Hour {
  @Prop()
  @ApiProperty({ example: "2827b2d5-dedd-46f7-9282-27ceff9a8413" })
  id: string;
  
  @Prop()
  @ApiProperty({ example: "2827b2d5-dedd-46f7-9282-27ceff9a8413" })
  projectId: string;
  
  @Prop()
  @ApiProperty({ example: 3.5, description: 'Work hours spent working on project' })
  hours: number;
  
  @Prop()
  @ApiProperty({ example: "2021-04-27T20:48:26Z", description: 'Log date' })
  date: Date;
}

export const HourSchema = SchemaFactory.createForClass(Hour);
