import { Controller, Get, Post, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Messages } from './messages.entity';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) { }

  @Get()
  findAll(): Promise<Messages[]> {
    return this.messagesService.findAll();
  }

  @Post()
  create(): Promise<Messages> {
    return this.messagesService.save();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Messages> {
    return this.messagesService.findOne(+id);
  }

}
