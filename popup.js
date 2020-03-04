let changeText = document.getElementById('changeText');


  changeText.onclick = function(element) {
  	console.log('hello');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: "var getNodes= function(el){var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false); while(n=walk.nextNode()) a.push(n); return a;}; var nodes=getNodes(document.getElementsByTagName('body')[0]); nodes.map(item => { item.nodeValue = item.nodeValue.replace(/^(Elon Musk|Elon Reeve Musk)$/, `Grimes' Boyfriend`) })" });
    });
  };