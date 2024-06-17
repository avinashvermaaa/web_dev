var year = 2021;

if(year % 4 === 0 )
{
  if(year % 100 === 0)
  {
    if(year % 400 === 0)
    {
      console.log("It's a leap year.");
    }
    else{
      console.log("not a leap year.");
    }
  }
  else{
    console.log("It's a leap year.");
  }
}
else{
  console.log("not a leap year.")
}
