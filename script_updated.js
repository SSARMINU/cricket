document.addEventListener('DOMContentLoaded', function() {
   
    const playerLinks = document.querySelectorAll('#playerLink');
  
   
    playerLinks.forEach(function(playerLink) {
      
      playerLink.addEventListener('click', function(event) {
        
        event.preventDefault();
        
        
        const url = playerLink.getAttribute('href');
        
        
        window.open(url, '_blank');
      });
    });
  });
  