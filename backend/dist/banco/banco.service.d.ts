import { PrismaService } from 'src/database/PrismaService';
import { BancoDTO } from './banco.dto';
export declare class BancoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: BancoDTO): Promise<import(".prisma/client").Banco>;
    findAll(): Promise<import(".prisma/client").Banco[]>;
    update(id: string, data: BancoDTO): Promise<import(".prisma/client").Banco>;
    delete(id: string): Promise<import(".prisma/client").Banco>;
}
