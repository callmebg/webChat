# -*- coding:utf8 -*-
import basic
import chat
import sqlite3

import time
import json
import asyncio
import websockets
import multiprocessing
from multiprocessing import Process

import random
import logging
from datetime import datetime
from flask import Flask, request, redirect

def server():
    #提供html
    app = Flask(__name__, static_url_path="", static_folder="static")
    @app.route("/")
    @app.route("/index.html")
    def index():
        #return "fuck"
        return app.send_static_file("index.html")
    @app.route("/get_ipport")
    def get_ipport():
        return json.dumps({"ip": basic.IP, "port": basic.PORT_CHAT})
    @app.route('/upload', methods=['POST', 'GET'])
    def upload():
        if request.method == 'POST':
            f = request.files['file']
            fuckPath = 'upload/' +  str(random.randint(0,999999999)) + str(f.filename)
            f.save('static/' + fuckPath)
            return fuckPath
        else:
            return "一个post接口，上传file"
    @app.errorhandler(404)
    def miss(e):
        return "别瞎搞鸭"
    @app.errorhandler(500)
    def error(e):
        return "服务器崩了"
    logging.basicConfig(format="%(levelname)s: %(message)s",
                        filename="web.log",
                        level=logging.INFO)
    app.run(host="0.0.0.0", port=basic.PORT_WEB, debug=False)


if __name__ == "__main__":
    #俩进程
    multiprocessing.freeze_support()

    conn = sqlite3.connect(basic.chatPath)
    cursor = conn.cursor()

    p_web_server = Process(target=server, daemon = True)
    p_web_server.start()
    p_chat_server = Process(target=chat.server, daemon = True)
    p_chat_server.start()

    #chat_server()
    print(basic.help_message)
    print("聊天室地址" + basic.IP + ":" + str(basic.PORT_WEB))

    while True:
        command = input(">>>")
        if command == "exit":
            break
        elif command == "notice":
            message = input("请输入公告：")
            asyncio.get_event_loop().run_until_complete(chat.god(command, message))
        elif command == "client":
            message = input("请输入json：")
            asyncio.get_event_loop().run_until_complete(chat.client_said(message))
        elif command == "getOut":
            message = input("请输入对方用户名：")
            asyncio.get_event_loop().run_until_complete(chat.god(command, message))
        elif command == "ban":
            message = input("请输入对方用户名：")
            asyncio.get_event_loop().run_until_complete(chat.god(command, message))
        elif command == "remove":
            message = input("请输入对方用户名：")
            asyncio.get_event_loop().run_until_complete(chat.god(command, message))
        elif command == "listOnline":
            message = ""
            asyncio.get_event_loop().run_until_complete(chat.god(command, message))
        elif command == "sql":
            sql = input("请输入sql：")
            # 执行语句
            results = cursor.execute(sql)

            # 遍历打印输出
            allAns = results.fetchall()
            for ans in allAns:
                print(ans)
            conn.close()

        elif command == "help":
            print(basic.help_message)
            
    cursor.close()
    p_web_server.terminate()
    #p_web.join()
    p_chat_server.terminate()
