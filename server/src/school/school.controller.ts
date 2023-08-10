import { Controller, Get } from '@nestjs/common';
import { SchoolService } from './school.service';


@Controller("/api/school")
export class SchoolController {
    constructor(private readonly schoolService: SchoolService) { }

    @Get("all-school-data")
    async getAllSchoolData(){
        return await this.schoolService.getSchoolsData();
    }

}
