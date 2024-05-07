// 获取元素
var modal = document.getElementById("modal");
var openBtn = document.getElementById("openModal");
var closeBtn = document.getElementById("closeModal");
var backdrop = document.getElementById("backdrop");

// 打开模态框
openBtn.onclick = function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
    setTimeout(function() { // 延时以应用动画
        modal.style.transform = "translate(-50%, -50%) scale(1)"; // 放大至原始尺寸
        modal.style.opacity = "1";
        backdrop.style.opacity = "1";
    }, 10);
}

// 关闭模态框
closeBtn.onclick = function() {
    modal.style.transform = "translate(-50%, -50%) scale(0.5)"; // 缩小
    modal.style.opacity = "0";
    backdrop.style.opacity = "0";
    setTimeout(function() { // 延时以隐藏元素
        modal.style.display = "none";
        backdrop.style.display = "none";
    }, 500); // 与动画时间相匹配
}
document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.peo-1'); // 获取图片元素
    let currentSrc = 'people2';

    setInterval(() => {
        if (currentSrc === 'people2') {
            image.src = '../images/people3.png'; // 更改图片源
            currentSrc = 'people3';
        } else {
            image.src = '../images/people2.png'; // 更改图片源回原图
            currentSrc = 'people2';
        }
    }, 500); // 每500毫秒切换一次
});

var backModal = document.getElementById('backModal');
backModal.onclick = function() {
    window.location.href = '../indexk.html';
};


// 设置初始透明度
document.getElementById('img4').style.opacity = "0";
document.getElementById('img5').style.opacity = "0";

// 监听noteImage的点击事件，增加透明度
document.getElementById('noteImage').addEventListener('click', function(event) {
    var img = document.getElementById('img4');
    img.style.opacity = "1"; // 设置为半透明
    event.stopPropagation(); // 阻止事件冒泡到document
});

// 监听整个文档的点击事件，用于恢复透明度
document.addEventListener('click', function(event) {
    var img = document.getElementById('img4');
    // 检查点击是否发生在img4图片本身
    if (event.target !== img) {
        img.style.opacity = "0"; // 恢复透明度为完全透明
    }
});

// 监听no2Image的点击事件，增加透明度
document.getElementById('no2Image').addEventListener('click', function(event) {
    var img = document.getElementById('img5');
    img.style.opacity = "1"; // 设置为半透明
    event.stopPropagation(); // 阻止事件冒泡到document
});

// 监听整个文档的点击事件，用于恢复透明度
document.addEventListener('click', function(event) {
    var img = document.getElementById('img5');
    // 检查点击是否发生在img5图片本身
    if (event.target !== img) {
        img.style.opacity = "0"; // 恢复透明度为完全透明
    }
});

