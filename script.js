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
    });
    

    experienceBoxes.forEach(box => {
      const header = box.querySelector('.experience-header');
      const details = box.querySelector('.experience-details');
      const eyeBtn = box.querySelector('.eye-btn');
      

      header.addEventListener('click', function(e) {

        if (e.target !== eyeBtn && !eyeBtn.contains(e.target)) {
          toggleDetails(box, details);
        }
      });
      

      eyeBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the header click from also firing
        toggleDetails(box, details);
      });
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
      
      // Update the button's aria-label for accessibility
      const eyeBtn = box.querySelector('.eye-btn');
      eyeBtn.setAttribute('aria-label', 
        isExpanded ? 'Show details' : 'Hide details');
    }
  });