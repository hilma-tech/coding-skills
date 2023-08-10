import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Classroom } from "src/entities/classroom.entity";
import { School } from "src/entities/school.entity";
import { SchoolController } from "./school.controller";
import { SchoolService } from "./school.service";

@Module({
    imports: [TypeOrmModule.forFeature([School, Classroom,])],
    providers: [SchoolService],
    controllers: [SchoolController],
})
export class SchoolModule { };
