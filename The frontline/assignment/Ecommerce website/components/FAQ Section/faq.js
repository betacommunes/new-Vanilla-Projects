const questions = document.querySelectorAll('.faq-question');

questions.forEach(btn => {
  btn.addEventListener('click', () => {
    const isActive = btn.classList.contains('active');

    // Close all open answers
    questions.forEach(q => {
      q.classList.remove('active');
      q.nextElementSibling.style.maxHeight = null;
      q.querySelector('.arrow').textContent = '˅';
    });

    // Open clicked one if it was not active
    if (!isActive) {
      btn.classList.add('active');
      const answer = btn.nextElementSibling;
      const arrow = btn.querySelector('.arrow');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      arrow.textContent = '˄'; // upward arrow
    }
  });
});
