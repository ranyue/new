import common from './common'
import {
  Indicator
} from 'mint-ui'
let Axios = require('axios')
let Cookie = require('js-cookie')
// import mock from './mock'
// mock(Axios)

function formateParams (params) {
  if (!params) {
    return ''
  }
  let str = ''
  Object.keys(params).map(item => {
    if (params[item]) {
      str += `${item}=${params[item]}&`
    }
  })
  if (str !== '') {
    str = `?${str}`
    str = str.substring(0, str.length - 1)
  }
  return str
}

function handleResp (promise) {
  return promise.then(({data: {ok, data, datas, errorMsg, errorCode}}) => {
    if (ok || Number(errorCode) === 0) {
      return data || datas
    } else {
      throw errorMsg
    }
  }).catch((e) => {
    console.log(e)
  })
}

function Service () {
  let env = process.env.NODE_ENV
  let self = this

  let axiosIns = null

  if (env === 'development') {
    axiosIns = Axios.create({
      timeout: 10000,
      baseURL: 'http://scrmdental.lctest.cn'
      // baseURL: 'http://scrm2.lctest.cn'
      // baseURL: 'http://localhost:8080'
    })
  } else {
    axiosIns = Axios.create({
      timeout: 10000
    })
  }

  axiosIns.interceptors.request.use(function (config) {
    // Do something before request is sent
    Indicator.open('加载中...')
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  })

  axiosIns.interceptors.response.use(function (response) {
    Indicator.close()
    return response
  }, function (error) {
    Indicator.close()
    // Do something with response error
    return Promise.reject(error)
  })

  self.TOKEN_KEY = 'Authorization'

  self.IS_LOGIN = 'IS_LOGIN'

  axiosIns.defaults.headers.common[self.TOKEN_KEY] = getToken()

  function getToken () {
    if (env === 'development') {
      return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXMiOiI0NjYzOTkiLCJpc3MiOiJsYyIsIm9pZCI6Im8tRVpXd1pEQnFkRTAwanFQbExqRnFaeDhIT3MiLCJleHAiOjE1MDk0NTY5ODMsImlhdCI6MTUwODU5Mjk4MywiYWlkIjoid3g2NjhlYTgxM2UzNGM1Yjc2In0.LWSXxcYZi8ck3lK-PsHxulcW_I__umAb5OZYWDCqgrY'
    } else {
      let token = Cookie.get(self.TOKEN_KEY)
      if (!token) {
        common.jumpTo('/static/bad.html')
      }
      return token
    }
  }

  self.getStatus = flag => {
    return Cookie.get(flag)
  }

  self.setCookie = Cookie.set

  self.getVerifyCode = function (phone) {
    let data = new FormData()
    data.append('mobile', phone)

    return axiosIns.post('/wx/sendVerifyCode', data)
  }

  self.login = function (phone, code) {
    let loginData = new FormData()
    loginData.append('mobile', phone)
    loginData.append('confirm', code)

    return axiosIns.post('/wx/wxuser/login', loginData)
  }

  self.getInfo = function (params) {
    let str = formateParams(params)
    return axiosIns.get('/wechat/api/v1/customer/info' + str)
  }

  self.getInfo_post = function (params) {
    return axiosIns.post('/wechat/api/v1/customer/info', params)
  }
  self.getSubToTal = function (params) {
    let str = formateParams(params)
    return axiosIns.get(`/wechat/api/v1/customer/account/asset/subtotal${str}`)
  }

  self.getCaseList = function (params) {
    let str = formateParams(params)
    return axiosIns.get(`/wechat/api/v1/customer/emr${str}`)
  }

  self.getCaseDetail = function (id) {
    return axiosIns.get('/wechat/api/v1/emr/' + id)
  }

  self.getPrescriptions = function () {
    return axiosIns.get('/wechat/api/v1/customer/prescription')
  }

  self.getPrepaidDetail = function (params) {
    let str = formateParams(params)
    return axiosIns.get(`/wechat/api/v1/customer/account/prepaid/detail${str}`)
  }

  self.getDetail = function (params) {
    let str = formateParams(params)
    return axiosIns.get(`/wechat/api/v1/account/journal${str}`)
  }

  self.getCoupons = function (params) {
    if (params) {
      return axiosIns.get(`/wechat/api/v1/customer/coupon?customerId=${params}`)
    }
    return axiosIns.get('/wechat/api/v1/customer/coupon')
  }

  self.getCouponById = id => {
    return axiosIns.get(`/xcrm/api/v1/wx/wxuser/fanscoupondetail/${id}`)
  }

  //  拉去所有预约记录列表
  self.getAppointment = function ({customerId}) {
    if (customerId) {
      return axiosIns.get(`/wechat/api/v1/customer/appointment?customerId=${customerId}`)
    } else {
      return axiosIns.get('/wechat/api/v1/customer/appointment')
    }
  }

  self.getOrderList = function (params) {
    let str = formateParams(params)
    return axiosIns.get(`/wechat/api/v1/customer/order${str}`)
  }

  self.getOrderDetail = function (orderId) {
    return axiosIns.get('/wechat/api/v1/order/' + orderId)
  }

  self.getExecutionPlansOfCustomer = function () {
    return axiosIns.get('/wechat/api/v1/customer/executionPlan')
  }

  self.getCouponInfos = (id) => {
    let paramStr = id ? ('?clinicInfoid=' + id) : ''
    return axiosIns.get('/wx/wxuser/allcouponinfo' + paramStr)
  }

  self.getCouponActInfo = params => {
    return axiosIns.get('/wx/couponpromotion/allcouponinfo', params)
  }

  self.getClinicInfos = () => {
    return axiosIns.get('/wx/wxuser/clinicinfo')
  }

  self.getCouponsNum = () => {
    return axiosIns.get('/wx/wxuser/fanscouponnum')
  }

  self.getCouponDetailById = id => {
    return axiosIns.get(`/wx/wxuser/fanscoupondetail/${id}`)
  }

  self.getCouponDetailByAct = shareCode => {
    return axiosIns.get(`/wx/couponpromotion/fanscoupondetail/${shareCode}`)
  }

  self.receiveCoupon = (activityId, couponId, params) => {
    return axiosIns.post(`/xcrm/api/v1/wx/fans/coupon/${activityId}/${couponId}/get?mobile=${params.mobile}&confirm=${params.confirm}`)
  }

  self.getAllReceivedCoupons = () => {
    return axiosIns.get('/wx/wxuser/fanscouponinfo')
  }

  self.getAllDoctors = () => {
    return axiosIns.get('/wechat/api/v1/visit/doctors')
  }

  self.getScheduleById = params => {
    return axiosIns.get('/xcrm/api/v1/wx/schedule', {
      params
    })
  }

  self.getAppointDetailById = ({id}) => {
    return axiosIns.get(`/wechat/api/v1/appointment/${id}`)
  }

  self.appoint = params => {
    return axiosIns.post('/wechat/api/v1/appointment', params)
  }

  self.getMaterialListByPage = (params, flag) => {
    return axiosIns.get(`/xcrm/api/v1/wx/material/group/${flag}`, {
      params
    })
  }

  self.getNavigationSet = pageName => {
    return axiosIns.get(`/xcrm/api/v1/wxWebsite/wx/find/${pageName}`)
  }

  self.getMedicalOrderList = (params) => {
    return axiosIns.get('/xcrm/api/v1/wx/material/medical-order', {
      params
    })
  }

  self.getClinicNavList = (params) => {
    return axiosIns.get('/xcrm/api/v1/wx/organization/clinic')
  }

  self.getAllExperts = (clinicId) => {
    return axiosIns.get(`/xcrm/api/v1/wx/organization/expert`)
  }

  self.register = (params) => {
    return axiosIns.post('/xcrm/api/v1/wx/account/reg', params)
  }

  self.fillInfo = params => {
    return axiosIns.post('/xcrm/api/v1/account/updatebasicinfo', params)
  }
  //  评价的id 找一条评价
  self.getEvaluationInfosById = id => {
    return axiosIns.get(`/xcrm/api/v1/wx/survey/satisfaction/${id}`)
  }
  // 预约 ID 找一条评价
  self.getEvaluationInfosByAptId = id => {
    return axiosIns.get(`/xcrm/api/v1/wx/survey/apptSatisfaction/${id}`)
  }

  self.getAppointStatus = () => {
    return axiosIns.get('/xcrm/api/v1/wx/member/context/appointment')
  }

  self.getMemberStatus = () => {
    return axiosIns.get('/xcrm/api/v1/wx/member/context/member-center')
  }

  // 提交评价
  self.setSatisfactionResponse = (id, params) => {
    return axiosIns.put(`/xcrm/api/v1/wx/survey/satisfaction/${id}/response`, params)
  }

  self.getTicket = url => {
    return axiosIns.get(`/xcrm/api/v1/jsapi/ticket`, {
      params: {
        url
      }
    })
  }

  self.getNoAuthTicket = (url, appId) => {
    return axiosIns.get(`/xcrm/api/v1/jsapi/ticketNoToken`, {
      params: {
        url,
        appId
      }
    })
  }

  self.confirmMsg = (note, appointId) => {
    return axiosIns.post(`/wechat/api/v1/appointment/${appointId}/confirm`, {
      note
    })
  }

  self.getClinicDoctors = (longitude, latitude) => {
    let params = {}
    if (longitude && latitude) {
      params = {
        longitude,
        latitude
      }
    }
    return axiosIns.get(`/xcrm/api/v1/wx/visit/clinicDoctors`, {
      params
    })
  }

  self.cancelApt = (appointmentId, note) => {
    return axiosIns.post(`/xcrm/api/v1/wx/appointment/${appointmentId}/cancel`, {
      note
    })
  }

  // self.getActivitySummary = activityId => {
  //   return axiosIns.get(`/xcrm/api/v1/wx/promotionpage/find/${activityId}`)
  // }

  self.getAssistStatus = (activityId, owner) => {
    return axiosIns.get(`/xcrm/api/v1/wx/promotion/help/${activityId}/${owner}`)
  }

  self.assistActivity = (activityId, owner) => {
    return axiosIns.post(`/xcrm/api/v1/wx/promotion/help/${activityId}/${owner}`)
  }

  /**
   * Check how many people have assisted the owner's sharing.
   * @param activityId
   * @param owner The owner's openId. Generally, get it from the sharing URL.
   */
  self.queryActivityAssist = (activityId, owner) => {
    return axiosIns.get(`/xcrm/api/v1/wx/promotionpage/help/${activityId}/${owner}`)
  }

  /**
   * Get the site Qrcode info.
   */
  self.getAuthorizerInfo = () => {
    return axiosIns.get('/xcrm/api/v1/wx/getAuthorizerInfo')
  }

  self.shareActivity = activityId => {
    return axiosIns.get(`/xcrm/api/v1/wx/promotionreport/forward/${activityId}`)
  }

  self.shareCouponActivity = (activityId, couponId) => {
    return axiosIns.get(`/xcrm/api/v1/wx/couponpromotion/forward/${activityId}/${couponId}`)
  }
  // 获取病情描叙
  self.getDiseaseDesc = () => {
    return axiosIns.get('/xcrm/api/v1/illnessDesc/wx/find')
  }
  // 获取诊所 预约分类列表
  self.getAppointmentClassificationItems = clinicId => {
    return axiosIns.get(`/xcrm/api/v1/appointClassificationItems/wx/find/${clinicId}`)
  }

  self.getClinicInfoList = () => {
    return axiosIns.get('/xcrm/api/v1/clinic/wx/infoList')
  }

  self.getDoctorsByClinicId = clinicId => {
    return axiosIns.get(`/xcrm/api/v1/wx/introduction/doctors/${clinicId}`)
  }

  self.queryDoctors = clinicId => {
    return axiosIns.get('/xcrm/api/v1/wx/organization/expert', {params: {clinicId}})
  }

  // This is not doctor ID.
  self.getDoctorById = id => {
    return axiosIns.get(`/xcrm/api/v1/wx/introduction/doctor/${id}`)
  }

  self.getClinicById = clinicId => {
    return axiosIns.get(`/xcrm/api/v1/clinic/wx/clinicInfo/${clinicId}`)
  }

  self.getMenuSet = pageName => {
    return axiosIns.get(`/xcrm/api/v1/wx/displayOption/${pageName}`)
  }

  self.getAppiontList = () => {
    return axiosIns.get('/xcrm/api/v1/wx/member/customer/list')
  }

  // 保存联系人
  self.PostNewAppiont = (params) => {
    return axiosIns.post('/xcrm/api/v1/wx/member/customer/save', params)
  }

  // 输入验证码和手机号码绑定客户
  self.clientBinding = (params) => {
    return axiosIns.post('/wx/validVerifyCode', params)
  }

  // 手机号码解绑
  self.unbindPhone = (params) => {
    return axiosIns.post('/xcrm/api/v1/app/wx/unbind', params)
  }

  //  手机号码绑定
  self.bindPhone = (params) => {
    return axiosIns.post('/pc/api/v1/wx/userBunding', params)
  }

  self.getEvaluateList = ({customerId}) => {
    if (customerId) {
      return axiosIns.get(`/xcrm/api/v1/wx/survey/satisfaction?customerId=${customerId}`)
    } else {
      return axiosIns.get('/xcrm/api/v1/wx/survey/satisfaction')
    }
    // http://scrmdental.lctest.cn/xcrm/api/v1/wx/survey/satisfaction/pageable?page=0&size=20
  }

  self.getMatchList = (params) => {
    return axiosIns.get(`/pc/api/v1/wx/queryUserInfo/${params}`)
  }
  //  获取绑定相关人列表
  self.getMemberList = () => {
    return axiosIns.get(`/pc/api/v1/wx/customers/bind`)
  }

  // 绑定一系列的相关人
  self.goToBindList = (params) => {
    return axiosIns.post(`/pc/api/v1/wx/userBunding/multi`, params)
  }

  self.getExecutionRecords = (customerId, params) => {
    return axiosIns.get(`/wx/customer/${customerId}/execution-record`, {params})
  }
  // 预约改约接口
  self.changeAppointMent = (params) => {
    return axiosIns.post(`/xcrm/api/v1/wx/appointment/reschedule`, params)
  }
  // xcrm/api/v1/wx/appointment/reschedule

  self.queryAllReferrals = () => {
    return handleResp(
      axiosIns.get('/xcrm/api/v1/wx/recommend/fans-tree')
    )
  }

  self.distributionDetails = () => {
    return handleResp(
      // This API returns all sharing members, regardless levels.
      axiosIns.get('/xcrm/api/v1/wx/recommend/invitees')
    )
  }

  self.currentViewerInfo = (appId, openId) => {
    return handleResp(
      axiosIns.get('/xcrm/api/v1/wx/fan', {params: {appId, openId}})
    )
  }

  self.distributionSharing = () => {
    // TODO
    return axiosIns.get('/distributionSharing')
  }

  self.distributionShareInfo = () => {
    return handleResp(
      axiosIns.get('/xcrm/api/v1/wx/recommend')
    )
  }

  self.distributionRules = () => {
    return handleResp(
      axiosIns.get('/xcrm/api/v1/wx/recommend/bonusrules')
    )
  }

  self.checkAuthRequire = (appId) => {
    return handleResp(
      axiosIns.get(`/xcrm/api/v1/wx/page/check/${appId}`)
    )
  }
  return self
}

export default new Service()
