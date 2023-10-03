import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminPanelController } from './admin-panel/admin-panel.controller';

@Module({
  imports: [],
  controllers: [AppController, AdminPanelController],
  providers: [AppService],
})
export class AppModule {}
