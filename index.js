alert("welcome")

document.addEventListener("keypress", function (event){

    if(event.key==="C")
        {
            document.querySelector("input").value= " ";
        }
        else if(event.key==="=")
        {
            var ans=eval(document.querySelector("input").value);
            document.querySelector("input").value=ans;

        }
        else{
            document.querySelector("input").value+=event.key;
        }
    
})

var numofbuttons=document.querySelectorAll(".btn").length
for (var i=0;i< numofbuttons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function (){
          
        if(this.innerHTML==="C")
        {
            document.querySelector("input").value= " ";
        }
        else if(this.innerHTML==="=")
        {
            var ans=eval(document.querySelector("input").value);
            document.querySelector("input").value=ans;
            
        }
        else{
            document.querySelector("input").value+=this.innerHTML;

        }
    
    }
    );
}
