import { Controller, Get } from '@nestjs/common';

@Controller('google')
export class GoogleController {
    @Get('/1')
    hiiii() {
        return "hello 2!!!"
    }

}

@Controller('')
export class C404 {
    @Get('')
    func404() {
        return "NOT FOUND";
    }
}
