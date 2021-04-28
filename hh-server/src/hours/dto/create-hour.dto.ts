import { ApiProperty } from "@nestjs/swagger";

export class CreateHourDto {
    @ApiProperty({ example: "2827b2d5-dedd-46f7-9282-27ceff9a8413" })
    projectId: string;
    @ApiProperty({ example: 3.5, description: 'Work hours spent working on project' })
    hours: number;
}
