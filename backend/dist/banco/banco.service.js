"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../database/PrismaService");
let BancoService = class BancoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const bancoExists = await this.prisma.banco.findFirst({
            where: {
                nome: data.nome
            }
        });
        if (bancoExists) {
            throw new Error('Banco não existe');
        }
        const banco = this.prisma.banco.create({
            data,
        });
        return banco;
    }
    async findAll() {
        return this.prisma.banco.findMany();
    }
    async update(id, data) {
        const bancoExists = await this.prisma.banco.findUnique({
            where: {
                id
            }
        });
        if (!bancoExists) {
            throw new Error('Banco não existe!');
        }
        return await this.prisma.banco.update({
            data,
            where: {
                id
            }
        });
    }
    async delete(id) {
        const bancoExists = await this.prisma.banco.findUnique({
            where: {
                id
            }
        });
        if (!bancoExists) {
            throw new Error('Banco não existe!');
        }
        return await this.prisma.banco.delete({
            where: {
                id,
            }
        });
    }
};
BancoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], BancoService);
exports.BancoService = BancoService;
//# sourceMappingURL=banco.service.js.map