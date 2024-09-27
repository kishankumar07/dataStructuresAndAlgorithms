function factorialOfNumber(num:number):number{

      if(num===0 || num===1)return 1;

      return num * factorialOfNumber(num-1);
      
}
const num = 5;
console.log(factorialOfNumber(num));