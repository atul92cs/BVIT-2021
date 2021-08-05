oddEvengenrator=(num1)=>{
    if(num1%2===0)
    {
        console.log('number is even');
    }
    else
    {
        console.log('number is odd');
    }
}
oddEvengenrator(34);
oddEvengenrator(25);


strComparer=(str1,str2)=>{
 if(str1.length===str2.length)
 {
    console.log('both string are equal');
 }
 else 
 {
    if (str1.length>=str2.length)
    {
    console.log('string 1 is greater')
     }
    else
   {
    console.log('string 2 is greater');
    }
 }
 
}
strComparer('seed','deer');
strComparer('test','result');