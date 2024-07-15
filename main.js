document.addEventListener('touchstart', function() {
    document.body.classList.add('touch-active');
  });
  
  document.addEventListener('touchend', function() {
    document.body.classList.remove('touch-active');
  });
  