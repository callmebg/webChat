# -*- coding:utf8 -*-

import json
import socket
import asyncio
import logging
import websockets
import multiprocessing
from multiprocessing import Process
from flask import Flask, render_template, request

IP = '127.0.0.1'
PORT_WEB = 800
PORT_CHAT = 1234

# 此方法利用UDP协议，生成一个UDP包，将自己的IP放入UDP协议头中，然后再从中获取本机的IP。此方法虽然不会真实向外发包，但仍然会申请一个UDP的端口
try:
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(('8.8.8.8', 80))
    IP = s.getsockname()[0]
finally:
    s.close()


# 保存字典 名字:websockets
USERS = {}

#提供html
app = Flask(__name__)
@app.route('/')
@app.route('/index')
def index_chat():
    return render_template("index.html", ip=IP, port=PORT_CHAT)

@app.errorhandler(404)
def miss(e):
    return render_template('404.html')
 
@app.errorhandler(500)
def error(e):
    return render_template('500.html')
def web():
    app.run(host='0.0.0.0', port=PORT_WEB)


#提供聊天的后台
async def chat(websocket, path):
    logging.basicConfig(format='%(asctime)s - %(pathname)s[line:%(lineno)d] - %(levelname)s: %(message)s',
                        filename="chat.log",
                        level=logging.INFO)
    # 握手
    await websocket.send(json.dumps({"type": "handshake"}))
    async for message in websocket:
        data = json.loads(message)
        message = ''
        # 用户发信息
        if data["type"] == 'send':
            name = '404'
            for k, v in USERS.items():
                if v == websocket:
                    name = k
            data["from"] = name
            if len(USERS) != 0:  # asyncio.wait doesn't accept an empty list
                message = json.dumps(
                    {"type": "user", "content": data["content"], "from": name})
        # 用户登录
        elif data["type"] == 'login':
            USERS[data["content"]] = websocket
            if len(USERS) != 0:  # asyncio.wait doesn't accept an empty list
                message = json.dumps(
                    {"type": "login", "content": data["content"], "user_list": list(USERS.keys())})
        # 用户退出
        elif data["type"] == 'logout':
            del USERS[data["content"]]
            if len(USERS) != 0:  # asyncio.wait doesn't accept an empty list
                message = json.dumps(
                    {"type": "logout", "content": data["content"], "user_list": list(USERS.keys())})
        #打印聊天信息到日志
        logging.info(data)
        # 群发
        await asyncio.wait([user.send(message) for user in USERS.values()])

def chat_server():
    start_server = websockets.serve(chat, '0.0.0.0', PORT_CHAT)
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()


if __name__ == "__main__":
    multiprocessing.freeze_support()
    p_web = Process(target=web, daemon = True)
    p_web.start()
    p_chat_server = Process(target=chat_server, daemon = True)
    p_chat_server.start()

    print("按下ctrl + c 结束程序。聊天记录将保存在chat.log")
    print("聊天室地址" + IP + ':' + str(PORT_WEB))
    p_web.join()
    p_chat_server.terminate()
