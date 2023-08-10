import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GmailController } from './gmail/gmail.controller';
import { C404, GoogleController } from './google/google.controller';
import { GmailService } from './gmail/gmail.service';
import { SchoolModule } from './school/school.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { Classroom } from './entities/classroom.entity';
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            username: "root",
            password: "z10mz10m",
            host: "localhost",
            database: "coding_skills_workshop",
            synchronize: true,
            logging: true,
            entities: [School, Classroom],
        }),
        SchoolModule,
    ],
    controllers: [
        AppController,
        GoogleController,
        GmailController,
        C404
    ],
    providers: [AppService, GmailService],
})
export class AppModule { }
