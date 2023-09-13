function A () {
    setInterval(function () {
        console.log('aaaa');
    }, 1000);
}
function B () {
    setInterval(function () {
        console.log('bbbbbb');
    }, 500)
}
function C () {
    console.log('cccccc');
}

A()
B()