function isprime(a)
{
    let i=0
    for(i=2;i<Math.sqrt(a);i++)
    {
    if(a%i==0)

    return true;
    }
    return false;
}
function isamstrong(a)
{
 let temp=a;
 let sum=0;
 while(a>0)
 {
    let num=a%10;
    sum=sum+num*num*num;
a=parseInt(a/10);

 }

 if(sum==temp)
 return true;
 else return false;
}
console.log(isprime(7));
console.log(amstrong(371));