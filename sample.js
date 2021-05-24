let element =document.getElementById("mycontent");
let textbox =document.querySelector("input[type='text']");

element.addEventListener("click",function(){
   let result = confirm("Are you sure ? you want to delete the content");
   if(result)
     element.innerHTML="";
})

function addContent(){
    //console.log(textbox.value)
   /* let node=document.createElement("li")
    var textnode = document.createTextNode(textbox.value); 
    node.appendChild(textnode)
    element.appendChild(node)*/

    let text = element.innerHTML;
    text+="<li>"+textbox.value+"</li>"
    element.innerHTML=text;
}

