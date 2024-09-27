function palindromeCheck(str:string,left:number=0,right:number=str.length-1){
      if(left>=right) return true;
      if(str[left] !== str[right]) return false;
      return palindromeCheck(str,left+1,right-1)
}