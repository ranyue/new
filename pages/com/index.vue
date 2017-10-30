<template>
  <div class="goToComplete">
    <div class="content">
      <!-- <mt-field label="用户名" placeholder="请输入姓名" v-model="customerInfo.customerName"></mt-field> -->
      <div class="sex">
        <span>性别</span>
        <div>
          <button :class="activeSex === 1 ? 'active' : '' " @click='handleSexClick'>男</button>
          <button :class="activeSex === 0 ? 'active' : '' " @click='handleSexClick'>女</button>
        </div>
      </div>
      <!-- <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="customerInfo.phone"></mt-field> -->
      <div class="code">
        <span>验证码</span>
        <input type="button" value="获取" @click="getCode" :draggable="isDisabled">
        <input v-model="code" placeholder="请输入验证码" type="number" pattern="\d*" />
      </div>
      <!-- <mt-field label="生日" placeholder="请输入生日" type="date" v-model="customerInfo.birthday" :disableClear="disable"></mt-field> -->
      <div class="adress">
        <span>家庭住址</span>
        <textarea placeholder="请输入家庭住址" v-model="customerInfo.address"></textarea>
      </div>
    </div>
    <div class="submit">
      <button @click="handleSubmit">确认提交</button>
    </div>
  <nuxt-link to="/com/one">com/one</nuxt-link>
  <nuxt-link to="/test">test</nuxt-link>
  </div>
</template>
<script>
// import Com from './../../service/common.js'
import Service from './../../plugins/service'
// import { Toast } from 'mint-ui'
export default {
  async asyncData (context) {
    let { data: info } = await Service.getInfo()
    console.log(info)
    if (info.errorCode === '0') {
      info.birthday = info.birthday ? info.birthday : '1990-01-01'
      return {
        customerInfo: info
      }
    }
  },
  data () {
    return {
      activeSex: 1,
      customerInfo: {},
      code: '',
      disable: true,
      isDisabled: false
    }
  },
  head: {
    title: '绑定',
    meta: [{ hid: 'description', name: 'description', content: '绑定用户账户' }]
  },
  methods: {
    handleSexClick () {
      this.activeSex = this.activeSex === 1 ? 0 : 1
    },
    handleSubmit (e) {
      e.preventDefault()
      // if (!this.customerInfo.customerName) {
      //   Toast({
      //     message: '姓名不能为空！',
      //     duration: 1000
      //   })
      //   return
      // }
      // if (!this.customerInfo.birthday) {
      //   Toast({
      //     message: '生日不能为空！',
      //     duration: 1000
      //   })
      //   return
      // }
      // if (!this.customerInfo.phone) {
      //   Toast({
      //     message: '手机号码不能为空！',
      //     duration: 1000
      //   })
      //   return
      // }
      // if (!(/^1[34578]\d{9}$/.test(this.customerInfo.phone))) {
      //   Toast({
      //     message: '手机号码有误！',
      //     duration: 1000
      //   })
      //   return
      // }
      // if (!this.code) {
      //   Toast({
      //     message: '验证码不能为空！',
      //     duration: 1000
      //   })
      //   return
      // }
      // Svc.PostNewAppiont({
      //   name: this.customerInfo.customerName,
      //   gender: this.activeSex === 1 ? 'M' : 'F',
      //   mobile: this.customerInfo.phone,
      //   birthday: this.customerInfo.birthday,
      //   address: this.customerInfo.address,
      //   confirm: this.code,
      //   operationType: 'fillIn'
      // }).then(res => {
      //   if (res.data.errorCode === '0') {
      //     Toast({
      //       message: '保存成功',
      //       duration: 1000
      //     })
      //     Com.jumpTo('main.html?menu=member-center')
      //   } else {
      //     Toast({
      //       message: '添加失败' + res.data.errorMsg,
      //       duration: 1000
      //     })
      //   }
      // })
      // .catch(e => {
      //   Toast({
      //     message: '添加失败' + e,
      //     duration: 1000
      //   })
      //   console.log(e)
      // })
    },
    getCode () {
      // if (!this.customerInfo.phone) {
      //   Toast({
      //     message: '手机号码不能为空！',
      //     duration: 1000
      //   })
      //   return
      // }
      // if (!(/^1[34578]\d{9}$/.test(this.customerInfo.phone))) {
      //   Toast({
      //     message: '手机号码有误！',
      //     duration: 1000
      //   })
      //   return
      // }
      // Svc.getVerifyCode(this.customerInfo.phone)
      // .then(res => {
      //   if (res.data.ok === '0') {
      //     Toast({
      //       message: '验证码已发送，请查看手机',
      //       duration: 1000
      //     })
      //     this.isDisabled = true
      //   } else {
      //     Toast({
      //       message: '发送验证码失败',
      //       duration: 1000
      //     })
      //     this.isDisabled = false
      //   }
      // })
      // .catch(e => {
      //   Toast({
      //     message: '发送验证码失败' + e,
      //     duration: 1000
      //   })
      //   this.isDisabled = false
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
.goToComplete {
  width: 100%;
  height: pxToRem(580px);
  background: #fff;
  font-size: pxToRem(16px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  font-size:14px;
  .content {
    > a {
      border-bottom: 1px solid #ccc;
    }
    div.sex {
      height: pxToRem(44px);
      display: flex;
      padding: 0 pxToRem(10px);
      align-items: center;
      border-bottom: 0.5px solid #ccc;
      > span {
        color: #3d3d3d;
        margin-right: pxToRem(67px);
      }
      > div {
        > button {
          outline: 0;
          border: none;
          background: #edf3f7;
          color: #c5c8d0;
          border-radius: 4px;
          width: pxToRem(44px);
          height: pxToRem(24px);
        }
      }
      .active {
        background: #00b9b2;
        color: #fff;
      }
    }
    .code {
      background: #ffffff;
      padding: 0 pxToRem(10px);
      height: pxToRem(44px);
      border-bottom: 0.5px solid #ccc;
      display: flex;
      align-items: center;
      input {
        outline: 0;
        border: none;
        font-size: pxToRem(14px);
      }
      > input[type="button"] {
        margin-left: pxToRem(51px);
        background: #00b9b2;
        border-radius: 4px;
        width: pxToRem(54px);
        height: pxToRem(24px);
        color: #fff;
        -webkit-appearance: none;
      }
      > input[type="number"] {
        margin-left: 30px;
        font-size: pxToRem(16px);
        width: pxToRem(130px);
      }
    }
    div.adress {
      padding: pxToRem(13px) pxToRem(10px);
      height: pxToRem(113px);
      display: flex;
      > span {
        margin-right: pxToRem(38px);
      }
      > textarea {
        width: pxToRem(225px);
        height: pxToRem(53px);
        outline: 0;
        margin-top: pxToRem(2px);
        padding: pxToRem(5px);
        font-size: pxToRem(16px);
        -webkit-appearance: none;
      }
    }
  }

  div.submit {
    background: #ffffff;
    width: 100%;
    height: pxToRem(49px);
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      background: #00b9b2;
      border-radius: 2px;
      width: pxToRem(343px);
      height: pxToRem(32px);
      outline: 0;
      border: none;
      color: #fff;
      font-size: pxToRem(16px);
    }
  }
}
</style>
