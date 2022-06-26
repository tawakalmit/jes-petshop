// tangkap elemen menu toggle, sidebar dan close
const menuToggle = document.querySelector('.menu-toggle')
const sidebar = document.querySelector('.sidebar')
const close = document.querySelector('.close')

// masukkan event
menuToggle.addEventListener('click',function(){
    sidebar.classList.toggle('active');
})

close.addEventListener('click', function() {
    sidebar.classList.toggle('active');
})

// onscroll reveal animation
    // tangkap event ketika windows sedang di scroll
    window.addEventListener('scroll', reveal );

    // fungsi reveal
    
    function reveal(){
      // tangkap DOM reveal
      const reveals = document.querySelectorAll('.reveal');

      // lakukan perulangan
      for (let i = 0; i < reveals.length; i++){
        // tangkap DOM
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 50;

        // masukkan logic
        if (revealTop < windowHeight - revealPoint){
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    }