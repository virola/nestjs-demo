import { Controller, Get, Post, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) { }

  @Get()
  findAll(): Promise<Message[]> {
    return this.messageService.findAll();
  }

  @Post()
  create(): Promise<Message> {
    return this.messageService.save();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Message> {
    return this.messageService.findOne(+id);
  }

}
