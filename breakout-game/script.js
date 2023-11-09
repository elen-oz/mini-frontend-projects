'use strict';

const rulesBtn = document.querySelector('#rules-btn');
const closeBtn = document.querySelector('#close-btn');
const rulesEl = document.querySelector('#rules');
const canvasEl = document.querySelector('#canvas');
const ctx = canvasEl.getContext('2d');

let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;

const ball = {
  x: canvasEl.width / 2,
  y: canvasEl.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
};

const paddle = {
  x: canvasEl.width / 2 - 40,
  y: canvasEl.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
};

const brickInfo = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true,
};

const bricks = [];
for (let i = 0; i < brickRowCount; i += 1) {
  bricks[i] = [];
  for (let j = 0; j < brickColumnCount; j += 1) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
    bricks[i][j] = { x, y, ...brickInfo };
  }
}

const drawBall = () => {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = 'goldenrod';
  ctx.fill();
  ctx.closePath();
};

const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = 'goldenrod';
  ctx.fill();
  ctx.closePath();
};

const drawScore = () => {
  // ctx.font= '1.5rem Arial';
  ctx.font = '1.5rem Courier';
  ctx.fillText(`Score: ${score}`, canvasEl.width - 100, 30);
};

const drawBricks = () => {
  bricks.forEach((column) => {
    column.forEach((brick) => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? 'cornflowerblue' : 'transparent';
      ctx.fill();
      ctx.closePath();
    });
  });
};

const draw = () => {
  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
};

draw();

rulesBtn.addEventListener('click', () => {
  rulesEl.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  rulesEl.classList.remove('show');
});
