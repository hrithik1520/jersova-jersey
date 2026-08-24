/* ============ LOADER ============ */
window.addEventListener('load',()=>{
  const l=document.getElementById('loader');
  if(l) setTimeout(()=>l.classList.add('hide'),500);
});

/* ============ CUSTOM CURSOR ============ */
const dot=document.querySelector('.cursor-dot'), ring=document.querySelector('.cursor-ring');
if(dot&&ring){
  let mx=0,my=0,rx=0,ry=0;
  window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
  function loopCursor(){rx+=(mx-rx)*0.18;ry+=(my-ry)*0.18;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loopCursor);}
  loopCursor();
  function bindHover(){
    document.querySelectorAll('a,button,.card,input,textarea,.faq-q').forEach(el=>{
      el.addEventListener('mouseenter',()=>ring.classList.add('hovered'));
      el.addEventListener('mouseleave',()=>ring.classList.remove('hovered'));
    });
  }
  bindHover();
  window.bindCursorHover=bindHover;
}

/* ============ NAV SCROLL STATE ============ */
const header=document.getElementById('siteHeader');
const totop=document.getElementById('totop');
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  if(header) header.classList.toggle('scrolled',y>40);
  if(totop) totop.classList.toggle('show',y>600);
});
if(totop) totop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ============ MOBILE MENU ============ */
const burger=document.getElementById('burger'), mobileMenu=document.getElementById('mobileMenu');
if(burger&&mobileMenu){
  burger.addEventListener('click',()=>{
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    burger.classList.remove('open');mobileMenu.classList.remove('open');
  }));
}

/* ============ SCROLL REVEAL ============ */
const io=new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}
  });
},{threshold:.15});
document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

/* ============ MATERIAL RIPPLE ============ */
function spawnRipple(el,e){
  const r=el.getBoundingClientRect();
  const size=Math.max(r.width,r.height);
  const x=(e.clientX ?? r.left+r.width/2)-r.left-size/2;
  const y=(e.clientY ?? r.top+r.height/2)-r.top-size/2;
  const span=document.createElement('span');
  span.className='ripple';
  span.style.width=span.style.height=size+'px';
  span.style.left=x+'px';
  span.style.top=y+'px';
  el.appendChild(span);
  span.addEventListener('animationend',()=>span.remove());
}
window.bindRipple=function(root){
  (root||document).querySelectorAll('.btn,.tab-btn,.totop').forEach(el=>{
    if(el.dataset.rippleBound) return;
    el.dataset.rippleBound='1';
    el.addEventListener('click',e=>spawnRipple(el,e));
  });
};
bindRipple();

/* ============ COUNT UP STATS ============ */
const countIO=new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      const el=en.target, target=+el.dataset.count;
      let cur=0; const step=Math.max(1,Math.ceil(target/60));
      const t=setInterval(()=>{
        cur+=step;
        if(cur>=target){cur=target;clearInterval(t);}
        el.textContent=cur.toLocaleString()+(target>=100?'+':'');
      },22);
      countIO.unobserve(el);
    }
  });
},{threshold:.5});
document.querySelectorAll('.num[data-count]').forEach(c=>countIO.observe(c));
