class MyStack {
    constructor(){
    this.maxSize = 10;
    this.stackArray = [];
    this.top = -1;
    }
   
    push(j) {
       this.stackArray[++this.top] = j;
    }
    pop() {
       return this.stackArray[this.top--];
    }
    peek() {
       return this.stackArray[this.top];
    }
    isEmpty() {
       return (this.top == -1);
    }
    isFull() {
       return (this.top == this.maxSize - 1);
    }
}
       theStack = new MyStack(10); 
       theStack.push(10);
       theStack.push(20);
       theStack.push(30);
       theStack.push(40);
       theStack.push(50);
       
        
       console.log(theStack.stackArray);

       console.log(" ");

       console.log("peek is " + theStack.peek());

       console.log(" ");

       console.log("poping " + theStack.pop());

       console.log(" ");

       console.log("checkking Empty " + theStack.isEmpty());

       console.log(" ");

       // removing  full stack uding while

       while (!theStack.isEmpty())
       {
           var value = theStack.pop();
           console.log(value);
           console.log(" ");
          

       }
       
         