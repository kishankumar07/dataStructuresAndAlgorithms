//Node class
class ListNode {
      value: number;
      next: ListNode | null;
    
      constructor(value: number) {
        this.value = value;
        this.next = null;
      }
    }
    
    //Linkedlist class
    class LL {
      head: ListNode | null;
    
      constructor() {
        this.head = null;
      }
    
      prepend(value: number): void { // always at teh start
        const node = new ListNode(value);
        node.next = this.head;
        this.head = node;
      }
    
      append(value: number): void { // append at end
        const node = new ListNode(value);
        if (!this.head) {
          this.head = node;
          return;
        }
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = node;
      }
      insertAt(index:number,value:number):void{  // Insert at a  particular index given with value to insert
            const node = new ListNode(value)
            if(index === 0){
                  return this.prepend(value);
            }
            let current: ListNode | null = this.head;
            let prev:ListNode | null = null;
            let i=0;

            while(current !== null && i<index){
                  prev = current;
                  current = current?.next;
                  i++;
            }
            if(prev!==null){
                  prev.next= node;
                  node.next = current;
            }else{
                  console.log(`index ${index} is out of bounds`)
            }

      }
      delete(value:number):void{ //delete a node, if node to delete is head, that is also speciallly mattered
          if(!this.head){
            console.log("empty list")
          }
          if(this.head?.value === value){
              this.head = this.head.next;
          }
          let current:ListNode | null = this.head;
          let prev:ListNode | null = null;
          while(current !== null && current.value !== value){
            prev = current;
            current = current.next;
          }
          if(current === null){
            console.log('value not found');
          }
          if(prev!==null && current){
            prev.next = current.next
          }

      }
      findAValue(value:number){
        if(!this.head)return;
        if(this.head.value === value){
          console.log('index is : 0');
          return;
      }
        let current:ListNode | null = this.head;
        let i=0;
        while(current!==null && current.value !==value){
            current = current.next;
            i++;
        }
        console.log('position is :',i)

      }
      getMiddle():ListNode | null {
        let slow:ListNode | null = this.head
        let fast:ListNode | null = this.head
        while(fast!==null && slow!==null && fast.next!==null){
          slow = slow.next;
          fast = fast.next.next;
        }
        return slow ?? null;
      }
      removeDuplicatesFromSortedLinkedList():void{
          let current = this.head;
          while(current !==null && current.next !==null){
            if(current.value === current.next?.value){
                current.next = current.next.next;
            }
            else{
              current=current.next;
            }
          }
      }
      printReverseOrder():void{
        if(!this.head)return;
        let stack:number[] = [];

        let current:ListNode | null = this.head;
        while(current!==null){
          stack.push(current.value);
          current = current.next;
        }
        while(stack.length){
            console.log(stack.pop());
        }
      }
    
      display(): void {
        if (!this.head) {
          console.log('empty list');
          return;
        }
        let current: ListNode | null = this.head;
        while (current !== null) {
          console.log(current.value);
          current = current.next;
        }
      }
    }
    
    const ll = new LL();
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.prepend(1);
    ll.findAValue(3)
    ll.display();
    console.log('reverse the linked list :')
    ll.printReverseOrder();
    