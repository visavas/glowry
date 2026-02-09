<script>
(function() {
  const GLOWRY_MENU = [
    {"Title": "กรีน บาลานซ์ โบวล์", "Price": "580 บาท", "Kcal": "340", "Category": "Bowls", "Benefits": "ดีท็อกซ์", "Ingredients": "ผักโขม, อะโวคาโด, กีวี, กล้วย, สไปรูลินา, เมล็ดฟักทอง"},
    {"Title": "ทรอปิคอล พาราไดซ์ โบวล์", "Price": "580 บาท", "Kcal": "360", "Category": "Bowls", "Benefits": "วิตามินซี", "Ingredients": "มะม่วง, สับปะรด, เสาวรส, กล้วย, โยเกิร์ตมะพร้าว, เมล็ดเจีย"},
    {"Title": "อาซาอิ เอนเนอร์จี โบวล์", "Price": "720 บาท", "Kcal": "310", "Category": "Bowls", "Benefits": "สารต้านอนุมูลอิสระ", "Ingredients": "อาซาอิพิวเร, กล้วย, บลูเบอร์รี, กราโนลา, มะพร้าวอบแห้ง"},
    {"Title": "คาเคา พาวเวอร์", "Price": "300 บาท", "Kcal": "290", "Category": "Smoothies", "Benefits": "พลังงาน & โปรตีน", "Ingredients": "โกโก้ดิบ, กล้วย, อัลมอนด์บัตเตอร์, นมข้าวโอ๊ต"},
    {"Title": "เบอร์รี บลิส", "Price": "300 บาท", "Kcal": "260", "Category": "Smoothies", "Benefits": "สารต้านอนุมูลอิสระ", "Ingredients": "บลูเบอร์รี, ราสป์เบอร์รี, สตรอว์เบอร์รี, นมอัลมอนด์"},
    {"Title": "ทรอปิคอล ซันไรส์", "Price": "300 บาท", "Kcal": "280", "Category": "Smoothies", "Benefits": "พลังงาน", "Ingredients": "มะม่วง, สับปะรด, กล้วย, กะทิ"},
    {"Title": "เบอร์รี คาล์ม", "Price": "385 บาท", "Kcal": "300", "Category": "Juices", "Benefits": "สารต้านอนุมูลอิสระ", "Ingredients": "บลูเบอร์รี, สตรอว์เบอร์รี, แอปเปิล, มิ้นต์"},
    {"Title": "เรด พาวเวอร์", "Price": "385 บาท", "Kcal": "280", "Category": "Juices", "Benefits": "การไหลเวียนโลหิต", "Ingredients": "บีทรูท, แครอท, แอปเปิล, เลมอน"},
    {"Title": "ซิตรัส โกลว์", "Price": "385 บาท", "Kcal": "260", "Category": "Juices", "Benefits": "วิตามินซี", "Ingredients": "ส้ม, เกรปฟรุต, สับปะรด, ขิง"},
    {"Title": "กรีน ไวทัลลิตี้", "Price": "385 บาท", "Kcal": "240", "Category": "Juices", "Benefits": "ดีท็อกซ์", "Ingredients": "ผักโขม, เคล, แตงกวา, แอปเปิลเขียว, เลมอน"},
    {"Title": "สไปซี่ เวคอัพ", "Price": "130 บาท", "Kcal": "60", "Category": "Shots", "Benefits": "กระตุ้นพลัง", "Ingredients": "แอปเปิล, เลมอน, ฮอร์สแรดิช"},
    {"Title": "แครอท เรเดียนซ์", "Price": "130 บาท", "Kcal": "70", "Category": "Shots", "Benefits": "วิตามิน A & C", "Ingredients": "แครอท, ส้ม, ขิง"},
    {"Title": "กรีน รีเซ็ต", "Price": "130 บาท", "Kcal": "55", "Category": "Shots", "Benefits": "ดีท็อกซ์", "Ingredients": "เซเลอรี, แตงกวา, ผักโขม, เลมอน"},
    {"Title": "โกลเด้น โกลว์", "Price": "130 บาท", "Kcal": "65", "Category": "Shots", "Benefits": "ต้านการอักเสบ", "Ingredients": "ขมิ้น, น้ำผึ้ง, พริกไทยดำ, เลมอน"},
    {"Title": "จินเจอร์ คิก", "Price": "130 บาท", "Kcal": "50", "Category": "Shots", "Benefits": "เสริมภูมิคุ้มกัน", "Ingredients": "ขิงสด, เลมอน, พริกคาเยนน์"}
  ];

  const BRAND_INFO = `
    ร้าน: Glowry
    ที่ตั้ง: สามย่านมิตรทาวน์ ชั้น 1
    เวลาทำการ: เปิดทุกวัน 08.00 – 20.00 น.
    จุดเด่น: สดใหม่ทุกแก้ว ทำตามออเดอร์
    ติดต่อ: Line: @GLOWRYBKK | Email: hello@glowrybkk.com
  `;

  const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z"></path></svg>`;

  const PROXY_URL = "https://apikey.x10-aistudio.workers.dev/v1/models/gemini-1.5-flash:generateContent";

  const chatDiv = document.createElement('div');
  chatDiv.id = 'glowry-chat-widget';
  chatDiv.innerHTML = `
    <div id="glowry-bubble" style="position:fixed;bottom:24px;right:24px;width:64px;height:64px;background:#E84F2F;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 8px 16px rgba(232,79,47,0.3);z-index:999999;transition:transform 0.2s;">
      ${LOGO_SVG}
    </div>
    <div id="glowry-window" style="display:none;position:fixed;bottom:100px;right:24px;width:350px;height:550px;background:white;border-radius:24px;box-shadow:0 12px 40px rgba(0,0,0,0.15);flex-direction:column;overflow:hidden;z-index:999999;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
      <div style="background:#E84F2F;padding:20px;color:white;font-weight:bold;display:flex;justify-content:space-between;align-items:center;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:24px;height:24px;display:flex;">${LOGO_SVG.replace('width="32"','width="24"').replace('height="32"','height="24"')}</div>
          <span style="font-size:16px;">Glowry AI Assistant</span>
        </div>
        <span id="glowry-close" style="cursor:pointer;font-size:20px;opacity:0.8;">✕</span>
      </div>
      <div id="glowry-messages" style="flex:1;padding:20px;overflow-y:auto;display:flex;flex-direction:column;gap:12px;background:#fcfcfc;">
        <div style="background:#f0f0f0;padding:12px 16px;border-radius:18px 18px 18px 4px;font-size:14px;align-self:flex-start;color:#333;line-height:1.5;">สวัสดีครับ! ยินดีต้อนรับสู่ Glowry ยินดีให้คำแนะนำเมนูสุขภาพครับ ✨</div>
      </div>
      <div style="padding:16px;border-top:1px solid #eee;display:flex;gap:10px;background:white;">
        <input id="glowry-input" type="text" placeholder="พิมพ์คุยกับเราได้เลย..." style="flex:1;border:1px solid #f0f0f0;padding:12px 16px;border-radius:14px;outline:none;font-size:14px;background:#f8f8f8;">
        <button id="glowry-send" style="background:#E84F2F;color:white;border:none;padding:10px 20px;border-radius:14px;cursor:pointer;font-weight:bold;">ส่ง</button>
      </div>
    </div>
  `;
  document.body.appendChild(chatDiv);

  const bubble = document.getElementById('glowry-bubble');
  const win = document.getElementById('glowry-window');
  const close = document.getElementById('glowry-close');
  const input = document.getElementById('glowry-input');
  const send = document.getElementById('glowry-send');
  const msgBox = document.getElementById('glowry-messages');

  bubble.onclick = () => {
    win.style.display = win.style.display === 'none' ? 'flex' : 'none';
    if(win.style.display === 'flex') input.focus();
  };
  close.onclick = () => win.style.display = 'none';

  async function askAI() {
    const text = input.value.trim();
    if (!text) return;
    
    appendMsg(text, 'user');
    input.value = '';
    const loadingDiv = appendMsg("กำลังประมวลผล...", 'ai');
    loadingDiv.style.opacity = "0.6";
    
    try {
      const response = await fetch(PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Role: AI Health Specialist at Glowry Cafe. Info: ${BRAND_INFO}. Data: ${JSON.stringify(GLOWRY_MENU)}. Instruction: Recommend products from list precisely with price and calories. Answer in Thai. User query: ${text}` }] }]
        })
      });
      
      const data = await response.json();
      loadingDiv.remove();
      
      if (data.candidates && data.candidates[0]) {
        appendMsg(data.candidates[0].content.parts[0].text, 'ai');
      } else { throw new Error("API Error"); }
    } catch (e) {
      loadingDiv.innerText = "ขออภัยครับ ระบบขัดข้องชั่วคราว";
      loadingDiv.style.opacity = "1";
    }
  }

  function appendMsg(text, role) {
    const d = document.createElement('div');
    d.style = `padding:12px 16px;border-radius:18px;font-size:14px;max-width:85%;line-height:1.5;box-shadow:0 1px 2px rgba(0,0,0,0.05);white-space:pre-wrap;${role==='user'?'background:#E84F2F;color:white;align-self:flex-end;border-bottom-right-radius:4px;':'background:#fff;color:#333;align-self:flex-start;border:1px solid #eee;border-bottom-left-radius:4px;'}`;
    d.innerText = text;
    msgBox.appendChild(d);
    msgBox.scrollTop = msgBox.scrollHeight;
    return d;
  }

  send.onclick = askAI;
  input.onkeypress = (e) => { if(e.key === 'Enter') askAI(); };
})();
</script>
