// 生成文章内容
import { randomInt, createRandomPick } from './random.js'

// 替换句子
function sentence(pick, replacer) {
  let ret = pick() // 得到一个句子
  for (const key in replacer) {
    ret = ret.replace(new RegExp(`{{${key}}}`, 'g'), typeof replacer[key] === 'function' ? replacer[key]() : replacer[key])
  }
  return ret
}


export function generate(title, {corpus, min = 600, max = 1000}) {
  const { famous, bosh_before, bosh, conclude, said } = corpus
  const [pickFamous, pickBoshBefore, pickBosh, pickConclude, pickSaid] = [famous, bosh_before, bosh, conclude, said].map(item => {
    return createRandomPick(item)
  })

  // 拼凑文章
  const articleLength = randomInt(min, max)
  let article = []
  let totalLength = 0
  while (totalLength < articleLength) {
    let section = ''
    const sectionLength = randomInt(200, 500)
    while (section.length < sectionLength || !/[。？]$/.test(section)) {
      const n = randomInt(0, 100)
      if (n < 20) {
        section += sentence(pickFamous, {said: pickSaid, conclude: pickConclude})
      } else if (n < 50) {
        section += sentence(pickBoshBefore, {title}) + sentence(pickBosh, {title})
      } else {
        section += sentence(pickBosh, {title})
      }
    }

    totalLength += section.length
    article.push(section)
  }

  return article
}