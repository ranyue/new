<template>
  <div class="test">{{Service}}
       <nuxt-link to="/com">com</nuxt-link>
  <nuxt-link to="/com/one">com/one</nuxt-link>
  </div>
  
</template>
<script>
import Service from './../../plugins/service'
export default {
  data () {
    return {
      Service: ''
    }
  },
  mounted () {
    console.log(Service)
  }
}
</script>
<style lang="scss" scoped>
.test {
    font-size: 14px;
}
</style>

