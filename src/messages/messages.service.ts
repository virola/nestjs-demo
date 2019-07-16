import { Injectable } from '@nestjs/common';
// import { Message } from './interfaces/message.interface';
// ORM-ActiveRecord
import { Messages } from './messages.entity';

const moment = require('moment');

@Injectable()
export class MessagesService {

  async save(): Promise<Messages> {
    const message = new Messages();
    message.user_id = Math.round(Math.random() * 1000);
    message.to_user_id = Math.round(Math.random() * 1000);
    message.content = '消息内容发送于' + moment().format('YYYY-MM-DD HH:mm:ss');
    return await message.save();
  }

  async findAll(): Promise<Messages[]> {
    return await Messages.find();
  }

  async findOne(id: number): Promise<Messages> {
    return await Messages.findOne(id);
  }
}
