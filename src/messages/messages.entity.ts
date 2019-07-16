import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

// 这里可以修改表名
// @Entity('messages_new')
@Entity()
export class Messages extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  user_id: number;

  @Column('text')
  content: string;

  @Column('int')
  to_user_id: number;

  @Column('datetime')
  created_time: Date;

  @Column('int')
  creator: number;

  @Column('datetime')
  updated_time: Date;

  @Column('int')
  updator: number;
}
