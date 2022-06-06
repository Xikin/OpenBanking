import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BancoDTO } from './banco.dto';
import { BancoService } from './banco.service';

@Controller('banco')
export class BancoController {
  constructor(private readonly bancoService: BancoService) {}

  @Post()
  async create(@Body() data: BancoDTO){
    return this.bancoService.create(data);
  }

  @Get()
  async findAll(){
    return this.bancoService.findAll();
  }

  @Put(":id")
  async update(@Param("id") id:string, @Body() data: BancoDTO){
    return this.bancoService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id:string){
    return this.bancoService.delete(id);
  }
}
