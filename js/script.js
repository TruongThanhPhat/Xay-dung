document.addEventListener("DOMContentLoaded", function(){
    const contactForm = document.getElementById("contactForm");
    if(contactForm){
      contactForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Cảm ơn bạn đã liên hệ với VietMuong!");
        contactForm.reset();
      });
    }
  });
  