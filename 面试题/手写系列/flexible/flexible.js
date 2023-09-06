(function flexible() {
    var docEl = document.createElement
    var dpr = window.devicePixelRatio || 1

    // 设置body的字体为了页面展示友好
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else { 
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }

    setBodyFontSize()
    // 设置根字体
    function setRemUnit(unit) {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }
    setRemUnit()

    // 页面尺寸变化
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function() {
        if (e.persisted) {
            setRemUnit()
        }
    })
    
    // 在高清屏，超清屏上显示0.5px
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '0.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
})(window, document)