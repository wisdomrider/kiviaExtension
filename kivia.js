var chat=document.getElementById("chat")
var msg=document.getElementById("msg")
var close=document.getElementById("close")

var ovrlay=document.getElementById("ovrlay1")

ovrlay.addEventListener("click",()=>{})
close.addEventListener("click",()=>{
   Array.from(document.getElementsByClassName("overlay")).forEach(x=>{
       x.remove()
   })
  
})


function keyPress(){
    if (window.event.keyCode==13){
        chat.innerHTML+='<div class="msg-right">'+msg.value+"</div>";
        send(msg.value)
        msg.value=""    
        
        chat.scrollTop = chat.scrollHeight;
    }
}


send=(message)=>{
    var http = new XMLHttpRequest();
    var url = 'https://dialogflow.googleapis.com/v2beta1/projects/quiznepall/agent/sessions/93d0756a-09a1-9baa-6e73-536ce8fb02bd:detectIntent';
    var params = '{\"queryInput\":{\"text\":{\"text\":"'+message+'",\"languageCode\":\"en\"}},\"queryParams\":{\"timeZone\":\"Asia/Kathmandu\"}}';   
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    http.setRequestHeader('Authorization',"Bearer ya29.c.Elr2BjfCGp3NZR5AOJC3jJbdc_j9tCN2hztMT1a4S-Pw89TsamrA1WLHwjTwht8gqj8yy_fqsyqPMZnH17_FVuToSeWWL7konqCuIT6MRUm8oliVLGdJkbdc2fo")


    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            var data=JSON.parse(http.responseText).queryResult.fulfillmentText;
            chat.innerHTML+='<div class="msg-left">'+data+"</div>";
            chat.scrollTop = chat.scrollHeight;
        }
        else if(http.status!=200&&http.readyState==4){   
            chat.innerHTML+='<div class="msg-left">Unable to Connect !</div>';
            chat.scrollTop = chat.scrollHeight;

        }
    }
    http.send(params);
}

msg.focus()
