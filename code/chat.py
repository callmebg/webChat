# -*- coding:utf8 -*-
import basic

import sqlite3
import json
from datetime import datetime
import asyncio
import websockets


def server():
    # 保存字典 名字:websockets
    USERS = {}
    ban = []
    connGod = sqlite3.connect(basic.chatPath)
    cursorGod = connGod.cursor()

    async def chat(websocket, path):
        # print(websocket.remote_address)
        # 握手
        myName = None
        conn = sqlite3.connect(basic.chatPath)
        cursor = conn.cursor()
        try:
            async for message in websocket:
                dt = datetime.now()  # 创建一个datetime类对象
                dtstr = dt.strftime('%Y-%m-%d %H:%M:%S')  # 2019-07-06 15:50:12
                print(message)
                data = json.loads(message)
                message = ""

                # 禁言了
                if myName in ban:
                    continue

                # 用户发信息
                if data["type"] == "sendText":
                    # 执行语句
                    results = cursor.execute("INSERT INTO messages (send, receive, context, releaseTime) VALUES (?, ?, ?, ?);", (
                        myName, data["data"]["to"], data["data"]["content"], dtstr))
                    conn.commit()

                    if data["data"]["to"] == "all":
                        message = makeMes(
                            myName, data["data"]["to"], data["data"]["content"], dtstr)
                    else:
                        if data["data"]["to"] in USERS.keys():
                            fuckmessage = makeMes(
                                myName, data["data"]["to"], data["data"]["content"], dtstr)

                            await USERS[data["data"]["to"]].send(fuckmessage)
                            await websocket.send(fuckmessage)
                # 用户发文件
                elif data["type"] == "sendFile":
                    # 执行语句
                    results = cursor.execute("INSERT INTO messages (send, receive, context, releaseTime) VALUES (?, ?, ?, ?);", (
                        myName, data["data"]["to"], data["data"]["url"], dtstr))
                    conn.commit()

                    if data["data"]["to"] == "all":
                        message = makeFile(data["data"]["fileName"], data["data"]["fileType"],
                                           myName, data["data"]["to"], data["data"]["url"], dtstr)
                    else:
                        if data["data"]["to"] in USERS.keys():
                            fuckmessage = makeFile(
                                data["data"]["fileName"], data["data"]["fileType"], myName, data["data"]["to"], data["data"]["url"], dtstr)

                            await USERS[data["data"]["to"]].send(fuckmessage)
                            await websocket.send(fuckmessage)
                # 用户登录
                elif data["type"] == "login":
                    myName = data["data"]["userName"]

                    # 执行语句
                    results = cursor.execute("INSERT INTO users (name, ip, port, loginTime) VALUES (?, ?, ?, ?);", (
                        myName, websocket.remote_address[0], websocket.remote_address[1], dtstr))
                    conn.commit()

                    if myName in USERS.keys() or myName == "all":
                        fuckmessage = json.dumps(
                            {
                                "type": "iLogin",
                                "data": {"status": "10001", "content": "名字'" + myName + "'被占用"}
                            }
                        )
                    else:
                        USERS[myName] = websocket
                        fuckmessage = json.dumps(
                            {
                                "type": "iLogin",
                                "data": {"status": 10000, "content": "成功登陆", "userList": list(USERS.keys())}
                            }
                        )
                        message = json.dumps(
                            {
                                "type": "login", "data": {"userName": myName, "userList": list(USERS.keys())}
                            }
                        )
                    await websocket.send(fuckmessage)
                # 用户退出
                elif data["type"] == "logout":
                    # 执行语句
                    results = cursor.execute(
                        "UPDATE users SET logoutTime = ? WHERE name = ?;", (dtstr, myName))
                    conn.commit()
                    cursor.close()

                    await USERS[myName].close()
                    del USERS[myName]
                    # print(USERS)
                    if len(USERS) != 0:  # asyncio.wait doesn"t accept an empty list
                        message = json.dumps(
                            {
                                "type": "logout", "data": {"userName": myName, "userList": list(USERS.keys())}
                            }
                        )

                elif data["type"] == "god":
                    await doGod(data["data"])

                if message != "":
                    # 群发
                    await asyncio.wait([user.send(message) for user in USERS.values()])
        except:
            dt = datetime.now()  # 创建一个datetime类对象
            dtstr = dt.strftime('%Y-%m-%d %H:%M:%S')  # 2019-07-06 15:50:12
            # 执行语句
            results = cursor.execute(
                "UPDATE users SET logoutTime = ? WHERE name = ?;", (dtstr, myName))
            conn.commit()
            cursor.close()

            await USERS[myName].close()
            del USERS[myName]
            if len(USERS) != 0:  # asyncio.wait doesn"t accept an empty list
                message = json.dumps(
                    {
                        "type": "logout", "data": {"userName": myName, "userList": list(USERS.keys())}
                    }
                )
            await asyncio.wait([user.send(message) for user in USERS.values()])

    # logging.basicConfig(format="%(asctime)s - %(pathname)s[line:%(lineno)d] - %(levelname)s: %(message)s",
    #                    filename="chat.log",
    #                    level=logging.INFO)

    async def doGod(data):
        message = ""
        dt = datetime.now()  # 创建一个datetime类对象
        dtstr = dt.strftime('%Y-%m-%d %H:%M:%S')  # 2019-07-06 15:50:12

        if data["what"] == "notice":
            results = cursorGod.execute("INSERT INTO notices (context, releaseTime) VALUES (?, ?);", (
                data["content"], dtstr))
            connGod.commit()
            message = json.dumps(
                {
                    "type": "system", "data": {"content": data["content"]}
                }
            )
        elif data["what"] == "getOut":
            if data["content"] not in USERS.keys():
                print("现在这人并没有登陆")
            else:
                # 打個招呼
                tmessage = json.dumps(
                    {
                        "type": "system", "data": {"content": data["content"] + " 被踢出去了"}
                    }
                )
                # 群发
                await asyncio.wait([user.send(tmessage) for user in USERS.values()])
                # 踢他
                await USERS[data["content"]].close()
                del USERS[data["content"]]
                if len(USERS) != 0:  # asyncio.wait doesn"t accept an empty list
                    message = json.dumps(
                        {
                            "type": "logout", "data": {"userName": data["content"], "userList": list(USERS.keys())}
                        }
                    )

        elif data["what"] == "ban":
            if data["content"] not in USERS.keys():
                print("现在'%s'并没有登陆" % (data["content"]))
            elif data["content"] in ban:
                print("现在'%s'已经被禁言了" % (data["content"]))
            else:
                ban.append(data["content"])
                if len(USERS) != 0:  # asyncio.wait doesn"t accept an empty list
                    message = json.dumps(
                        {
                            "type": "system", "data": {"content": data["content"] + " 被禁言了"}
                        }
                    )
        elif data["what"] == "remove":
            if data["content"] not in USERS.keys():
                print("现在'%s'并没有登陆" % (data["content"]))
            elif data["content"] not in ban:
                print("现在'%s'没有被禁言" % (data["content"]))
            else:
                ban.remove(data["content"])
                if len(USERS) != 0:  # asyncio.wait doesn"t accept an empty list
                    message = json.dumps(
                        {
                            "type": "system", "data": {"content": data["content"] + " 被解除禁言了"}
                        }
                    )
        elif data["what"] == "listOnline":
            print("在线成员名\tIP和端口\t是否被禁言")
            for i in USERS.keys():
                status = ""
                if i in ban:
                    status = "被禁言"
                else:
                    status = "未禁言"
                print(i + "\t" + str(USERS[i].remote_address) + "\t" + status)

        if message != "":
            # 群发
            await asyncio.wait([user.send(message) for user in USERS.values()])

    # 构造发送的message
    def makeMes(send, receive, content, mesTime):
        message = json.dumps(
            {
                "type": "reciveText",
                "data": {
                    "from": send,
                    "to": receive,
                    "content": content,
                    "time": mesTime
                }
            }
        )
        return message

    # 构造发送的file
    def makeFile(fileName, fileType, send, receive, url, mesTime):
        message = json.dumps(
            {
                "type": "reciveFile",
                "data": {
                    "fileName": fileName,
                    "fileType": fileType,
                    "from": send,
                    "to": receive,
                    "url": url,
                    "time": mesTime
                }
            }
        )
        return message

    # 提供聊天的后台
    start_server = websockets.serve(chat, "0.0.0.0", basic.PORT_CHAT)
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()


async def god(command, message):
    message = json.dumps({
        "type": "god",
        "data": {
            "what": command,
            "content": message
        }
    })
    async with websockets.client.connect(basic.URL) as websocket:
        await websocket.send(message)


async def client_said(message):
    async with websockets.client.connect(basic.URL) as websocket:
        await websocket.send(message)
