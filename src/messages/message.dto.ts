import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

const moment = require('moment');

export class MessageDto {
  @ApiProperty({
    description: 'ID',
  })
  readonly id: number;

  @ApiProperty({
    description: '发送人ID',
  })
  readonly userId: number;

  @ApiProperty({
    description: '接收人ID',
  })
  readonly toUserId: number;

  @ApiProperty({
    description: '消息内容',
  })
  @IsNotEmpty({ message: '消息内容不能为空' })
  readonly content: string;

  @ApiProperty({
    description: '创建时间',
    default: moment().format('YYYY-MM-DD HH:mm:ss')
  })
  readonly createdTime: string;

  @ApiProperty({
    description: '更新时间',
    default: moment().format('YYYY-MM-DD HH:mm:ss')
  })
  readonly updatedTime: string;

  @ApiProperty({
    description: '是否删除',
  })
  readonly deleted: boolean;
}

export class CreateMessageDto {
  @ApiProperty({
    description: '发送人ID',
  })
  readonly userId: number;

  @ApiProperty({
    description: '接收人ID',
  })
  readonly toUserId: number;

  @ApiProperty({
    description: '消息内容',
  })
  @IsNotEmpty({ message: '消息内容不能为空' })
  readonly content: string;
}


export class UpdateMessageDto {
  @ApiProperty({
    description: 'ID',
  })
  readonly id: number;

  @ApiPropertyOptional({
    description: '发送人ID',
  })
  readonly userId: number;

  @ApiPropertyOptional({
    description: '接收人ID',
  })
  readonly toUserId: number;

  @ApiPropertyOptional({
    description: '消息内容',
  })
  @IsNotEmpty({ message: '消息内容不能为空' })
  readonly content: string;

  @ApiPropertyOptional()
  readonly deleted: boolean;
}

