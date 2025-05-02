function showCategory(category) {
    const sections = document.querySelectorAll('.gallery-section');
    sections.forEach(section => {
      section.style.display = section.classList.contains(category) ? 'flex' : 'none';
    });
  }

// 初始化Lightbox时设置居中选项
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'positionFromTop': 100, // 你可以调整这个值来微调垂直位置
  'disableScrolling': true
});
  showCategory('interior'); // 默认显示室内
  
