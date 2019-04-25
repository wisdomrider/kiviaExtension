var btn=document.getElementById("btn")
var chat=document.getElementById("chat")
var msg=document.getElementById("msg")

keyPress=()=>{
    if (window.event.keyCode==13){
        chat.innerHTML+=msg.value+"<br>";
        msg.value=""    
        chat.scrollTop = chat.scrollHeight;

    }
}


