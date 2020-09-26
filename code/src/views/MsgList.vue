<template>
  <div class="msglist">
    <div class="chatHeader">{{title}}</div>
    <div class="msg" ref="cc" v-resize="wresize">
      <el-scrollbar ref="scrollbar" style="height:100%">
        <ul class="list">
          <div></div>
          <transition-group name="show" class="msgW">
            <template v-for="(msg,index) in list">
              <template v-if="msg.type==='user'">
                  <li :key="index">
                    <div class="msgItem">
                      <div class="msgImf">
                        <div class="user">{{msg.from}}</div>
                        <div class="time">{{msg.time}}</div>
                      </div>
                      <div class="msgContent">
                        <p v-html="msg.content"></p>
                      </div>
                    </div>
                  </li>
              </template>
              <template v-if="msg.type==='sys'">
                <li :key="index" class="sysL">
                  <div class="sysMsg">
                    <p>{{msg.content}}</p>
                  </div>
                </li>
              </template>
              <template v-if="msg.type==='my'">
                <li :key="index" class="myL">
                  <div class="myItem">
                    <div class="myContent">
                      <p v-html="msg.content"></p>
                    </div>
                  </div>
                </li>
              </template>
            </template>
          </transition-group>
        </ul>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsgList',
  props: ['list', 'title'],
  data: function () {
    return {}
  },
  methods: {
    wresize: function () {
      this.$refs.scrollbar.update()
      this.goDown()
    },

    goDown: function () {
      // eslint-disable-next-line no-unused-vars
      var msg = this.$refs.cc.querySelectorAll('li')
      if (msg.length !== 0) {
        msg[msg.length - 1].scrollIntoView(false)
      }
    }
  },
  updated: function () {
    this.$refs.scrollbar.update()
    this.goDown()
  },
  directives: {
    resize: {
      bind (el, binding) {
        let height = 0

        function isResize () {
          const style = document.defaultView.getComputedStyle(el)
          if (height !== style.height) {
            binding.value()
          }
          height = style.height
        }

        el.__interval = setInterval(isResize, 20)
      },
      unbind (el) {
        clearInterval(el.__interval)
      }
    }
  }
}
</script>

<style scoped>
  .msglist {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    overflow: hidden;
  }

  .chatHeader {
    flex-shrink: 0;
    flex-grow: 0;
    margin: 3px;
    height: 35px;
    background-color: #fff;
    color: #606266;
    text-align: center;
    font-size: 14px;
    line-height: 35px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .msg {
    height: 0;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
  }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }

  .msgW {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .sysL {
    align-self: center;
    list-style: none;
  }

  .myL {
    align-self: flex-end;
    list-style: none;
  }

  .file {
    text-decoration: none;
    color: white;
    font-size: 14px;
  }

  .sysMsg {
    display: inline-block;
    margin: 2px 3px;
    height: 20px;
    padding: 0 20px;
    border-radius: 10px;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    background-color: #e9e9eb;
    color: #909399;
  }

  .msgItem {
    display: flex;
    display: inline-block;
    margin: 5px 3px;
    margin-bottom: 3px;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background-color: #fff;
  }

  .myItem {
    display: inline-block;
    margin: 5px 3px;
    margin-bottom: 3px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background-color: #409eff;
  }

  .myItem:hover,
  .msgItem:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .user {
    float: left;
    font-size: 16px;
    line-height: 20px;
    color: #3e93ef;
  }

  .time {
    float: left;
    margin-left: 5px;
    font-size: 12px;
    line-height: 20px;
    color: #909399;
  }

  .msgContent {
    display: inline-block;
    margin-top: 5px;
  }

  .myContent {
    display: inline-block;
  }

  .myContent p {
    word-break: break-all;
    color: #ffffff;
    font-size: 14px;
  }

  .msgContent p {
    word-break: break-all;
    color: #606266;
    font-size: 14px;
  }

  .msgImf {
    height: 20px;
  }

  .show-enter-active {
    animation: msgIn 0.4s linear;
  }

  @keyframes msgIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
