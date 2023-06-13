function a(){
    return () =>{
        return () =>{
            console.log(this);
        }
    }
}

a()