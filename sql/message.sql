--
-- 表的结构 `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL COMMENT '发送者ID',
  `to_user_id` int(11) DEFAULT NULL COMMENT '消息接收用户ID',
  `content` varchar(255) DEFAULT NULL COMMENT '消息内容',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_time` datetime DEFAULT NULL COMMENT '更新时间',
  `creator` int(11) DEFAULT NULL COMMENT '创建人ID',
  `updator` int(11) DEFAULT NULL COMMENT '更新人ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='消息表';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
