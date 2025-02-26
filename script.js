function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    const experienceBoxes = document.querySelectorAll('.experience-box');
    

    experienceBoxes.forEach(box => {
      box.classList.add('closed');
      

      const details = box.querySelector('.experience-details');
      if (details) {
        details.classList.remove('expanded');
      }
    });
    
    experienceBoxes.forEach(box => {
      const header = box.querySelector('.experience-header');
      const details = box.querySelector('.experience-details');
      const eyeBtn = box.querySelector('.eye-btn');
      
      if (header && details) {
        header.addEventListener('click', function(e) {
          if (eyeBtn && e.target !== eyeBtn && !eyeBtn.contains(e.target)) {
            toggleDetails(box, details);
          }
        });
        
        if (eyeBtn) {
          eyeBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the header click from also firing
            toggleDetails(box, details);
          });
        }
      }
    });
    
    function toggleDetails(box, details) {
      const isExpanded = details.classList.contains('expanded');
      
      details.classList.toggle('expanded');
      
      if (isExpanded) {
        box.classList.remove('open');
        box.classList.add('closed');
      } else {
        box.classList.add('open');
        box.classList.remove('closed');
      }
      

      const eyeBtn = box.querySelector('.eye-btn');
      if (eyeBtn) {
        eyeBtn.setAttribute('aria-label', 
          isExpanded ? 'Show details' : 'Hide details');
      }
    }
  });