function powerOfNum(num:number,power:number):number{
      if(power < 1)return 1;
      return num * powerOfNum(num,power-1);
}
powerOfNum(3,3);