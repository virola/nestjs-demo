import { Injectable } from '@nestjs/common';
// import { Message } from './interfaces/message.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
// ORM-ActiveRecord
import { Message } from './message.entity';
import { CreateMessageDto, UpdateMessageDto } from './message.dto';

const moment = require('moment');

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) { }

  async save(data: CreateMessageDto): Promise<Message> {
    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss')
    const message = new Message();
    message.userId = Math.round(Math.random() * 1000);
    message.toUserId = Math.round(Math.random() * 1000);
    message.content = data.content + '|消息内容发送于' + moment().format('YYYY-MM-DD HH:mm:ss');
    message.createdTime = nowTime;
    message.updatedTime = nowTime;
    return await message.save();
  }

  async update(data: UpdateMessageDto): Promise<Message> {
    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const message = await Message.findOne(data.id);
    message.updatedTime = nowTime;
    return await message.save();
  }

  async findAll(): Promise<Message[]> {
    return await Message.find();
  }

  findOne(id: number): Promise<Message> {
    return this.messagesRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const message = await Message.findOne(id);
    console.log(message);
    message.deleted = true;
    await message.save();
  }
}
