fonts =document.getElementById("fonts");
colors = document.getElementById("colors");
units = document.getElementsByClassName("units");

function manipulate(){
    fonts.style.visibility="hidden" 
    colors.style.visibility = "hidden"
    units[0].style.visibility = "hidden"
    units[1].style.visibility = "hidden"
    

    let element=document.getElementsByTagName("select")[0];
    let data=element.value
    if(data == "height" || data== "width" | data=="font-size"){
        units[0].style.visibility ="visible"
        units[1].style.visibility = "visible"
    }
       
    else if(data == "color" || data =="background-color")
       colors.style.visibility ="visible"
    else {
        fonts.style.visibility = "visible"
    
    }
}

elements = document.getElementsByClassName("formitem")

for(let x of elements)
{

    x.addEventListener('change',function(event){
    result=event.target.value
    let element=document.getElementsByTagName("select")[0];
    let property= element.value;
    document.getElementById("content").style[property]=
    isNaN(result)?result:result+"px";
   })

}
manipulate();