'use strict';

const rulesBtn = document.querySelector('#rules-btn');
const closeBtn = document.querySelector('#close-btn');
const rulesEl = document.querySelector('#rules');

rulesBtn.addEventListener('click', () => {
  rulesEl.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  rulesEl.classList.remove('show');
});
