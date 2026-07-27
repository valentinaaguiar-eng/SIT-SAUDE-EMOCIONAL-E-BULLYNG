// --- NAVEGAÇÃO POR ABAS (SPA) ---
function switchTab(tabId) {
    const sections = document.querySelectorAll('.page-section');
    const buttons = document.querySelectorAll('.nav-btn');

    sections.forEach(sec => sec.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    
    // Atualiza botão ativo
    const activeBtn = Array.from(buttons).find(b => b.getAttribute('onclick').includes(tabId));
    if (activeBtn) activeBtn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- ACESSIBILIDADE: MODO ESCURO E ALTO CONTRASTE ---
const btnDarkMode = document.getElementById('btn-dark-mode');
const btnHighContrast = document.getElementById('btn-high-contrast');

btnDarkMode.addEventListener('click', () => {
    document.body.classList.removeClass('high-contrast-theme');
    document.body.classList.toggle('dark-theme');
});

btnHighContrast.addEventListener('click', () => {
    document.body.classList.removeClass('dark-theme');
    document.body.classList.toggle('high-contrast-theme');
});

// --- ACESSIBILIDADE: AUMENTAR/DIMINUIR FONTE ---
let currentFontSize = 16;
document.getElementById('btn-font-increase').addEventListener('click', () => {
    if (currentFontSize < 22) {
        currentFontSize += 2;
        document.documentElement.style.setProperty('--font-base', `${currentFontSize}px`);
    }
});

document.getElementById('btn-font-decrease').addEventListener('click', () => {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        document.documentElement.style.setProperty('--font-base', `${currentFontSize}px`);
    }
});

// --- FORMULÁRIO DE ESCUTA ANÔNIMO ---
const ventForm = document.getElementById('ventForm');
const autoReply = document.getElementById('autoReply');

ventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Exibe resposta com animação
    autoReply.classList.remove('hidden');
    
    // Limpa o formulário sem salvar nada
    ventForm.reset();
});

// --- LÓGICA DO QUIZ (5 PERGUNTAS) ---
const quizForm = document.getElementById('quizForm');
const quizResult = document.getElementById('quizResult');

const correctAnswers = {
    q1: 'sim',
    q2: 'nao',
    q3: 'correto',
    q4: 'nao',
    q5: 'nao'
};

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    const formData = new FormData(quizForm);

    for (let [question, answer] of formData.entries()) {
        if (correctAnswers[question] === answer) {
            score++;
        }
    }

    // Exibe resultado
    quizResult.classList.remove('hidden');
    quizResult.innerHTML = `
        <i class="fa-solid fa-trophy" style="color: var(--accent); font-size: 2rem; margin-bottom: 0.5rem;"></i>
        <p>Você acertou <strong>${score} de 5</strong> perguntas!</p>
        <p style="font-size: 0.95rem; font-weight: normal; margin-top: 0.5rem;">
            ${score >= 4 ? 'Parabéns! Você demonstra uma excelente compreensão sobre respeito e empatia.' : 'Bom esforço! Continue aprendendo sobre como promover um ambiente mais seguro.'}
        </p>
    `;

    quizResult.scrollIntoView({ behavior: 'smooth' });
});

// --- BOTÃO VOLTAR AO TOPO ---
const btnBackToTop = document.getElementById('btn-back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnBackToTop.style.display = 'block';
    } else {
        btnBackToTop.style.display = 'none';
    }
});

btnBackToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});