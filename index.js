alert("welcome")

document.addEventListener("keypress", function (event){

    if(event.key==="C")
        {
            document.querySelector("input").value= " ";
        }
        else if(event.key==="=")
        {
            second=document.querySelector("input").value;
            document.querySelector("input").value= " ";
            compute(parseFloat(first),parseFloat(second),operation)
        }
        else if(event.key==="/" || event.key==="-"|| event.key==="+"|| event.key==="*")
        {
            operation=event.key;
            first=document.querySelector("input").value;
            document.querySelector("input").value= " ";

        }
        else{
            document.querySelector("input").value+=event.key;
        }
    
})


var first,second,operation;
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
            second=document.querySelector("input").value;
            document.querySelector("input").value= " ";
            compute(parseFloat(first),parseFloat(second),operation)
        }
        else if(this.innerHTML==="/" || this.innerHTML==="-"|| this.innerHTML==="+"|| this.innerHTML==="*")
        {
            operation=this.innerHTML;
            first=document.querySelector("input").value;
            document.querySelector("input").value= " ";

        }
        else{
            document.querySelector("input").value+=this.innerHTML;

        }
    
    }
    );
}
function compute(f,s,o){
    var ans;
    if(o==="/"){
       ans=f/s;
       document.querySelector("input").value=ans;
    }else if (o==="-"){
        ans=f-s;
        document.querySelector("input").value=ans;
     }
     else if (o==="+"){
        ans=f+s;
        document.querySelector("input").value=ans;
     }
     else if (o==="*"){
        ans=f*s;
        document.querySelector("input").value=ans;
     }

}
