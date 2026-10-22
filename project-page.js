/* Fills in a project page from projects.js, using the page's own file name (e.g. carpentry-3.html). */
(function(){
  var S=window.SITE||{projects:[]};
  var id=location.pathname.split('/').pop().replace(/\.html?$/,'');
  var p=S.projects.filter(function(x){return x.id===id})[0];
  if(!p){location.replace('index.html');return}
  document.documentElement.style.setProperty('--bg',p.color);
  var meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute('content',p.color);
  document.title=p.name.replace(/\b\w/g,function(c){return c.toUpperCase()})+' \u2014 Boxed In Studio';
  function fill(){var h=document.getElementById('project-title');if(h)h.textContent=p.name}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fill);else fill();
})();
