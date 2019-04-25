browser.commands.onCommand.addListener((command) => {
    browser.tabs.query({
        currentWindow: true,
        active: true
      }).then(doThings);
  });


  doThings=(tabs)=>{
      tab=tabs.pop()
      browser.tabs.sendMessage(
        tab.id,
        {command: "f9"}
      ).then(response => {
        
      })
  }
  