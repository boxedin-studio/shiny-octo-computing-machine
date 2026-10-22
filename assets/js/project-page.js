/* Optional polish for project pages. The pages work without this file.
   Photos fade in as they load, and a photo that cannot be found is left out instead of showing a gap. */
(function(){
  document.querySelectorAll('.gallery img').forEach(function(img){
    var fig=img.closest('figure');
    if(img.complete){if(!img.naturalWidth&&fig)fig.remove();return}
    img.classList.add('loading');
    img.addEventListener('load',function(){img.classList.remove('loading')});
    img.addEventListener('error',function(){if(fig)fig.remove()});
  });
})();
