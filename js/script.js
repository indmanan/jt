var store;
function show()
{
    var result = document.getElementById("result");
    var count = document.getElementById("count");
    var dev = document.getElementById("dev");
     var dev1 = document.getElementById("dev1");
    var x = 10;
    function bdywish()
    {
        
        count.innerHTML = x--;
        if(x === -1)
            {
                clearInterval(store);
                count.style.color = "black";
                result.innerHTML = "Happy Birthday Java Technocrat";
                dev.innerHTML="best wishes from manan ";
                dev1.innerHTML="developed by manan";
                
                
            }
    }
    store = setInterval(bdywish, 1000);
}
show();