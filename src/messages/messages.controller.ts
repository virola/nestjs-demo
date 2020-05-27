import { Controller, Get, Post, Param, Delete, Body, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';
import { UpdateMessageDto, CreateMessageDto, MessageDto } from './message.dto';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) { }

  @Get()
  @ApiResponse({
    status: 200,
    description: '查询所有消息列表',
    type: [MessageDto],
  })
  findAll(): Promise<Message[]> {
    return this.messageService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: '根据ID查询消息',
    type: MessageDto,
  })
  findOne(@Param('id') id: string): Promise<Message> {
    return this.messageService.findOne(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: '新建消息' })
  create(@Body() createDto: CreateMessageDto): Promise<Message> {
    return this.messageService.save(createDto);
  }

  @Post('update')
  @ApiOperation({ summary: '更新消息记录' })
  update(@Body() message: UpdateMessageDto): Promise<Message> {
    return this.messageService.update(message)
  }

  @Post('delete')
  @ApiOperation({ summary: '根据ID删除消息记录' })
  remove(@Query('id') id: string): Promise<void> {
    return this.messageService.remove(parseInt(id))
  }

}
