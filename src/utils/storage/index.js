/*
 * @Author: 驷爺.J.C 
 * @Date: 2018-08-19 17:16:22 
 * @Last Modified by:   驷爺.J.C 
 * @Last Modified time: 2018-08-19 17:16:22 
 */
import { AsyncStorage } from 'react-native'

function clear() {
  return AsyncStorage.clear()
}

function get(key, defaultValue = null) {
  return AsyncStorage.getItem(key).then(
    value => (value !== null ? JSON.parse(value) : defaultValue)
  )
}

function set(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value))
}

function remove(key) {
  return AsyncStorage.removeItem(key)
}

function multiGet(...keys) {
  return AsyncStorage.multiGet([...keys]).then(stores => {
    const data = {}
    stores.forEach((result, i, store) => {
      data[store[i][0]] = JSON.parse(store[i][1])
    })
    return data
  })
}

function multiRemove(...keys) {
  return AsyncStorage.multiRemove([...keys])
}

export default {
  clear,
  get,
  set,
  remove,
  multiGet,
  multiRemove,
}
