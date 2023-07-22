import { readFile, readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { generate } from './lib/generator.js'
import { createRandomPick } from './lib/random.js'

// readFile('./corpus/data.json', {encoding: 'utf-8'}, (err, data) => {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log(err);
//   }
// })

const url = import.meta.url
const path = resolve(dirname(fileURLToPath(url)), 'corpus/data.json')
const data = readFileSync(path, {encoding: 'utf-8'})
const corpus = JSON.parse(data)

// console.log(corpus);
const pickTitle = createRandomPick(corpus.title)
const title = pickTitle()

const article = generate(title, {corpus})

console.log(`${title}\n\n    ${article.join('\n     ')}`);