/* Enlarge button and full-screen viewer for drawings, on project pages that use layout:"tidy".
   Optional polish: without this file the drawings still show in the page, just without the button.
   Click the button (or the drawing) to see the drawing large. On a phone, drag to move around it. */
(function(){
  var boxes=[].slice.call(document.querySelectorAll('.gallery .dw'));
  if(!boxes.length)return;
  var dz=document.createElement('div');
  dz.className='dz';dz.setAttribute('role','dialog');dz.setAttribute('aria-modal','true');dz.setAttribute('aria-label','Drawing viewer');
  dz.innerHTML='<header><span></span><button type="button">close</button></header><div class="hintm">Drag to move around the drawing</div><div class="sc" tabindex="0"></div>';
  document.body.appendChild(dz);
  var sc=dz.querySelector('.sc'),ttl=dz.querySelector('header span'),closeBtn=dz.querySelector('button'),last=null;
  function close(){
    dz.classList.remove('open');document.documentElement.style.overflow='';
    if(last&&last.focus)last.focus();
  }
  closeBtn.addEventListener('click',close);
  document.addEventListener('keydown',function(e){
    if(!dz.classList.contains('open'))return;
    if(e.key==='Escape')close();
    else if(e.key==='Tab'){e.preventDefault();(document.activeElement===closeBtn?sc:closeBtn).focus()}
  });
  boxes.forEach(function(box){
    var svg=box.querySelector('svg');
    if(!svg)return;
    var title=box.getAttribute('data-title')||svg.getAttribute('aria-label')||'drawing';
    function open(){
      last=document.activeElement;
      sc.innerHTML='';sc.appendChild(svg.cloneNode(true));
      ttl.textContent=title;
      dz.classList.add('open');document.documentElement.style.overflow='hidden';
      sc.scrollTop=0;sc.scrollLeft=0;closeBtn.focus();
    }
    var b=document.createElement('button');
    b.type='button';b.className='enl';b.textContent='enlarge';
    b.setAttribute('aria-label','Enlarge the drawing: '+title);
    b.addEventListener('click',function(e){e.stopPropagation();open()});
    box.appendChild(b);
    svg.addEventListener('click',open);
  });
})();
