numComparison=(num1,num2)=>{
    if(num1>num2)
    {
        console.log('num1 is greater in value');
    }
    else if(num2>num1)
    {
        console.log('num 2 is greater in value');
    }
    else
    {
        console.log('both numbers are equal');
    }
}
numComparison(3,4);
numComparison(4,1);
numComparison(3,3);