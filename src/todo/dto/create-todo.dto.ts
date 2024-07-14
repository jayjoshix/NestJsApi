import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateTodoDto {
    @ApiPropertyOptional()
    @IsNotEmpty()
    @IsString()
    task: string
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description: string  

}
