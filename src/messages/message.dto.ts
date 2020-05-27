import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

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
  readonly content: string;

  @ApiPropertyOptional()
  readonly deleted: boolean;
}

