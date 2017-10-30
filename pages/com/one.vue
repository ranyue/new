<template>
  <div class="one">测试路由
      <span>你好</span>
      <nuxt-link to="/com">com</nuxt-link>
  <nuxt-link to="/com/one">com/one</nuxt-link>
  <nuxt-link to="/test">test</nuxt-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Service: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.one{
    font-size: 14px;
    >span{
        color:#ccc;
    }
}
</style>
