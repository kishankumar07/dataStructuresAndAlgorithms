function bubbleSort(arr:number[]):number[]{
      let n = arr.length
      let flag;
      do{
            flag = false;
            for(let i=0;i<arr.length-1;i++){
                  if(arr[i]>arr[i+1]){
                        let temp = arr[i];
                        arr[i]=arr[i+1]
                        arr[i+1]=temp;
                        flag = true;
                  }
            }
            n--;
      }while(flag);
      return arr;
}
console.log(bubbleSort([6,3,4,2,1,9]))