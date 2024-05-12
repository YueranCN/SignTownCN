// js/page.js
// 时间: 2024/04/18
// 作者：Frank Wang


// 页面元素数组，存储每个页面的引用
const pages = [
    document.getElementById('page1'),
    document.getElementById('page2'),
    document.getElementById('page3'),
    document.getElementById('page4')
];


// 当前页面索引，初始化为0（第一页）
let currentIndex = 0;


// 切换页面函数
function switchPage(direction) {
    let newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < pages.length) {
        let translateValue = -newIndex * 100;
        document.querySelector('.container').style.transform = `translateX(${translateValue}vw)`;
        currentIndex = newIndex;
    }
}


// 显示 Play 页面
function showPlayPage(pageId) {
    const playPage = document.getElementById('playPage');
    const iframe = playPage.querySelector('.iframe'); // 获取 iframe
    iframe.src = "../camera.html?id=" + pageId; // 添加 ID 到 URL 参数
    playPage.style.display = 'block';
    setTimeout(() => {
        playPage.classList.add('show');
    }, 10); // 短暂延迟确保 display: block 先生效
}


// 隐藏 Play 页面
function hidePlayPage() {
    const playPage = document.getElementById('playPage');
    const iframe = playPage.querySelector('.iframe'); // 获取 iframe
    playPage.classList.remove('show');
    setTimeout(() => {
        playPage.style.display = 'none';
        iframe.src = "about:blank"; // 清除 iframe 的内容
    }, 300); // 等待动画完成后隐藏
}