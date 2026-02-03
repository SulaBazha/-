// Получаем кнопки и popup
const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close');

// Функция "убегания" кнопки
function runAway() {
  const x = Math.random() * 200 - 100; // смещение по X (-100..+100)
  const y = Math.random() * 200 - 100; // смещение по Y (-100..+100)
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// На ПК: убегает при наведении мыши
noBtn.addEventListener('mouseover', runAway);

// На телефоне: убегает при касании
noBtn.addEventListener('touchstart', runAway);

// Убегает и при клике (чтобы на ПК тоже сработало)
noBtn.addEventListener('click', runAway);

// Кнопка «Да» — открыть popup
yesBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

// Кнопка «Закрыть» — закрыть popup
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});
