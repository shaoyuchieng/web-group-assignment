const thumbnail = document.querySelector('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

thumbnail.addEventListener('click', () => {
  lightbox.style.display = 'flex';
  lightboxImg.src = thumbnail.src;
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// 支持鼠标拖动和缩放查看细节
let scale = 1;
let originX = 0, originY = 0;
let isDragging = false;
let startX, startY;

const img = lightboxImg;

img.addEventListener('wheel', (e) => {
  e.preventDefault();
  scale += e.deltaY * -0.001;
  scale = Math.min(Math.max(1, scale), 5); // 限制缩放比例
  img.style.transform = `scale(${scale})`;
});

// 拖动逻辑
img.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - originX;
  startY = e.clientY - originY;
  img.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  originX = e.clientX - startX;
  originY = e.clientY - startY;
  img.style.transform = `scale(${scale}) translate(${originX / scale}px, ${originY / scale}px)`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  img.style.cursor = 'grab';
});
