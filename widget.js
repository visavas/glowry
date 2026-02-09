(function() {
  const GITHUB_HTML_URL = "https://visavas.github.io/glowry/index.html"; // Make sure your GitHub Pages is ON
  const LOGO = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z"></path></svg>';
  
  const chatDiv = document.createElement('div');
  chatDiv.style.cssText = "position:fixed; bottom:24px; right:24px; z-index:2147483647;";
  
  chatDiv.innerHTML = `
    <div id="glowry-bubble" style="width:64px;height:64px;background:#E84F2F;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 8px 16px rgba(0,0,0,0.2);">${LOGO}</div>
    <div id="glowry-win-container" style="display:none;position:absolute;bottom:80px;right:0;width:345px;height:505px;">
      <iframe src="${GITHUB_HTML_URL}" style="width:100%; height:100%; border:none; border-radius:24px; box-shadow: 0 12px 40px rgba(0,0,0,0.2);"></iframe>
    </div>
  `;
  document.body.appendChild(chatDiv);

  const bubble = document.getElementById('glowry-bubble');
  const win = document.getElementById('glowry-win-container');

  bubble.onclick = () => {
    win.style.display = win.style.display === 'none' ? 'block' : 'none';
  };
})();
