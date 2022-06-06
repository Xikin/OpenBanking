import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BancoModule } from './banco/banco.module';

@Module({
  imports: [BancoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
