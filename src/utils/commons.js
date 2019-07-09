
import { Toast } from 'antd-mobile'


/**
 * 显示loading
 */
function showLoading(){
  Toast.loading('加载中...', 0);
}

/**
 * 隐藏loading
 */
function hideLoading(){
  Toast.hide();
}


/**
 * 合并请求，同一时刻只显示一个loading
 */
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    showLoading()
  }
  needLoadingRequestCount++
}

export function hideFullScreenLoading() {
  if (needLoadingRequestCount <= 0){
    return
  }
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    hideLoading()
  }
}



/**
 * 防抖
 * @param {*} fn 
 * @param {*} delay 
 */
export function debounce(fn, delay) {
  // 记录上一次的延时器
  var timer = null;
  delay = delay || 200;
  return function () {
    var args = arguments;
    var that = this;
    // 清除上一次延时器
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(that, args)
    }, delay);
  }
}


/**
 * 节流
 * @param {*} fn 
 * @param {*} delay 
 */
export function throttle(fn, delay) {
  var lastTime;
  var timer;
  delay = delay || 200;
  return function () {
    var args = arguments;
    var that = this;
    // 记录当前函数触发的时间
    var nowTime = Date.now();
    if (lastTime && nowTime - lastTime < delay) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        // 记录上一次函数触发的时间
        lastTime = nowTime;
        // 修正this指向问题
        fn.apply(that, args);
      }, delay);
    } else {
      lastTime = nowTime;
      fn.apply(that, args);
    }
  }
} 
