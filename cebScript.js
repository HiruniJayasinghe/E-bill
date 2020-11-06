function myFunction() 
{
    let unit=document.getElementById('id').value;
    let range1 = 7.85;
    let range2 = 7.85;
    let range3 = 10;
    let range4 = 27.75;
    let range5 = 6;

    let price = 0;

    if (unit<30) 
    {
        price=range1*unit;
    }
    else if (unit>=30 && unit<60) 
    {
        price=(30*range1)+(range2*(unit-30));
    }
    else if (unit>=60 && unit<90) 
    {
        price=(30*range1)+(30*range2)+(range3*(unit-30));
    }
    else if (unit>=90 && unit<120) 
    {
        price=(30*range1)+(30*range2)+(30*range3)+(range4*(unit-30));
    }
    else if (unit>180) 
    {
        price=(30*range1)+(30*range2)+(30*range3)+(30*range4)+(range5*(unit-30));
    }
   let result=document.getElementById("dis");
   result.innerHTML="<h4> Your electricity bill is = "+price+"</h4>";
}
