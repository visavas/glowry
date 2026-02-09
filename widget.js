(function() {
  const CHAT_URL = "https://visavas.github.io/glowry/";
  const LOGO = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z"></path></svg>';
  
  const isMobile = window.innerWidth <= 600;
  
  const container = document.createElement('div');
  container.id = 'glowry-container';
  container.innerHTML = `
    <style>
      #glowry-bubble { position:fixed; bottom:24px; right:24px; width:64px; height:64px; background:#E84F2F; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 8px 20px rgba(232,79,47,0.35); z-index:2147483647; }
      #glowry-win { display:none; position:fixed; z-index:2147483647; background:white; overflow:hidden; box-shadow:0 12px 40px rgba(0,0,0,0.2); }
      #glowry-win iframe { width:100%; height:100%; border:none; }
      
      /* Desktop */
      @media (min-width: 601px) {
        #glowry-win { bottom:100px; right:24px; width:360px; height:550px; border-radius:24px; }
      }
      /* Mobile Full Screen (Requirement #4) */
      @media (max-width: 600px) {
        #glowry-win { top:0; left:0; right:0; bottom:0; width:100%; height:100%; border-radius:0; }
        #glowry-bubble { bottom:16px; right:16px; width:56px; height:56px; }
      }
    </style>
    <div id="glowry-bubble">${LOGO}</div>
    <div id="glowry-win"><iframe src="${CHAT_URL}"></iframe></div>
  `;
  document.body.appendChild(container);

  const bubble = document.getElementById('glowry-bubble');
  const win = document.getElementById('glowry-win');
  
  bubble.onclick = (e) => {
    e.stopPropagation();
    win.style.display = win.style.display === 'none' ? 'block' : 'none';
  };
})();
