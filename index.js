var sidenav = document.querySelector(" .side-navbar")


function shownavbar()
{
    sidenav.style.left = "0";
}
 
function closenavbar()
{
    sidenav.style.left = "-50%";
}



//Search function

var products=document.getElementById("products")

var search=document.getElementById("search")

var productlist = products.querySelectorAll("div")

search.addEventListener("keyup",function(){

    var enteredvalue =event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var name = productlist[count].querySelector("p").textContent 

        if(name.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
             productlist[count].style.display="block"
        }
    }
})