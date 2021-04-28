import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class GmailService {


    functionnn(res: Response) {
        console.log("HI!!!!")
        res.cookie('lang', 'he');
        res.send(new Date());
    }
}