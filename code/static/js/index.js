// 存储用户名到全局变量,握手成功后发送给服务器
var uname = prompt('请输入用户名', 'user' + uuid(8, 16));
var url = "ws://" +
    document.getElementsByTagName("ipp")[0].getAttribute("ip") + ':' +
    document.getElementsByTagName("ipp")[0].getAttribute("port");
console.log(url);
var ws = new WebSocket(url);
ws.onopen = function() {
    var data = "系统消息：建立连接成功";
    listMsg(data);
};

/**
 * 分析服务器返回信息
 *
 * msg.type : user 普通信息;system 系统信息;handshake 握手信息;login 登陆信息; logout 退出信息;
 * msg.from : 消息来源
 * msg.content: 消息内容
 */
ws.onmessage = function(e) {
    var msg = JSON.parse(e.data);
    var sender, user_name, name_list, change_type;

    switch (msg.type) {
        case 'system':
            sender = '系统消息: ';
            break;
        case 'user':
            sender = msg.from + ': ';
            break;
        case 'handshake':
            var user_info = {
                'type': 'login',
                'content': uname
            };
            sendMsg(user_info);
            return;
        case 'login':
        case 'logout':
            user_name = msg.content;
            name_list = msg.user_list;
            change_type = msg.type;
            dealUser(user_name, change_type, name_list);
            return;
    }

    var data = sender + msg.content;
    listMsg(data);
};

ws.onerror = function() {
    var data = "系统消息 : 出错了,请退出重试.";
    listMsg(data);
};

//窗口关闭时，发信息给服务器，说明下线了
window.onbeforeunload = function() {　　
    var user_info = {
        'type': 'logout',
        'content': uname
    };
    sendMsg(user_info);
    ws.close();
}

/**
 * 在输入框内按下回车键时发送消息
 *
 * @param event
 *
 * @returns {boolean}
 */
function confirm(event) {
    var key_num = event.keyCode;
    if (13 == key_num) {
        send();
    } else {
        return false;
    }
}

/**
 * 发送并清空消息输入框内的消息
 */
function send() {
    var msg_box = document.getElementById("msg_box");
    var content = msg_box.value;
    var reg = new RegExp("\r\n", "g");
    content = content.replace(reg, "");
    var msg = {
        'content': content.trim(),
        'type': 'send'
    };
    sendMsg(msg);
    msg_box.value = '';
    // todo 清除换行符
}

/**
 * 将消息内容添加到输出框中,并将滚动条滚动到最下方
 */
function listMsg(data) {
    var msg_list = document.getElementById("msg_list");
    var msg = document.createElement("p");

    msg.innerHTML = data;
    msg_list.appendChild(msg);
    msg_list.scrollTop = msg_list.scrollHeight;
}

/**
 * 处理用户登陆消息
 *
 * @param user_name 用户名
 * @param type  login/logout
 * @param name_list 用户列表
 */
function dealUser(user_name, type, name_list) {
    var user_list = document.getElementById("user_list");
    var user_num = document.getElementById("user_num");
    while (user_list.hasChildNodes()) {
        user_list.removeChild(user_list.firstChild);
    }

    for (var index in name_list) {
        var user = document.createElement("p");
        user.innerHTML = name_list[index];
        user_list.appendChild(user);
    }
    user_num.innerHTML = name_list.length;
    user_list.scrollTop = user_list.scrollHeight;

    var change = type == 'login' ? '上线' : '下线';

    var data = '系统消息: ' + user_name + ' 已' + change;
    listMsg(data);
}

/**
 * 将数据转为json并发送
 * @param msg
 */
function sendMsg(msg) {
    var data = JSON.stringify(msg);
    ws.send(data);
}

/**
 * 生产一个全局唯一ID作为用户名的默认值;
 *
 * @param len
 * @param radix
 * @returns {string}
 */
function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        var r;

        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}
