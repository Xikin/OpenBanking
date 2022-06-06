import { BancoDTO } from './banco.dto';
import { BancoService } from './banco.service';
export declare class BancoController {
    private readonly bancoService;
    constructor(bancoService: BancoService);
    create(data: BancoDTO): Promise<import(".prisma/client").Banco>;
    findAll(): Promise<import(".prisma/client").Banco[]>;
    update(id: string, data: BancoDTO): Promise<import(".prisma/client").Banco>;
    delete(id: string): Promise<import(".prisma/client").Banco>;
}
