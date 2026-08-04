document.addEventListener('DOMContentLoaded', () => {

  // 1. MENU MOBILE
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // 2. ACESSIBILIDADE
  let fontScale = 1;
  const btnFontIncrease = document.getElementById('btn-font-increase');
  const btnFontDecrease = document.getElementById('btn-font-decrease');

  btnFontIncrease?.addEventListener('click', () => {
    if (fontScale < 1.3) {
      fontScale += 0.08;
      document.documentElement.style.setProperty('--font-scale', fontScale);
    }
  });

  btnFontDecrease?.addEventListener('click', () => {
    if (fontScale > 0.85) {
      fontScale -= 0.08;
      document.documentElement.style.setProperty('--font-scale', fontScale);
    }
  });

  // 3. MODO ESCURO E CONTRASTE
  const btnDarkMode = document.getElementById('btn-dark-mode');
  const btnContrast = document.getElementById('btn-contrast');

  btnDarkMode?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.remove('high-contrast');
  });

  btnContrast?.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    document.body.classList.remove('dark-mode');
  });

  // 4. PORTAL DE ESCUTA ANÔNIMO
  const emotionBtns = document.querySelectorAll('.btn-emotion');
  const formEscuta = document.getElementById('form-escuta');
  const escutaFeedback = document.getElementById('escuta-feedback');
  const btnNovoDesabafo = document.getElementById('btn-novo-desabafo');

  emotionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      emotionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  formEscuta?.addEventListener('submit', (e) => {
    e.preventDefault();
    formEscuta.classList.add('hidden');
    escutaFeedback.classList.remove('hidden');
  });

  btnNovoDesabafo?.addEventListener('click', () => {
    formEscuta.reset();
    escutaFeedback.classList.add('hidden');
    formEscuta.classList.remove('hidden');
  });

  // 5. QUIZ INTERATIVO
  const quizForm = document.getElementById('quiz-form');
  const quizResult = document.getElementById('quiz-result');
  const progressBar = document.getElementById('quiz-progress-bar');
  const resultScore = document.getElementById('result-score');
  const resultTitle = document.getElementById('result-title');
  const resultMsg = document.getElementById('result-msg');
  const btnRetryQuiz = document.getElementById('btn-retry-quiz');

  quizForm?.addEventListener('change', () => {
    const answeredCount = document.querySelectorAll('#quiz-form input[type="radio"]:checked').length;
    const progressPercent = (answeredCount / 5) * 100;
    if (progressBar) progressBar.style.width = `${progressPercent}%`;
  });

  quizForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    const q5 = document.querySelector('input[name="q5"]:checked')?.value;

    if (q1 === 'correct') score++;
    if (q2 === 'correct') score++;
    if (q3 === 'correct') score++;
    if (q4 === 'correct') score++;
    if (q5 === 'correct') score++;

    quizForm.classList.add('hidden');
    quizResult.classList.remove('hidden');

    if (resultScore) resultScore.textContent = `${score} / 5`;

    if (score === 5) {
      resultTitle.textContent = "Pontuação Máxima! 🎉";
      resultMsg.textContent = "Você deu um show de respeito, empatia e segurança escolar!";
    } else if (score >= 3) {
      resultTitle.textContent = "Muito Bom! 🌟";
      resultMsg.textContent = "Você está no caminho certo para espalhar boas atitudes no colégio.";
    } else {
      resultTitle.textContent = "Vamos Aprender Juntos! 🌱";
      resultMsg.textContent = "Dê uma olhadinha nos tópicos da página e tente de novo!";
    }
  });

  btnRetryQuiz?.addEventListener('click', () => {
    quizForm.reset();
    if (progressBar) progressBar.style.width = '0%';
    quizResult.classList.add('hidden');
    quizForm.classList.remove('hidden');
  });

});