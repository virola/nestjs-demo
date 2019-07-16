import { Injectable } from '@nestjs/common';
// import { Message } from './interfaces/message.interface';
// ORM-ActiveRecord
import { Message } from './message.entity';

const moment = require('moment');

@Injectable()
export class MessagesService {

  async save(): Promise<Message> {
    const message = new Message();
    message.userId = Math.round(Math.random() * 1000);
    message.toUserId = Math.round(Math.random() * 1000);
    message.content = '消息内容发送于' + moment().format('YYYY-MM-DD HH:mm:ss');
    return await message.save();
  }

  async findAll(): Promise<Message[]> {
    return await Message.find();
  }

  async findOne(id: number): Promise<Message> {
    return await Message.findOne(id);
  }
}
