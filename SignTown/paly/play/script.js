// 获取元素
var modal = document.getElementById("modal");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var openBtn = document.getElementById("openModal");
var closeBtn = document.getElementById("closeModal");
var closeBtn2 = document.getElementById("closeModal2");
var closeBtn3 = document.getElementById("closeModal3");
var backdrop = document.getElementById("backdrop");
var noteImage = document.getElementById("noteImage");
var no2Image = document.getElementById("no2Image");

// 打开第一个模态框
openBtn.onclick = function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
    setTimeout(function() {
        modal.style.transform = "translate(-50%, -50%) scale(1)";
        modal.style.opacity = "1";
        backdrop.style.opacity = "1";
    }, 10);
};

// 打开第二个模态框（通过 noteImage）
noteImage.onclick = function() {
    modal2.style.display = "block";
    backdrop.style.display = "block";
    setTimeout(function() {
        modal2.style.transform = "translate(-50%, -50%) scale(1)";
        modal2.style.opacity = "1";
        backdrop.style.opacity = "1";
    }, 10);
};

// 打开第三个模态框（通过 no2Image）
no2Image.onclick = function() {
    modal3.style.display = "block";
    backdrop.style.display = "block";
    setTimeout(function() {
        modal3.style.transform = "translate(-50%, -50%) scale(1)";
        modal3.style.opacity = "1";
        backdrop.style.opacity = "1";
    }, 10);
};

// 关闭第一个模态框
closeBtn.onclick = function() {
    modal.style.transform = "translate(-50%, -50%) scale(0.5)";
    modal.style.opacity = "0";
    backdrop.style.opacity = "0";
    setTimeout(function() {
        modal.style.display = "none";
        backdrop.style.display = "none";
    }, 500);
};

// 关闭第二个模态框
closeBtn2.onclick = function() {
    modal2.style.transform = "translate(-50%, -50%) scale(0.5)";
    modal2.style.opacity = "0";
    backdrop.style.opacity = "0";
    setTimeout(function() {
        modal2.style.display = "none";
        backdrop.style.display = "none";
    }, 500);
};

// 关闭第三个模态框
closeBtn3.onclick = function() {
    modal3.style.transform = "translate(-50%, -50%) scale(0.5)";
    modal3.style.opacity = "0";
    backdrop.style.opacity = "0";
    setTimeout(function() {
        modal3.style.display = "none";
        backdrop.style.display = "none";
    }, 500);
};

// 点击 backdrop 关闭所有模态框
backdrop.onclick = function() {
    [modal, modal2, modal3].forEach(function(m) {
        if (m.style.display === "block") {
            m.style.transform = "translate(-50%, -50%) scale(0.5)";
            m.style.opacity = "0";
        }
    });
    backdrop.style.opacity = "0";
    setTimeout(function() {
        [modal, modal2, modal3].forEach(function(m) {
            m.style.display = "none";
        });
        backdrop.style.display = "none";
    }, 500);
};


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
document.getElementById('noteImage').addEventListener('mouseover', function() {
    this.src = '../images/notes1_hover.png'; // 鼠标悬停时更改图片
});

document.getElementById('noteImage').addEventListener('mouseout', function() {
    this.src = '../images/notes1.png'; // 鼠标移开时恢复原始图片
});

document.getElementById('no2Image').addEventListener('mouseover', function() {
    this.src = '../images/notes2_hover.png'; // 鼠标悬停时更改图片
});

document.getElementById('no2Image').addEventListener('mouseout', function() {
    this.src = '../images/notes2.png'; // 鼠标移开时恢复原始图片
});