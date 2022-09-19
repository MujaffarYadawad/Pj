// doing as youtuber does 
var obj = {num:2}

var obj2 = {num:5}
 var addToThis = function(a,b,c){
  return this.num + a+b+c;
 };

 console.log(addToThis.call(obj, 1,2,3));

 var arr = [1,2,3];
 console.log(addToThis.apply(obj, arr));
 console.log(addToThis.apply(obj2, arr));

 var bound=addToThis.bind(obj);

console.dir(bound(1,2,3));
 
// task 9 ans 
var student ={age:20}

var studentAge = function(){
  return this.age;
}
var boundAge=studentAge.bind(student);
console.dir(boundAge());