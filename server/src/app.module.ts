import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';
import { GmailController } from './gmail/gmail.controller';
import { C404, GoogleController } from './google/google.controller';
@Module({
  imports: [ServeStaticModule.forRoot({ rootPath: join(__dirname, "../../client/build") })],
  controllers: [
    AppController,
    GoogleController,
    GmailController,
    C404
  ],
  providers: [AppService],
})
export class AppModule { }
