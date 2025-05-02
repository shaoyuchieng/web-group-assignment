// 初始化Lightbox配置
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'positionFromTop': 100,
  'disableScrolling': true,
  'fitImagesInViewport': true,
  'maxWidth': 1200,
  'maxHeight': 800,
  'alwaysShowNavOnTouchDevices': true
});

// 分类显示函数
function showCategory(category) {
  const sections = document.querySelectorAll('.gallery-section');
  sections.forEach(section => {
    section.style.display = section.classList.contains(category) ? 'flex' : 'none';
  });
}

// 默认显示室内
document.addEventListener('DOMContentLoaded', function() {
  showCategory('interior');
  
  // 修复iOS上的点击延迟
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
});
