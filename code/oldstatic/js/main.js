const ps = new PerfectScrollbar('.msg');

function scrollD() {
    var msgList = document.querySelectorAll('li');
    msgList[msgList.length - 1].scrollIntoView(false);
}

function addMsg(username, time, content) {
    var $msgItem = $('<li class="msgItem"></li>');
    var $msgTag = $('<div class="msgTag"></div>');
    var $msgText = $('<div class="msgText"><p></p></div>');
    var $userN = $('<p class="userName"></p>');
    var $msgTime = $('<p class="msgTime"></p>');

    $msgText.find('p').text(content);
    $userN.text(username);
    $msgTime.text(time);

    $msgTag.append($userN).append($msgTime).appendTo($msgItem);
    $msgItem.append($msgText);

    $msgItem.css("display", "none");
    $('.msgList').append($msgItem);
    $msgItem.fadeIn(250);
    ps.update();
    scrollD();
}

function addSysMsg(content) {
    var $msgItem = $('<li class="msgSys"><p></p></li>');
    $msgItem.find('p').text('系统消息: ' + content);
    $('.msgList').append($msgItem);
    ps.update();
    scrollD();
}

function getTime() {
    var date = new Date();
    var time = date.toTimeString().split(' ')[0];
    return time;
}


// 存储用户名到全局变量,握手成功后发送给服务器
var uname = prompt('请输入用户名', 'user' + uuid(8, 16));
console.log(document.domain.toString())
var url = "ws://" + document.domain.toString() + ':' + '12580';
console.log(url);
var ws = new WebSocket(url);

ws.onopen = function() {
    addSysMsg("建立连接成功");
    var user_info = {
        'type': 'login',
        'data': {
            'userName': uname
        }
    };
    sendMsg(user_info);
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
    console.log(msg);
    switch (msg.type) {
        // 系统信息，如上下线
        case 'system':
            addSysMsg(msg.data.content);
            break;
        case 'reciveText':
            addMsg(msg.data.from, msg.data.time, msg.data.content);
            break;
        case 'reciveFile':
            addMsg(msg.data.from, msg.data.time, msg.data.url);
            break;
        case 'iLogin':
            // 成功登陆
            if (msg.data.status == 10000) {
                addMsg("要移动到左边的当前在线列表" + msg.data.userList)
            } else {
                addMsg("错误信息" + msg.data.content)
            }
            break;
        case 'login':
            addSysMsg(msg.data.userName + "上线")
            break
        case 'logout':
            addSysMsg(msg.data.userName + "下线")
            break
    }
};

ws.onerror = function() {
    addSysMsg('出错了请推出重试');
};

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

function sendMsg(msg) {
    var data = JSON.stringify(msg);
    ws.send(data);
}

$('.send').bind('click', function() {
    if ($('#userInput').val() == "") {
        return false;
    }
    var content = $('#userInput').val();
    var reg = new RegExp("\r\n", "g");
    content = content.replace(reg, "");
    var msg = {
        'type': 'sendText',
        'data': {
            'to': 'all',
            'content': content.trim()
        }
    };
    sendMsg(msg);
    console.log(msg);
    $('#userInput').val("");
    return false;
})

$('.delete').bind('click', function() {
    $('#userInput').val("");
})

window.onbeforeunload = function() {
    var user_info = {
        'type': 'logout'
    };
    sendMsg(user_info);
    ws.close();
}