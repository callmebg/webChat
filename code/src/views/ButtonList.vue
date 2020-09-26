<template>
  <div class="butW">
    <transition name="buttonU">
      <button class="inputBtn el-icon-edit upBtn" v-show="!flag" @click="uptext"></button>
    </transition>
    <transition name="buttonI">
      <div class="inputBtn el-icon-picture-outline imageBtn" v-show="flag"><input type="file" class="inputW" @change.stop="select($event)" ref="InputFile"></div>
    </transition>
    <transition name="buttonS">
      <button class="inputBtn el-icon-upload2 sendBtn" v-show="flag" @click="sendtext"></button>
    </transition>
    <transition name="buttonC">
      <button class="inputBtn el-icon-delete clearBtn" v-show="flag" @click="cleartext"></button>
    </transition>
    <transition name="buttonD">
      <button class="inputBtn el-icon-bottom downBtn" v-show="flag" @click="downtext"></button>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ButtonList',
  props: ['flag'],
  methods: {
    uptext: function () {
      this.$emit('upMsg')
    },

    downtext: function () {
      this.$emit('downMsg')
    },

    cleartext: function () {
      this.$emit('clearMsg')
    },

    sendtext: function () {
      this.$emit('sendMsg')
    },

    select: function (event) {
      console.log(this.$refs.InputFile.files[0])
      var fileData = this.$refs.InputFile.files[0]
      var fd = new FormData()
      fd.append('file', fileData)
      console.log(fd)
      var url = '/upload'
      var config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      var that = this
      this.$axios.post(url, fd, config)
        .then(res => {
          console.log(res.data)
          // 发送返回的链接
          that.$emit('image', res.data)
        })
    }
  }
}
</script>

<style scoped>
  .butW {
    position: relative;
    height: 60px;
  }

  .inputBtn {
    position: absolute;
    right: 0px;
    bottom: 5px;
    padding: 0;
    width: 50px;
    height: 50px;
    color: white;
    font-size: 25px;
    line-height: 50px;
    border-radius: 25px;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .12), 0 0 8px rgba(0, 0, 0, .04);
    outline: none;
  }

  .inputBtn,
  .inputBtn:active {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .imageBtn {
    background-color: #409EFF;
    right: 183px;
    text-align: center;
  }

  .inputW {
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
  }

  .upBtn {
    background-color: #79bbff;
    right: 3px;
  }
  .upBtn:active,
  .upBtn:hover{
    background-color: #409EFF;
  }

  .downBtn {
    background-color: #79bbff;
    right: 3px;
  }
  .downBtn:active,
  .downBtn:hover{
    background-color: #409EFF;
  }

  .sendBtn {
    background-color: #67c23a;
    right: 123px;
  }
  .sendBtn:active {
    background-color: #67c23a;
  }

  .clearBtn {
    background-color: #F56C6C;
    right: 63px;
  }
  .clearBtn:active {
    background-color: #F56C6C;
    right: 63px;
  }

  .buttonU-enter-active {
    animation: Uin 0.4s linear;
  }

  .buttonU-leave-active {
    animation: Uin 0.4s linear reverse;
  }

  .buttonD-enter-active {
    animation: Din 0.4s linear;
  }

  .buttonD-leave-active {
    animation: Din 0.4s linear reverse;
  }

  .buttonC-enter-active {
    animation: Cin 0.4s linear;
  }

  .buttonC-leave-active {
    animation: Cin 0.4s linear reverse;
  }

  .buttonS-enter-active {
    animation: Sin 0.4s linear;
  }

  .buttonS-leave-active {
    animation: Sin 0.4s linear reverse;
  }

  .buttonI-enter-active {
    animation: Iin 0.4s linear;
  }

  .buttonI-leave-active {
    animation: Iin 0.4s linear reverse;
  }

  @keyframes Uin {
    0% {
      transform: translateX(53px) rotate(55deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0px) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes Din {
    0% {
      transform: translateX(-103px) rotate(-45deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0px) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes Cin {
    0% {
      transform: translateX(-153px) rotate(-90deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0px) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes Sin {
    0% {
      transform: translateX(-203px) rotate(-135deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0px) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes Iin {
    0% {
      transform: translateX(-253px) rotate(-180deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0px) rotate(0deg);
      opacity: 1;
    }
  }
</style>
