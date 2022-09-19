var obj = {num:2}
 var addToThis = function(a){
  return this.num + a;
 };

 conslole.lof(addToThis.call(obj, 3));