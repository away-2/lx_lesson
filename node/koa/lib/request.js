const URL = require('url').URL;

let request = {
    get url() {
        return this.req.url
    },
    get path() { // 只获取路径，不需要参数
        return new URL(this.req.url, `http://${this.req.headers.host}`).pathname
    },
    get query() {
        return new URL(this.req.url, `http://${this.req.headers.host}`).searchParams
    }
}

module.exports = request