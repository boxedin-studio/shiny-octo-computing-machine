/* Click a photo to see it large. Without JavaScript the photo is a normal link to the large file. */
(function(){
  var links=[].slice.call(document.querySelectorAll('.gallery a.zoom'));
  if(!links.length)return;
  var i=0,last=null;
  var lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Photo viewer');
  lb.innerHTML='<img alt=""><button class="x" type="button">close</button><button class="p" type="button" aria-label="Previous photo">&larr;</button><button class="n" type="button" aria-label="Next photo">&rarr;</button><span class="c" aria-live="polite"></span>';
  document.body.appendChild(lb);
  var img=lb.querySelector('img'),cnt=lb.querySelector('.c');
  function load(k){
    i=(k+links.length)%links.length;
    var a=links[i],t=a.querySelector('img');
    img.classList.add('swap');
    var pre=new Image();
    pre.onload=pre.onerror=function(){img.src=a.href;img.alt=t.alt;img.classList.remove('swap')};
    pre.src=a.href;
    cnt.textContent=(i+1)+' / '+links.length;
    var nx=links[(i+1)%links.length].href;(new Image()).src=nx;
  }
  function open(k){last=document.activeElement;lb.classList.add('open');document.documentElement.style.overflow='hidden';load(k);requestAnimationFrame(function(){lb.classList.add('show')});lb.querySelector('.x').focus()}
  function close(){lb.classList.remove('show');document.documentElement.style.overflow='';setTimeout(function(){lb.classList.remove('open')},250);if(last&&last.focus)last.focus()}
  links.forEach(function(a,k){a.addEventListener('click',function(e){if(e.metaKey||e.ctrlKey||e.shiftKey)return;e.preventDefault();open(k)})});
  lb.querySelector('.x').onclick=close;
  lb.querySelector('.p').onclick=function(){load(i-1)};
  lb.querySelector('.n').onclick=function(){load(i+1)};
  lb.addEventListener('click',function(e){if(e.target===lb||e.target===img)close()});
  document.addEventListener('keydown',function(e){
    if(!lb.classList.contains('open'))return;
    if(e.key==='Escape')close();
    else if(e.key==='ArrowLeft')load(i-1);
    else if(e.key==='ArrowRight')load(i+1);
    else if(e.key==='Tab'){var b=[].slice.call(lb.querySelectorAll('button')),f=b.indexOf(document.activeElement);e.preventDefault();b[(f+(e.shiftKey?-1:1)+b.length)%b.length].focus()}
  });
  var sx=null;
  lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  lb.addEventListener('touchend',function(e){if(sx==null)return;var d=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(d)>50)load(i+(d<0?1:-1))});
})();
