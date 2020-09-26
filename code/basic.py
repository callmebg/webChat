# -*- coding:utf8 -*-
import os
import socket
import sqlite3

IP = "127.0.0.1"
PORT_WEB = 12138
PORT_CHAT = 12580

# 此方法利用UDP协议，生成一个UDP包，将自己的IP放入UDP协议头中，然后再从中获取本机的IP。此方法虽然不会真实向外发包，但仍然会申请一个UDP的端口
try:
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(("8.8.8.8", 80))
    IP = s.getsockname()[0]
finally:
    s.close()

# 建立upload文件夹存放文件
uploadPath = './static/upload'
if not os.path.exists(uploadPath):     #判断当前路径是否存在，没有则创建new文件夹
    os.makedirs(uploadPath)

# 建立chat 数据库
chatPath = './chat.db'
if not os.path.exists(chatPath):     #判断当前路径是否存在，没有则创建new文件夹
    # '''创建一个数据库，文件名'''
    conn = sqlite3.connect(chatPath)
    # '''创建游标'''
    cursor = conn.cursor()

    # '''执行语句'''

    sql = '''create table users (
            name text,
            ip text,
            port int,
            loginTime text,
            logoutTime text)'''
    cursor.execute(sql)
    sql = '''create table notices (
            context text,
            releaseTime text)'''
    cursor.execute(sql)
    sql = '''create table messages (
            send text,
            receive text,
            context text,
            releaseTime text)'''
    cursor.execute(sql)

    conn.commit()
    # '''使用游标关闭数据库的链接'''
    cursor.close()


URL = "ws://" + str(IP) + ":" + str(PORT_CHAT)
help_message = '''帮助信息：
1.键入exit 结束程序
2.键入notice 发布公告
3.键入listOnline 列出在线成员
4.键入getOut 踢某人出聊天室
5.键入ban 禁言某人
6.键入remove 解除禁言
7.键入sql 进入数据库

'''