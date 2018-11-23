/* Storage的存储方式  */

function getStorage (storage) {
  return function (key) {
    return new Promise(resolve => {
      let value = storage.getItem(key)
      try {
        resolve(JSON.parse(value))
      } catch (e) {
        resolve(value)
      }
    })
  }
}

function setStorage (storage) {
  return function (key, value) {
    return new Promise(resolve => {
      if (typeof value === 'object') {
        storage.setItem(key, JSON.stringify(value))
      } else {
        storage.setItem(key, value)
      }
      resolve(value)
    })
  }
}

// localStorage的存贮获取
export const local = {
  getItem: getStorage(localStorage),
  setItem: setStorage(localStorage)
}

// sessionStorage的存贮获取
export const session = {
  getItem: getStorage(sessionStorage),
  setItem: setStorage(sessionStorage)
}
