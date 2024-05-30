const textArea = document.querySelector('textarea');
const pEl = document.createElement('p');
const div = document.querySelector('.show-container');

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if (e.key === 'Enter') {
    randomSelect();
  }
});

function createTags(input) {
  const array = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  div.textContent = '';
  array.forEach((item) => {
    const pEl = document.createElement('p');
    pEl.className = 'show';
    pEl.textContent = item;
    div.appendChild(pEl);
  });
}

function randomSelect() {
  const interval = setInterval(() => {
    const randomItem = pickRandomItems();

    if (randomItem !== undefined) {
      toggleHighlight(randomItem);

      setTimeout(() => {
        toggleHighlight(randomItem);
      }, 100);
    }
  }, 100);
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomItem = pickRandomItems();

      toggleHighlight(randomItem);
    }, 100);
  }, 3000);
}

function pickRandomItems() {
  const items = document.querySelectorAll('.show');
  return items[Math.trunc(Math.random() * items.length)];
}

function toggleHighlight(item) {
  item.classList.toggle('highlight');
}
