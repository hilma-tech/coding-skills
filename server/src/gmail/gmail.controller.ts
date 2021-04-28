import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { GmailService } from './gmail.service';
@Controller('google')
export class GmailController {
    constructor(private readonly g_service: GmailService) { }


    @Get('/1')
    hello() {
        return "first exmaple!!!"
    }

    @Get('ex')
    func(@Res() res: Response) {
        this.g_service.functionnn(res);
    }

    @Get('/postify')
    posti(@Query('ll') ll: number) {
        return ll.toFixed();
    }

}
