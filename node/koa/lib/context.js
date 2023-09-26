const delegate = require('delegates')

let proto = {
    // request: {
    //     url: 'xxxx'

    // }
}

delegate(proto, 'request')
.access('url')
.access('path')
.access('query')
// ...

delegate(proto, 'response')
.access('body')
// ...

module.exports = proto