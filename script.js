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
    if (!typingText) return; // guard if element missing
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

  if (typingText) type();

  // Optional: matrix effect removed because no .face elements exist in HTML
  // If you want the effect, add elements with class 'face' and re-enable this block.
});