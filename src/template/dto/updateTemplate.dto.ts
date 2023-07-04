import { RoutineType } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateTemplateDto {
  @IsString()
  @MinLength(1)
  @MaxLength(8)
  title: string;

  @IsString()
  @IsNotEmpty()
  section: string;

  @IsString()
  @IsNotEmpty()
  logoUrl: string;

  @IsString()
  @IsEnum(RoutineType)
  type: RoutineType;
}

export class RoutineTemplateIdDTO {
  @IsString()
  @IsNotEmpty()
  routineTemplateId: string;
}
