//reverse string using stack: 
function reverString(str){
    let arr = [];
    for(let c of str){
        arr.push(c)
    }
    // console.log(arr)
    let rev = '';
    while(arr.length > 0){
        rev += arr.pop() + ' '
    }
    return rev;

}
let str = 'Hello';
console.log('reversed string is :',reverString(str))



// Valid paranthesis check
function validParanthesis(str){
    let arr = [];

    for(let c of str){
        if(c === '(' || c === '{' || c === '['){
            arr.push(c);
        }else{
            if( !arr.length || c === ')' && arr[arr.length-1] !== '(' || c === '}' && arr[arr.length-1] !=='{' || c=== ']' && arr[arr.length !== '[']){
                return false;
            }
            arr.pop();
        }
    }
    return !arr.length;
}
let paranthesis = '[({})]';
console.log('Whether valid paranthesis or not :',validParanthesis(paranthesis));




// Implement stack using singly linkedList
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.head = null;
        this.size =  0;
    }
    push(value){
        let node = new Node(value)
        node.next = this.head;
        this.head = node;
        this.size++;
    }
    pop(){
        if(this.size ===0){
            return 'empty list'
        }
        let current = this.head;
        this.head = this.head.next;
        this.size--;
        return current.value;
    }
    peek(){
        if(this.size === 0){
            return 'empty list'
        }
        return this.head.value;
    }
    display(){
        if(this.size === 0){
            return 'empty list'
        }
        let current = this.head;
        let arr = []
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}
let stack = new Stack();
stack.push(10);stack.push(20);stack.push(30);stack.push(40);stack.push(50);
console.log(stack.pop());
console.log(stack.peek())
console.log(stack.display())