import { Controller, Get, Post, Param, Delete, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';
import { UpdateMessageDto, CreateMessageDto } from './message.dto';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) { }

  @Get()
  @ApiOperation({ summary: '查询所有消息列表' })
  findAll(): Promise<Message[]> {
    return this.messageService.findAll();
  }

  @Post()
  @ApiOperation({ summary: '新建消息' })
  create(@Body() createDto: CreateMessageDto): Promise<Message> {
    return this.messageService.save(createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '根据ID查询消息' })
  findOne(@Param('id') id: string): Promise<Message> {
    return this.messageService.findOne(parseInt(id));
  }

  @Post('update')
  @ApiOperation({ summary: '更新消息记录' })
  update(@Body() message: UpdateMessageDto): Promise<Message> {
    return this.messageService.update(message)
  }

  @Delete(':id')
  @ApiOperation({ summary: '根据ID删除消息记录' })
  remove(@Param('id') id: string): Promise<void> {
    return this.messageService.remove(parseInt(id))
  }

}
