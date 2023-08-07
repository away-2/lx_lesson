const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')


const getModuleInfo = (file) => {
  const body = fs.readFileSync(file, 'utf8');

  // 2
  const ast = parser.parse(body, {
    sourceType: 'module' // 以es6的模块化语法解析
  })

  // 3 依赖收集
  const deps = {}
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file)
      const abspath = './' + path.posix.join(dirname, node.source.value)
      deps[node.source.value] = abspath
    }
  })

  // 4 AST -> code
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })

  const moduleInfo = { file, deps, code }
  return moduleInfo
  // console.log(code); 
}

// 递归获取所有依赖
const parseModules = (file) => {
  const entry = getModuleInfo(file)
  const temp = [entry]
  const depsGraph = {}

  for (let i = 0; i < temp.length; i++) {
    const deps = temp[i].deps  // { './add.js': './src/add.js', './minus.js': './src/minus.js' }
    if (deps) {
      for (const key in deps) {
        if (deps.hasOwnProperty(key)) {
          temp.push(getModuleInfo(deps[key]))
        }
      }
    }
  }

  temp.forEach(moduleInfo => {
    depsGraph[moduleInfo.file] = {
      deps: moduleInfo.deps,
      code: moduleInfo.code
    }
  })

  return depsGraph
  // console.log(depsGraph);
}

const bundle = (file) => {
  const depsGraph = JSON.stringify(parseModules(file));

  return `(function(grash) {

    function require(file) {
      function absRequire(relPath) {
        return require(grash[file].deps[relPath])
      }

      var exports = {};

      (function(require, code) {
        eval(code)
      })(absRequire, grash[file].code)

      return exports
    }

    require('${file}')

  })(${depsGraph})`

}

const result = bundle('./src/index.js')

fs.mkdirSync('./dist')
fs.writeFileSync('./dist/bundle.js', result)