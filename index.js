function receivesAFunction(aFunction){
    return aFunction();
}

function returnsANamedFunction(){
    return function ANamedFunction(){

    };
}

function returnsAnAnonymousFunction (){
    return function(){
        
    }
}