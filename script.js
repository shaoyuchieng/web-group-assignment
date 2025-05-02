// 初始化Lightbox配置
// 初始化Lightbox配置
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'positionFromTop': 0,
  'showImageNumberLabel': false,
  'disableScrolling': true,
  'fitImagesInViewport': true,
  'maxWidth': 1200,
  'maxHeight': 800,
  'alwaysShowNavOnTouchDevices': true,
  'albumLabel': ''
});


// 分类显示函数保持不变
function showCategory(category) {
  const sections = document.querySelectorAll('.gallery-section');
  sections.forEach(section => {
    section.style.display = section.classList.contains(category) ? 'flex' : 'none';
  });
}

// 默认显示室内
document.addEventListener('DOMContentLoaded', function() {
  showCategory('interior');
});
