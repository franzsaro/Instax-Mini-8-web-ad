const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    const firstSpec = document.querySelector('.first-info');

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    firstSpec.classList.toggle("open");
    
}

function openInfo(info) {
  var i;
  var x = document.getElementsByClassName("spec-info");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(info).style.display = "block";  
}

function openAccess(access) {
  var i;
  var x = document.getElementsByClassName("accessory-tray");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(access).style.display = "flex";  
}
