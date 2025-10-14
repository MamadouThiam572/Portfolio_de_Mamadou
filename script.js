document.addEventListener('DOMContentLoaded', function() {
  // Typing animation
  const typingText = document.getElementById('typing-text');
  const phrases = [
    'Technicien en Réseaux & Systèmes',
    'Développeur Web Autodidacte',
    'Expert en Cybersécurité'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 150);
    }
  }

  type();

  // Matrix effect on cube faces
  const faces = document.querySelectorAll('.face');
  const chars = '0123456789ABCDEF';

  faces.forEach(face => {
    for (let i = 0; i < 150; i++) {
      const span = document.createElement('span');
      span.textContent = chars[Math.floor(Math.random() * chars.length)];
      span.style.position = 'absolute';
      span.style.top = `${Math.random() * 100}%`;
      span.style.left = `${Math.random() * 100}%`;
      span.style.fontSize = `${Math.random() * 10 + 5}px`;
      span.style.opacity = Math.random();
      face.appendChild(span);
    }
  });
});