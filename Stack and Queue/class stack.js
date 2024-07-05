class Stack{
    constructor(){
        this.arr = [];
    }
    push(element){
        this.arr.push(element)
    }
    pop(){
        return this.arr.pop()
    }
    peek(){
        return this.arr[this.arr.length-1]
    }
    size(){
        return this.arr.length;
    }
    isEmpty(){
        return this.arr.length === 0;
    }
    display(){
        return this.arr;
    }
}
let stack = new Stack();
stack.push(1);stack.push(2),stack.push(3);
console.log(stack.pop())
console.log(stack.peek());
console.log(stack.size())
console.log(stack.display())