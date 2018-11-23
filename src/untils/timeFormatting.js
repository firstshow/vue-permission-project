/**
 * 时间戳转时间
 * @param val 传入的时间挫
 * @param type 需要转换的类型  YYYY-MM-DD ： 只需要日期 ； YYYY-MM-DD HH:MM:SS ： 日期加时分秒
 * 如只需要如期，则startNum ： 0 ， endNum ： 10
 */
export const transitionTimestamp = (val, type) => {
  val = val.length < 13 ? val * 1000 : val * 1 // 当不是毫秒时候，转换为毫秒
  let date = new Date(val)
  let year = date.getFullYear()
  let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let hour = date.getHours() * 1 < 10 ? '0' + date.getHours() : date.getHours()
  let minute = date.getMinutes() * 1 < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let second = date.getSeconds() * 1 < 10 ? '0' + date.getSeconds() : date.getSeconds()

  switch (type) {
    case 'YYYY-MM-DD' :
      return year + '-' + month + '-' + day
    case 'YYYY-MM-DD HH:MM:SS' :
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
    case 'HH:MM:SS' :
      return hour + ':' + minute + ':' + second
  }
}
