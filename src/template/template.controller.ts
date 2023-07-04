import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Put,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TemplateService } from './service/template.service';
import { TemplateEntity, TemplateList } from './template.entity';
import { CreateTemplateDto } from './dto/createTemplate.dto';
import {
  RoutineTemplateIdDTO,
  UpdateTemplateDto,
} from './dto/updateTemplate.dto';

@Controller('api/template')
@UseGuards(AuthGuard())
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post()
  async create(
    @Body() createTemplateDto: CreateTemplateDto,
  ): Promise<TemplateEntity> {
    const template = await this.templateService.createTemplate(
      createTemplateDto,
    );
    return template;
  }

  @Get()
  async findAll(): Promise<TemplateList> {
    return this.templateService.getTemplate();
  }

  @Put('/:routineTemplateId')
  async update(
    @Body() updateTemplateDto: UpdateTemplateDto,
    @Param() routineTemplateIdDTO: RoutineTemplateIdDTO,
  ): Promise<TemplateEntity> {
    const template = await this.templateService.updateTemplate(
      routineTemplateIdDTO,
      updateTemplateDto,
    );
    return template;
  }
}
