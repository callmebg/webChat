<template>
  <div class="textW">
    <textarea
      placeholder="Text Something Here..."
      v-model="text"
      v-focus
      :class="{active:isActive}"
      v-on:focus="isActive=true"
      v-on:blur="isActive=false"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['textContent'],
  data: function () {
    return {
      text: '',
      isActive: false
    }
  },
  methods: {},
  mounted: function () {
    this.text = this.textContent
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  watch: {
    text () {
      this.$emit('textChange', this.text)
    },
    textContent () {
      this.text = this.textContent
    }
  }
}
</script>

<style scoped>
  .textW {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 5px;
    width: 100%;
    height: 100px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .textW:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  textarea {
    height: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0 5px;
    font-size: 14px;
    color: #909399;
    resize: none;
    border: none;
    outline: none;
    overflow-x: hidden;
    word-break: break-all;
  }

  .active {
    color: #606266;
  }

  .el-scrollbar__wrap{
    overflow-x: hidden;
  }

</style>
