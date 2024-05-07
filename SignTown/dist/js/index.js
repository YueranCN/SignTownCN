/**
 * 文件名: index.js
 * 创建日期: 2024-04-27
 * 修改日期: 2024-04-27
 * 文件说明: 首页交互脚本
 * 作者: Frank Wang
 */

let currentImage = 1; // 当前图片编号
let currentBanner = 1; // 当前banner编号
const app = document.getElementById('app');

function changeBackground() {
    // 淡出当前容器，包括背景、图片和按钮
    app.style.opacity = 0;
    document.getElementById('container').style.opacity = 0;

    setTimeout(() => {
        // 更新图片路径
        if (currentBanner === 1) {
            currentBanner = 2; // 切换到第二个banner
        } else {
            currentBanner = 1; // 返回第一个banner
        }
        currentImage = currentImage === 1 ? 2 : 1;
        app.style.backgroundImage = `url('assets/index/banner${currentBanner}.jpg')`;

        // 按钮更改
        const newBtns = document.querySelectorAll('.new-btn');
        const oldBtns = document.querySelectorAll('.old-btn');
        const pic = document.querySelector('.pic');
        for (let btn of newBtns) {
            btn.style.display = 'block';
            btn.style.display = 'flex';
        }
        for (let btn of oldBtns) {
            btn.style.display = 'none';
        }

        // 素材图更换

        // 淡入新背景
        setTimeout(() => {
            app.style.opacity = 1;
            document.getElementById('container').style.opacity = 1;
            document.getElementById('title').style.opacity = 1;
            document.getElementById('bor').style.opacity = 1;
        }, 500);
    }, 500);
}

// 设置初始背景图片
app.style.backgroundImage = 'url("assets/index/banner1.jpg")';


// 图片数组，包含所有参与循环的图片路径
const images = ["assets/index/pic2-1.png", "assets/index/pic2-2.png"];
let currentIndex = 0;  // 当前图片的索引

// 函数用于更换图片
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;  // 更新索引，循环数组
    const imgElement = document.getElementById('animatedImage');
    imgElement.src = images[currentIndex];  // 更换图片源
}

// 设置定时器，每1000毫秒（1秒）更换图片
setInterval(changeImage, 500);