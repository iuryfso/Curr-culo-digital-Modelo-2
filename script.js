const revealElements = document.querySelectorAll('.reveal');
const profileCard = document.querySelector('.profile-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => observer.observe(element));

if (profileCard && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    profileCard.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}
