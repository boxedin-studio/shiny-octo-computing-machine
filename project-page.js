/* Builds a project page from projects.js, using the page's own file name (e.g. carpentry-3.html). */
(function(){
  var S=window.SITE||{projects:[]};
  var id=location.pathname.split('/').pop().replace(/\.html?$/,'');
  var p=S.projects.filter(function(x){return x.id===id})[0];
  if(!p){location.replace('index.html');return}
  document.documentElement.style.setProperty('--bg',p.color);
  var meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute('content',p.color);
  document.title=p.name.replace(/\b\w/g,function(c){return c.toUpperCase()})+' \u2014 Boxed In Studio';

  function el(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e}

  function build(){
    document.getElementById('project-title').textContent=p.name;
    var body=document.getElementById('project-body');

    if(p.description){
      var d=el('div','desc');
      String(p.description).split(/\n\s*\n/).forEach(function(t){d.appendChild(el('p',null,t.trim()))});
      body.appendChild(d);
    }

    if(p.details&&p.details.length){
      var dl=el('dl','details');
      p.details.forEach(function(kv){var row=el('div');row.appendChild(el('dt',null,kv[0]));row.appendChild(el('dd',null,kv[1]));dl.appendChild(row)});
      body.appendChild(dl);
    }

    var g=el('div','gallery'),imgs=p.images||[];
    if(imgs.length){
      imgs.forEach(function(im,i){
        var src=typeof im==='string'?im:im.src;
        var alt=(typeof im==='object'&&im.alt)||(p.name+' \u2013 image '+(i+1));
        var f=el('figure'),img=document.createElement('img');
        img.src=src;img.alt=alt;img.decoding='async';if(i>0)img.loading='lazy';
        img.addEventListener('load',function(){img.classList.add('in')});
        f.appendChild(img);g.appendChild(f);
        if(img.complete)img.classList.add('in');
      });
    }else{
      for(var i=0;i<4;i++)g.appendChild(el('figure','ph','image'));
    }
    body.appendChild(g);

    var sib=S.projects.filter(function(x){return x.medium===p.medium}),n=sib.length,k=sib.indexOf(p);
    if(n>1){
      var prev=sib[(k-1+n)%n],next=sib[(k+1)%n],nav=el('nav','pager');
      nav.setAttribute('aria-label','More '+p.medium+' projects');
      [[prev,'previous','prev'],[next,'next','next']].forEach(function(x){
        var a=el('a','ul '+x[2]);a.href=x[0].id+'.html';
        a.appendChild(el('small',null,x[1]));a.appendChild(el('span',null,x[0].name));
        nav.appendChild(a);
      });
      body.appendChild(nav);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
})();
