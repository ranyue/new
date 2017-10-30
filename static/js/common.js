let Common = {
  getUrlParams () {
    let searchStr = location.search
    let result = {}
    if (searchStr && searchStr.length > 1) {
      searchStr.slice(1).split('&').forEach(function (item, index) {
        result[item.split('=')[0]] = item.split('=')[1]
      })
    }
    return result
  },
  jumpTo (url, params, hash) {
    let searchStr, hashStr
    if (params && typeof params === 'object') {
      searchStr = Object.keys(params).map(el => `${el}=${params[el]}`).join('&')
    }

    if (hash) {
      if (typeof hash === 'object') {
        hashStr = Object.keys(hash).map(el => `${el}=${hash[el]}`).join('&')
      } else {
        hashStr = hash
      }
    }
    location.href = `${url}${searchStr ? '?' + searchStr : ''}${hashStr ? '#' + hashStr : ''}`
  },
  copyAttr (source, des) {
    Object.keys(des).forEach(function (item, index) {
      if (source[item]) {
        des[item] = source[item]
      }
    })
  },
  setAllModalNone () {
    let modalList = document.querySelectorAll('.modal-mask')

    if (modalList.length) {
      for (let i in modalList) {
        if (modalList.hasOwnProperty(i)) {
          modalList[i].style.display = 'none'
        }
      }
    }
  },
  getImgUrl (url) {
    return {
      'background-image': `url("${url}")`
    }
  },
  transStrToBool (str) {
    if (str === 'true') {
      return true
    }
    return false
  },
  stringEquals (left, right) {
    if (typeof left === 'string' && typeof right === 'string') {
      return left.toLowerCase() === right.toLowerCase()
    } else {
      return false
    }
  },
  /**
   * Delay trigger. Copy from Underscore.js
   */
  debounce (func, wait, immediate) {
    let timeout
    return async function () {
      let context = this
      let args = arguments
      let later = function () {
        timeout = null
        if (!immediate) {
          return func.apply(context, args)
        }
      }
      let callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) {
        return func.apply(context, args)
      }
    }
  },
  /**
   * Enable function call after a period.
   */
  delay (func, wait = 15) {
    let enable = true
    let interval = setInterval(() => {
      enable = true
    }, wait)
    let proxy = function () {
      if (enable) {
        return func.apply(this, arguments)
      }
    }
    proxy.close = function () {
      clearInterval(interval)
    }
    return proxy
  }
}
export default Common
