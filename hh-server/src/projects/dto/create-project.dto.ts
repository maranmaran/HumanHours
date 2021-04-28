import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectDto {
    @ApiProperty({ example: "Project_Name" })
    name: string;
    @ApiProperty({ example: "Sample description"})
    description: string;
}
