const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show')
})

document.addEventListener('mousemove', move);
function move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('dataspeed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

gsap.from('navlogo', 'navtoggle', {opacity: 0, duration: 1, delay: 2, y: 10})
gsap.from('navitem', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2 })
gsap.from('hometitle', {opacity: 0, duration: 1, delay: 1.6, y: 30})
gsap.from('homedescription', {opacity: 0, duration: 1, delay: 1.8, y: 30})
gsap.from("homebutton", {opacity: 0, duration: 1, delay: 2.1, y: 30})
gsap.from('homeimg', {opacity: 0, duration: 1, delay: 1.3, y: 30})