

function receivesAFunction (callback){
      callback ()

 }
 receivesAFunction ();
 // invoke a function


 function returnsANamedFunction (){
  return function add (){
    console.log ()
  }
 }



function returnsAnAnonymousFunction (){
  return function (){
    console.log ("AnonymousFunction")
  }
}
