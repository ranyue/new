import Svc from './service.js'

function initWx (url, apiList) {
  return new Promise(resolve => {
    Svc.getTicket(url).then(({
      data
    }) => {
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.noncestr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名，见附录1
        jsApiList: apiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
      wx.ready(function () {
        resolve()
      })
    })
  })
}

function initNoAuthWx (url, appId, apiList) {
  console.log(`OAuth url: ${url}`)
  return new Promise(async resolve => {
    let {data} = await Svc.getNoAuthTicket(url, appId)
    wx.config({
      debug: false,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.noncestr,
      signature: data.signature,
      jsApiList: apiList
    })
    wx.ready(() => {
      resolve()
    })
  })
}

export const getLocationInfo = () => {
  let url = location.href.split('#')[0]
  return new Promise(resolve => {
    initWx(url, ['getLocation']).then(() => {
      wx.getLocation({
        success: function (res) {
          resolve(res)
        },
        cancel: function () {
          let res = {
            latitude: null,
            longitude: null
          }
          resolve(res)
        },
        fail: function () {
          let res = {
            latitude: null,
            longitude: null
          }
          resolve(res)
        }
      })
    })
  })
}

/**
 * Share by PengYouQuan
 * @param options
 * @param {string} options.title
 * @param {string} options.appId
 * @param {string} options.link
 * @param {string} options.imgUrl
 * @param {function} options.success
 * @param {function} options.cancel
 * @returns {Promise}
 */
export const configWxSharing = (options) => {
  let url = encodeURI(location.href.split('#')[0])
  return new Promise(async resolve => {
    if (options.appId) {
      await initNoAuthWx(url, options.appId, ['onMenuShareTimeline', 'onMenuShareAppMessage'])
    } else {
      await initWx(url, ['onMenuShareTimeline', 'onMenuShareAppMessage'])
    }
    wx.onMenuShareTimeline({
      title: options.title,
      link: options.link,
      imgUrl: options.imgUrl,
      success: options.success,
      cancel: options.cancel
    })

    wx.onMenuShareAppMessage({
      title: options.title,
      link: options.link,
      imgUrl: options.imgUrl,
      desc: options.desc,
      success: options.success,
      cancel: options.cancel
    })
    resolve()
  })
}

export const configMenus = ({
  appId,
  hideMenus = [],
  showMenus = []
}) => {
  let url = encodeURI(location.href.split('#')[0])
  return new Promise(async resolve => {
    if (appId) {
      await initNoAuthWx(url, appId, ['hideMenuItems'])
    } else {
      await initWx(url, ['hideMenuItems'])
    }
    wx.hideMenuItems({
      menuList: hideMenus
    })
    resolve()
  })
}
