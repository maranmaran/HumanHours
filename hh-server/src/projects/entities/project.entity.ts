import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project extends Document {
  @Prop()
  @ApiProperty({ example: "2827b2d5-dedd-46f7-9282-27ceff9a8413" })
  id: string;

  @Prop()
  @ApiProperty({ example: "Project_Name" })
  name: string;

  @Prop()
  @ApiProperty({ example: "Sample description" })
  description: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
