<template>
  <div class="wrapper">
    <MsgList :list="msglist" :title="title"></MsgList>
    <InputArea v-on:send="sendMsg" v-on:image="image"></InputArea>
  </div>
</template>

<script>
import InputArea from './InputArea'
import MsgList from './MsgList'

export default {
  name: 'MsgContent',
  components: {
    InputArea,
    MsgList
  },
  props: ['msglist', 'title'],
  data: function () {
    return {}
  },
  methods: {
    sendMsg (event) {
      this.$emit('send', event)
    },
    image (e) {
      console.log(e)
      this.$emit('image', e)
    }
  }
}
</script>
<style scoped>
  .wrapper {
    display: flex;
    padding: 5px;
    flex-direction: column;
    flex-shrink: 1;
    flex-grow: 0;
    width: 900px;
  }
</style>
