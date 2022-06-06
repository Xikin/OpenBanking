import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import { BancoDTO } from './banco.dto';

@Injectable()
export class BancoService {

    constructor(private prisma: PrismaService) {}

    async create(data: BancoDTO){

        const bancoExists = await this.prisma.banco.findFirst({
            where:{
                nome: data.nome
            }
        })

        if(bancoExists){
            throw new Error('Banco não existe');
        }

        const banco =this.prisma.banco.create({
            data,
        })
        
        return banco;
    }

    async findAll(){
        return this.prisma.banco.findMany();
    }

    async update(id: string, data: BancoDTO){
        const bancoExists = await this.prisma.banco.findUnique({
            where:{
                id
            }
        })
        if(!bancoExists){
            throw new Error('Banco não existe!');
        }

        return await this.prisma.banco.update({
            data,
            where: {
                id
            }
        })
    }

    async delete(id:string){
        const bancoExists = await this.prisma.banco.findUnique({
            where:{
                id
            }
        })
        if(!bancoExists){
            throw new Error('Banco não existe!');
        }

        return await this.prisma.banco.delete({
            where: {
                id,
            }
        });
    }
}
