import { Injectable } from '@nestjs/common';
const moment = require('moment');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest.js! ' + moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
