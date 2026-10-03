import { findBefore } from './core.js';
import { fixture } from './fixtures.js';
const result = document.querySelector('#result');
const matches = document.querySelector('#matches');
document.querySelector('#source').textContent = JSON.stringify(fixture, null, 2);
document.querySelector('#finder').addEventListener('submit', event => {
  event.preventDefault(); matches.replaceChildren();
  try {
    const found = findBefore(fixture, document.querySelector('#cutoff').value);
    result.classList.remove('error'); result.textContent = found.length ? `${found.length} matching items` : 'No items were found before that date.';
    for (const item of found) {
      const li = document.createElement('li');
      li.textContent = `${item.id} · ${item.label} · ${item.foundOn}`; matches.append(li);
    }
  } catch (error) { showError(error); }
});

function showError(error) {
  result.classList.add('error');
  result.textContent = error.message;
}
