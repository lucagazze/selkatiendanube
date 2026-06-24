(function(){
  var WA='5493416916113';
  console.log('[SK-WA] script loaded v4');
  var SVG_BIG='<svg viewBox="0 0 24 24" width="26" height="26" style="width:26px;height:26px;fill:#ffffff;display:block;flex-shrink:0"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.9L4 20l4.22-1.1a7.93 7.93 0 0 0 3.8.97h.01a7.94 7.94 0 0 0 7.94-7.94 7.88 7.88 0 0 0-2.37-5.61zm-5.55 12.21a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 1 1 12.25-3.51 6.6 6.6 0 0 1-6.66 6.61zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.45.1s-.51.64-.63.78c-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99a6 6 0 0 1-1.1-1.38c-.12-.2-.01-.31.09-.41.09-.1.2-.23.3-.35.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34l-.39-.01a.74.74 0 0 0-.54.25c-.18.2-.7.69-.7 1.68 0 .99.72 1.95.82 2.08.1.13 1.4 2.15 3.4 3.02.47.2.85.33 1.14.42.48.15.92.13 1.27.08.39-.06 1.17-.48 1.34-.94.17-.46.17-.85.12-.94-.05-.08-.18-.13-.38-.23z"/></svg>';
  var SVG_SMALL='<svg viewBox="0 0 24 24" width="20" height="20" style="width:20px;height:20px;fill:#ffffff;display:block;flex-shrink:0"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.9L4 20l4.22-1.1a7.93 7.93 0 0 0 3.8.97h.01a7.94 7.94 0 0 0 7.94-7.94 7.88 7.88 0 0 0-2.37-5.61zm-5.55 12.21a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 1 1 12.25-3.51 6.6 6.6 0 0 1-6.66 6.61zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.45.1s-.51.64-.63.78c-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99a6 6 0 0 1-1.1-1.38c-.12-.2-.01-.31.09-.41.09-.1.2-.23.3-.35.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34l-.39-.01a.74.74 0 0 0-.54.25c-.18.2-.7.69-.7 1.68 0 .99.72 1.95.82 2.08.1.13 1.4 2.15 3.4 3.02.47.2.85.33 1.14.42.48.15.92.13 1.27.08.39-.06 1.17-.48 1.34-.94.17-.46.17-.85.12-.94-.05-.08-.18-.13-.38-.23z"/></svg>';
  function data(){var d={order:'',total:'',email:''};var o=(document.body.innerText||'').match(/Orden:\s*#?(\d+)/i);if(o)d.order=o[1];var t=document.querySelector('.transfer-price')||document.querySelector('[test-id="cart-total-price"]');if(t)d.total=(t.innerText||'').trim();var e=document.querySelector('[test-id="consumer-email"]')||document.querySelector('input[type="email"]');if(e)d.email=(e.innerText||e.value||'').trim();return d}
  function isOk(){var t=(document.body.innerText||'').toLowerCase();return t.indexOf('transfer')!==-1&&(t.indexOf('gracias por tu compra')!==-1||t.indexOf('cvu')!==-1)}
  function msg(d){var l=['Hola Selka! Acabo de hacer mi pedido y elegí pagar por transferencia.','',d.order?'Pedido: #'+d.order:'',d.total?'Total: '+d.total:'',d.email?'Email: '+d.email:'','','Ya tengo el CVU, voy a hacer la transferencia ahora y te paso el comprobante para coordinar el envío. Gracias!'].filter(Boolean);return encodeURIComponent(l.join('\n'))}
  function buildHref(){return 'https://wa.me/'+WA+'?text='+msg(data())}
  function makeCard(href){
    var c=document.createElement('div');c.id='sk-wa-card';
    c.setAttribute('style','background:linear-gradient(135deg,#25D366 0%,#128C7E 100%) !important;border:0 !important;border-radius:16px !important;padding:18px 22px !important;margin:0 0 16px 0 !important;display:flex !important;align-items:center !important;gap:16px !important;box-shadow:0 6px 20px rgba(37,211,102,0.28) !important;color:#ffffff !important;font-family:Arial,sans-serif !important;box-sizing:border-box !important;flex-wrap:wrap !important;width:100% !important');
    c.innerHTML='<div style="width:46px !important;height:46px !important;min-width:46px !important;background:rgba(255,255,255,0.2) !important;border-radius:50% !important;display:flex !important;align-items:center !important;justify-content:center !important;flex-shrink:0 !important">'+SVG_BIG+'</div>'+
      '<div style="flex:1 1 220px !important;min-width:0 !important;color:#ffffff !important">'+
        '<div style="font-size:15px !important;font-weight:800 !important;color:#ffffff !important;margin:0 0 2px 0 !important;line-height:1.25 !important;letter-spacing:-0.2px !important">Coordiná el pago por WhatsApp</div>'+
        '<div style="font-size:12.5px !important;color:rgba(255,255,255,0.95) !important;margin:0 !important;line-height:1.4 !important;font-weight:500 !important">Mandanos el comprobante de transferencia para coordinar tu envío.</div>'+
      '</div>'+
      '<a href="'+href+'" target="_blank" rel="noopener" style="background:#ffffff !important;color:#128C7E !important;font-weight:800 !important;font-size:11.5px !important;letter-spacing:1px !important;text-transform:uppercase !important;padding:11px 20px !important;border-radius:999px !important;text-decoration:none !important;flex-shrink:0 !important;border:0 !important;cursor:pointer !important;display:inline-flex !important;align-items:center !important;gap:6px !important;line-height:1 !important;white-space:nowrap !important;box-shadow:0 2px 8px rgba(0,0,0,0.08) !important">Abrir WhatsApp →</a>';
    return c;
  }
  function makeFab(href){
    var f=document.createElement('a');f.id='sk-wa-btn';f.href=href;f.target='_blank';f.rel='noopener';
    f.setAttribute('style','position:fixed !important;bottom:24px !important;right:24px !important;z-index:9999 !important;display:inline-flex !important;align-items:center !important;gap:9px !important;background:#25D366 !important;color:#ffffff !important;font-family:Arial,sans-serif !important;font-weight:800 !important;font-size:13.5px !important;padding:13px 20px !important;border-radius:999px !important;text-decoration:none !important;box-shadow:0 8px 26px rgba(37,211,102,0.45) !important;border:0 !important;line-height:1 !important;cursor:pointer !important');
    f.innerHTML=SVG_SMALL+'<span style="color:#ffffff !important;font-weight:800 !important">WhatsApp</span>';
    return f;
  }
  function inj(){
    if(!isOk())return;
    var href=buildHref();
    var existingCard=document.getElementById('sk-wa-card');
    var target=document.querySelector('.status.panel');
    if(target){
      // Insert/move card right above .status.panel
      if(!existingCard||existingCard.nextElementSibling!==target){
        if(existingCard)existingCard.parentNode.removeChild(existingCard);
        target.parentNode.insertBefore(makeCard(href),target);
        console.log('[SK-WA] card inserted above .status.panel');
      }
    }else if(!existingCard){
      // fallback: float at top of body
      var c=makeCard(href);
      c.setAttribute('style',c.getAttribute('style')+';position:fixed !important;top:80px !important;left:50% !important;transform:translateX(-50%) !important;z-index:9997 !important;max-width:680px !important;width:calc(100% - 32px) !important');
      document.body.appendChild(c);
    }
    if(!document.getElementById('sk-wa-btn')){document.body.appendChild(makeFab(href));console.log('[SK-WA] fab injected')}
  }
  inj();
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inj);
  try{
    var mo=new MutationObserver(function(){inj()});
    mo.observe(document.body||document.documentElement,{childList:true,subtree:true});
  }catch(e){}
  setTimeout(inj,500);setTimeout(inj,1500);setTimeout(inj,3000);setTimeout(inj,6000);
})();
