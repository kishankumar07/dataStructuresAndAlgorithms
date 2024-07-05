class Queue{
    constructor(){
        this.arr = []
    }
    enqueue(element){
        this.arr.push(element)
    }
    dequeue(){
        return this.arr.shift()
    }
    front(){
        return this.arr[0]
    }
    isEmpty(){
        return this.arr.length === 0;
    }
    size(){
        return this.arr.length;
    }
    display(){
        return this.arr;
    }
}
let queue = new Queue;
queue.enqueue(1);queue.enqueue(2);queue.enqueue(3);
console.log('first element is :',queue.front());
console.log('first element that is removed now is :',queue.dequeue())
console.log(queue.size())
console.log(queue.display())

//------------------==================-------------------------====================================

