Input:  "Hello, I am a string. Add your creativity here"
Output : {
  length: 46,
  vowelsCount: 15,
  duplicates: [
    'l', ' ', 'a', 'i',
    'd', 'o', 'r', 'e',
    't', 'y', 'h'
  ],
  reverse: 'ereh ytivitaerc ruoy ddA .gnirts a ma I ,olleH'
}
const str = "Hello, I am a string. Add your creativity here";
console.log('Length of string :',str.length)

let splitArr = str.toLowerCase().split('');
let flag = 0;
for(let x of splitArr){
    if(x === 'a' || x=== 'e' || x=== 'i'|| x === 'o' || x==='u'){
        flag++;
    }
}
console.log('Length of vowels :',flag)
console.log(str.split(''))
let newStr = str.split('')
// let newSet = new Set(str.split(''));
// console.log(newSet)
let arr1 = []
for(let i=0;i<newStr.length-1;i++){
    for(let j=i+1;j<newStr.length;j++){
        if(newStr[i]===newStr[j]){
            arr1.push(newStr[i])
        }
    }
}

console.log('duplicates:',arr1)
console.log(new Set(arr1))
console.log(Array.from(new Set(arr1)))











