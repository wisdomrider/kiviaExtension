var currentTab;

updateActiveTab=()=>{
  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then((tabs)=>currentTab=tabs[0]);
}

browser.commands.onCommand.addListener((command) => {
   sendMessage("hola")
});

browser.runtime.onMessage.addListener(message => {
    console.log(message)
});




sendMessage=(msg)=>{
  browser.tabs.sendMessage(currentTab.id, msg).then(response => {
       
  }).catch(err=>console.log(err));
}


browser.tabs.onUpdated.addListener(updateActiveTab);
browser.windows.onFocusChanged.addListener(updateActiveTab);
browser.tabs.onActivated.addListener(updateActiveTab);
















