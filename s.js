class Stacks{
  constructor(){
    this.size=1;
    this.array=[];
    this.top=-1;
  }
  push(j){
    return stack.array[++this.top]=j;

  }
  pop(){

  }
  peek(){

  }
}
stack=new Stacks(1);
stack.push(100);
stack.push(332);
console.log(stack.array);