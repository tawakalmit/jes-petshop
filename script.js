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