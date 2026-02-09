(function() {
  const PROXY_URL = "https://glowry.x10-aistudio.workers.dev/api";
  const LOGO = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z"></path></svg>';
  
  const chatDiv = document.createElement('div');
  chatDiv.style.cssText = "position:fixed; z-index:999999999; pointer-events:auto;";
  
  chatDiv.innerHTML = `
    <div id="glowry-bubble" style="position:fixed;bottom:24px;right:24px;width:64px;height:64px;background:#E84F2F;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 8px 16px rgba(232,79,47,0.3);z-index:999999999;">${LOGO}</div>
    <div id="glowry-win" style="display:none;position:fixed;bottom:100px;right:24px;width:340px;height:500px;background:white;border-radius:24px;box-shadow:0 12px 40px rgba(0,0,0,0.15);flex-direction:column;overflow:hidden;z-index:999999999;font-family:sans-serif;">
      <div style="background:#E84F2F;padding:20px;color:white;font-weight:bold;display:flex;justify-content:space-between;align-items:center;">
         <span>🌿 Glowry AI Assistant</span><span id="glowry-close" style="cursor:pointer;padding:5px;">✕</span>
      </div>
      <div id="glowry-msg" style="flex:1;padding:20px;overflow-y:auto;display:flex;flex-direction:column;gap:12px;background:#fcfcfc;font-size:14px;"><div>สวัสดีครับ! ยินดีต้อนรับสู่ Glowry ครับ ✨</div></div>
      <div style="padding:16px;border-top:1px solid #eee;display:flex;gap:10px;background:white;align-items:flex-end;">
        <!-- CONTENTEDITABLE INSTEAD OF INPUT -->
        <div id="glowry-in" contenteditable="true" data-placeholder="ถามเราได้นะ..." style="flex:1;border:1px solid #ddd;padding:12px;border-radius:12px;outline:none;color:black;background:white;font-size:14px;min-height:20px;max-height:100px;overflow-y:auto;pointer-events:auto !important;"></div>
        <button id="glowry-btn" style="background:#E84F2F;color:white;border:none;padding:10px 20px;border-radius:12px;cursor:pointer;font-weight:bold;height:42px;">ส่ง</button>
      </div>
    </div>
  `;
  document.body.appendChild(chatDiv);

  const bubble = document.getElementById('glowry-bubble');
  const win = document.getElementById('glowry-win');
  const input = document.getElementById('glowry-in');
  const msgBox = document.getElementById('glowry-msg');

  bubble.onclick = (e) => {
    e.stopPropagation();
    win.style.display = win.style.display === 'none' ? 'flex' : 'none';
    if(win.style.display === 'flex') setTimeout(() => input.focus(), 200);
  };

  document.getElementById('glowry-close').onclick = (e) => { e.stopPropagation(); win.style.display = 'none'; };

  // Block ALL events from bubbling up to Framer
  const limiter = (e) => e.stopPropagation();
  ['keydown', 'keyup', 'keypress', 'mousedown', 'mouseup', 'click'].forEach(evt => {
    input.addEventListener(evt, limiter, true);
  });

  async function ask() {
    const text = input.innerText.trim(); if(!text) return;
    append(text, 'user');
    input.innerText = '';
    const load = append('กำลังคิด...', 'ai');
    try {
      const res = await fetch(PROXY_URL, { method: 'POST', body: JSON.stringify({text}) });
      const data = await res.json();
      load.innerText = data.text;
    } catch(e) { load.innerText = "ขออภัยครับ ระบบขัดข้อง"; }
  }

  function append(t, r) {
    const d = document.createElement('div');
    d.style = `padding:12px;border-radius:14px;max-width:85%;white-space:pre-wrap;${r==='user'?'background:#E84F2F;color:white;align-self:flex-end;':'background:#fff;border:1px solid #eee;align-self:flex-start;'}`;
    d.innerText = t; msgBox.appendChild(d);
    msgBox.scrollTop = 99999; return d;
  }

  document.getElementById('glowry-btn').onclick = (e) => { e.stopPropagation(); ask(); };
  input.onkeydown = (e) => {
    e.stopPropagation();
    if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(); }
  };
})();
