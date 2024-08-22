function outerF (){
    let outer = "я зовні"

    function innerF (){
        console.log(outer)
        
    }
    return innerF;
}

const myCloser = outerF();
myCloser();
