var names = 'zzy'

function foo(){
    let age = 18
    return function(){
        console.log(`${names}:${age}`);
    }
    
}

const bar = foo()
bar()