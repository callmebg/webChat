<template>
  <div class="inputW">
    <transition name="textIn">
      <TextInput
        v-show="flag"
        :text-content="textContent"
        v-on:textChange="textChange"
      ></TextInput>
    </transition>
    <button-list
      :flag="flag"
      v-on:upMsg="toggleShow"
      v-on:downMsg="toggleShow"
      v-on:clearMsg="clearText"
      v-on:sendMsg="sendText"
      v-on:image="image"
    >
    </button-list>
  </div>
</template>

<script>
import ButtonList from './ButtonList'
import TextInput from './TextInput'

export default {
  name: 'InputArea',
  components: {
    ButtonList,
    TextInput
  },
  data: function () {
    return {
      flag: false,
      textContent: ''
    }
  },
  methods: {
    toggleShow: function () {
      this.flag = !this.flag
    },
    textChange: function (text) {
      this.textContent = text
    },
    clearText: function () {
      this.textContent = ''
    },
    sendText: function () {
      if (this.textContent !== '') {
        this.$emit('send', this.textContent)
        this.textContent = ''
      }
    },
    image (e) {
      console.log(e)
      this.$emit('image', e)
    }
  }
}
</script>
<style scoped>
  .inputW {
    position: relative;
    padding-top: 3px;
    padding-left: 3px;
    padding-right: 3px;
    margin-top: 5px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .textIn-enter-active {
    animation: up 0.4s ease;
  }

  .textIn-leave-active {
    animation: up 0.4s ease reverse;
  }

  @keyframes up {
    0% {
      height: 0px;
      opacity: 0;
      border-radius: 2px;
    }
    100% {
      height: 100px;
      opacity: 1;
      border-radius: 5px;
    }
  }

</style>
