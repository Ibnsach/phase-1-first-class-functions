function receivesAFunction(callback){
    callback();
    return "hello";
  }
  
  const iAmNamedFunction = ()=> console.log('I am a function');
  
  function returnsANamedFunction(){
    return iAmNamedFunction;
  }
  
  function returnsAnAnonymousFunction(){
    return function(){
      console.log('I am an anonymous function');
    }
  }