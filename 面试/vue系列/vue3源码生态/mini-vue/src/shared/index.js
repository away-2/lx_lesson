export function isObject(val) {
  return typeof val === 'object' && val !== null
}

export function hasOwn(val, key) {
  return Object.prototype.hasOwnProperty.call(val, key)
  
  // for (let propKey in val) {
  //   if (propKey === key && val.hasOwnProperty(propKey)) {
  //     return true
  //   }
  // }
  // return false
}