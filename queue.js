class Queue{
  constructor(){
    this.queue = [];
    this.minpos=0;
    this.maxpos=0;
  }
   push (val){
    this.queue.push(val)
    this.maxpos = this.maxpos+1;

   }
   pop(){
    if(this.minpos<this.maxpos){
    // const popval =this.queue[this.minpos];
    this.queue[this.minpos]=undefined;
    this.minpos = this.minpos +1;
   // return popval;

    }else{
      console.log("Array is Empty");
    }
    
   }
   displayQueue(){
    console.log('queue>>> ' ,this.queue);
    console.log('minpos ', this.minpos);
    console.log('maxpos ', this.maxpos);
   }
}

const queue1 = new Queue();
  queue1.displayQueue(); 
 queue1.push(1);
 queue1.push(100);
 queue1.pop();
 queue1.displayQueue(); 
 queue1.pop();
 queue1.displayQueue();
 queue1.pop();