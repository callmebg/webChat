<template>
  <div class="container">
    <div class="header"></div>
    <div class="content">
      <ControlBar :userlist="userList" v-on:change="changeUser"></ControlBar>
      <msg-content :msglist="msgList" :title="to" v-on:send="sendMsg" v-on:image="sendImage"></msg-content>
    </div>
  </div>
</template>

<script>
import MsgContent from './views/MsgContent'
import ControlBar from './views/ControlBar'

export default {
  components: {
    MsgContent,
    ControlBar
  },
  data: function () {
    return {
      // 用户的ws链接
      // eslint-disable-next-line no-new-object
      wsLINK: null,
      // 用户名
      userName: '',
      // 消息序列
      msgList: [],

      // 在线用户序列
      userList: [],

      // 当前对话人物
      to: 'all',

      // 管理不同用户的消息记录
      userIndex: [
        // 初始项默认保存的用户消息
        {
          name: 'all',
          list: null
        }
      ]
    }
  },
  methods: {
    // 用户触发发送消息事件
    sendMsg: function (text) {
      console.log(text)
      // eslint-disable-next-line no-new-object
      var msgI = new Object()
      msgI.type = 'sendText'
      // eslint-disable-next-line no-new-object
      var data = new Object()
      data.to = this.to
      data.content = text.toString()
      msgI.data = data
      this.wsLINK.send(JSON.stringify(msgI))
    },

    // 发送图片消息
    sendImage (url) {
      console.log(url)
      var imgURL = window.location.href + url
      console.log(imgURL)
      var cc = '<a href="' + imgURL + '" target="_blank" style="text-decoration: none;color: inherit;font-size: 14px;">[ Click To Open File ]</a>'
      this.sendMsg(cc)
    },

    close () {
      var msgI = {}
      msgI.type = 'logout'
      this.wsLINK.send(JSON.stringify(msgI))
    },

    // 接受消息处理函数
    onMsg: function (recive) {
      var msg = JSON.parse(recive.data)
      // eslint-disable-next-line no-new-object
      var msgI = new Object()
      switch (msg.type) {
        // 系统信息，如上下线
        case 'system':
          msgI.type = 'sys'
          msgI.content = msg.data.content
          this.msgList.push(msgI)
          break
        case 'reciveText':
          this.addMsg(msg.data)
          break
        case 'reciveFile':

          break
        case 'iLogin':
          // 成功登陆
          if (msg.data.status === 10000) {
            msgI.type = 'sys'
            msgI.content = '登陆成功，欢迎来到聊天室'
            this.msgList.push(msgI)
          } else {
            msgI.type = 'sys'
            msgI.content = '登陆失败，请刷新重试'
            this.msgList.push(msgI)
          }
          break
        case 'login':
          msgI.type = 'sys'
          this.userList = msg.data.userList
          msgI.content = msg.data.userName + ' 进入了聊天室'
          this.msgList.push(msgI)
          break
        case 'logout':
          msgI.type = 'sys'
          this.userList = msg.data.userList
          msgI.content = msg.data.userName + ' 离开了聊天室'
          this.msgList.push(msgI)
          break
      }
    },

    // 用户切换处理
    changeUser: function (userName) {
      if (userName !== this.userName) {
        this.saveUser()
        // 加载新消息序列
        this.loadUser(userName)
      } else {
        this.saveUser()
        // 加载新消息序列
        this.loadUser('all')
      }
    },

    // 保存用户
    saveUser: function () {
      // 先判断是否在已有消息记录里
      var that = this
      for (var i = 0; i < that.userIndex.length; i++) {
        if (that.userIndex[i].name === that.to) {
          that.userIndex[i].list = that.msgList
          console.log('保存' + that.to)
          return
        }
      }

      // 创建新消息序列并保存
      var temp = {
        name: '',
        list: []
      }
      temp.name = that.to
      temp.list = this.msgList
      this.userIndex.push(temp)
      console.log('新建并保存' + that.to)
    },

    // 加载新用户的消息序列
    loadUser: function (name) {
      // 检查是否在用户索引之中
      var that = this
      that.to = name
      // 先判断是否在已有消息记录里
      for (let i = 0; i < that.userIndex.length; i++) {
        if (that.userIndex[i].name === name) {
          that.msgList = that.userIndex[i].list
          return
        }
      }
      that.msgList = []
    },

    // 添加进指定用户的消息对列
    addToUser: function (msgI, user) {
      // 判断发送消息的是当前对话还是未启用对话
      if (user === this.to) {
        this.msgList.push(msgI)
      } else {
        // 加入到新对列中
        // 检查是否在用户索引之中
        var that = this

        for (let i = 0; i < that.userIndex.length; i++) {
          if (that.userIndex[i].name === user) {
            that.userIndex[i].list.push(msgI)
            return
          }
        }

        // 若不在索引中 新建该用户的消息序列
        var temp = {}
        temp.name = user
        temp.list = []
        temp.list.push(msgI)
        that.userIndex.push(temp)
      }
    },

    // 接受消息
    addMsg: function (msg) {
      console.log(msg)
      var msgI = {}
      if (msg.from === this.userName) {
        // 这是用户自己发的消息
        msgI.type = 'my'
        msgI.content = msg.content

        // 判断to 查看是哪个消息对列
        console.log(msg.to)
        this.addToUser(msgI, msg.to)
      } else {
        // 他人发送给用户的消息
        msgI.type = 'user'
        msgI.content = msg.content
        msgI.from = msg.from
        var time = msg.time.split(' ')
        msgI.time = time[1]

        // 如果是私聊
        if (msg.to !== 'all') {
          this.addToUser(msgI, msg.from)
          console.log('add to ' + msg.from)
        } else {
          // 公共信息
          this.addToUser(msgI, 'all')
        }
      }
    },

    // 基础数据处理函数
    getTime () {
      var date = new Date()
      var time = date.toTimeString().split(' ')[0]
      return time
    },

    uuid: function (len, radix) {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
      var uuid = []
      var i
      radix = radix || chars.length

      if (len) {
        for (i = 0; i < len; i++) {
          uuid[i] = chars[0 | Math.random() * radix]
        }
      } else {
        var r

        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
        uuid[14] = '4'

        for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r = 0 | Math.random() * 16
            uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
          }
        }
      }

      return uuid.join('')
    }
  },
  created: function () {
    var uname = prompt('请输入用户名', 'user' + this.uuid(8, 16))
    var url = 'ws://' + document.domain.toString() + ':' + '12580'
    console.log(url)

    this.wsLINK = new WebSocket(url)
    this.userName = uname

    this.wsLINK.onmessage = this.onMsg
    // 发送登陆消息
    var that = this
    that.wsLINK.addEventListener('open', function () {
      var userLog = {
        type: 'login',
        data: {
          userName: that.userName
        }
      }
      that.wsLINK.send(JSON.stringify(userLog))
    })
  },
  mounted () {
    window.addEventListener('beforeunload', e => this.close())
  },
  destroyed () {
    window.removeEventListener('beforeunload', e => this.close())
  }
}
</script>

<style>
  .container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

  .header {
    height: 50px;
    flex-shrink: 0;
    background-color: #3e93ef;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    z-index: 10;
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: center;
    align-items: stretch;
    background-color: #ffffff;
  }

  * {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
