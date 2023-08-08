const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path = require('path')
const compilerDom = require('@vue/compiler-dom')
const compilerSfc = require('@vue/compiler-sfc')

function rewriteImport(content) {
  return content.replace(/ from ['|"]([^'"]+)['|"]/g, function (s0, s1) {
    // ./ ../  /
    if (s1[0] !== '.' && s1[1] !== '/') {
      return ` from '/@modules/${s1}'`  // http://localhost:5173/@modules/vue
    } else {
      return s0
    }
  })
}

app.use((ctx) => {
  const { request: { url, query } } = ctx
  if (url === '/') {
    ctx.type = 'text/html'
    let content = fs.readFileSync('./index.html', 'utf8')

    ctx.body = content
  } else if (url.endsWith('.js')) { // js 文件  /src/main.js
    const p = path.resolve(__dirname, url.slice(1))
    ctx.type = 'application/javascript'
    const content = fs.readFileSync(p, 'utf8')
    ctx.body = rewriteImport(content)
  } else if (url.startsWith('/@modules')) { // '/@modules/vue'
    const prefix = path.resolve(__dirname, 'node_modules', url.replace('/@modules/', ''))
    const module = require(prefix+'/package.json').module
    const p = path.resolve(prefix, module)
    const ret = fs.readFileSync(p, 'utf8')
    ctx.type = 'application/javascript'
    ctx.body = rewriteImport(ret)
  } else if (url.indexOf('.vue') > -1) {
    const p = path.resolve(__dirname, url.split('?')[0].slice(1)) // src/App.vue
    const { descriptor } = compilerSfc.parse(fs.readFileSync(p, 'utf8'))
    
    console.log(descriptor);
    if (!query.type) { // 返回.vue文件的js部分
      ctx.type = 'application/javascript'
      ctx.body = `
        ${rewriteImport(descriptor.script.content.replace('export default ', 'const __script = '))}
        import { render as __render } from "${url}?type=template"
        __script.render = __render
        export default __script
      `
    } else if (query.type === 'template') { // 返回.vue文件的html部分
      const template = descriptor.template
      const render = compilerDom.compile(template.content, {mode: 'module'}).code
      ctx.type = 'application/javascript'
      ctx.body = rewriteImport(render)
    }

  } else if (url.endsWith('.css')) { // css 文件
    const p = path.resolve(__dirname, url.slice(1))
    const file = fs.readFileSync(p, 'utf8')
    const content = `
      const css =  "${file.replace(new RegExp(/\n/g),'')}"
      let link = document.createElement('style')
      link.setAttribute('type', 'text/css')
      document.head.appendChild(link)
      link.innerHTML = css
      export default css
    `
    ctx.type = 'application/javascript'
    ctx.body = content
  }
})

app.listen(5173, () => {
  console.log('listening on port 5173');
})