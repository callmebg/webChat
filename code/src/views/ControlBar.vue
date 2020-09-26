<template>
  <el-row>
    <el-col class="control hidden-xs-only">
      <div class="wrapper">
        <div class="userInf">
          <div class="userName">用户名</div>
          <div class="online">
            <div class="listName">在线列表</div>
            <div class="onlineList">
              <ul>
                <li class="userItem" v-for="(name,index) in userlist" :key="index" :data-id="name" v-on:click="change">{{name}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'ControlBar',
  props: ['userlist'],
  methods: {
    change: function (event) {
      console.log(event.target.dataset.id)
      this.$emit('change', event.target.dataset.id)
    }
  }
}
</script>

<style scoped>
  .control {
    padding: 5px;
    height: 100%;
    width: 250px;
    flex-shrink: 0;
    flex-grow: 0;
    overflow: auto;
  }

  .wrapper {
    margin-top: 3px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background-color: #fff;
  }

  .userName {
    padding: 10px;
    font-size: 16px;
    color: #3e93ef;
    border-bottom: 1px solid #f4f4f5;
  }

  .listName {
    padding: 3px 10px;
    font-size: 14px;
    color: #909399;
  }

  .onlineList {
  }

  .userItem {
    padding: 5px 10px;
    color: #303133;
  }
</style>
