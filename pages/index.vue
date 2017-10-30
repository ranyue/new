<template>
    <div class="index">
      <logo/>    
      <mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
          <el-button>默认按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button type="text">文字按钮</el-button>
 <nuxt-link to="/com">com</nuxt-link>
  <nuxt-link to="/com/one">com/one</nuxt-link>
  <nuxt-link to="/test">test</nuxt-link>
    </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  }
}
</script>

<style>
.index {
  font-size: 14px;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
