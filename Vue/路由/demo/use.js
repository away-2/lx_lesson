// Vue.use()
// use用于安装vue.js 的插件，

Vue.use = function(plugin) {
  const args = toArray(arguments, 1) // [] // 把arguments里面从下标1开始切
  args.unshift(this) // [vue, ]

  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin, args)
  } else if (typeof plugin === 'function') {
    plugin.apply(null, args)
  }
  
  return this
}

