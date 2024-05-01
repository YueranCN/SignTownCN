// js/index.js
// 时间: 2024/04/18
// 作者：Frank Wang


// 页面加载完成后执行初始化函数
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    const boxes = [
        document.querySelector('.page1-box-1'),
        document.querySelector('.page1-box-2'),
        document.querySelector('.page1-box-3'),
        document.querySelector('.page1-box-4')
    ];

    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.transform = 'translateX(0)'; // 从右滑入到视口中
        }, (index + 1) * 100);  // 框移动延迟逐渐增加，创建序列动画效果
    });
}


// 页面元素数组，存储每个页面的引用
const pages = [
    document.getElementById('page1'),
    document.getElementById('page2'),
    document.getElementById('page3'),
    document.getElementById('page4')
];


// 当前页面索引，初始化为0（第一页）
let currentIndex = 0;


// 页面切换函数
function switchPage(direction) {
    let newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < pages.length) {
        let translateValue = -newIndex * 100;
        document.querySelector('.container').style.transform = `translateX(${translateValue}vw)`;
        currentIndex = newIndex;

        let boxes; // 定义一个变量来存储当前页面的框

        if (direction > 0) {
            switch (newIndex-1) {
                case 0:  // 第一页的框
                    boxes = [
                        document.querySelector('.page1-box-1'),
                        document.querySelector('.page1-box-2'),
                        document.querySelector('.page1-box-3'),
                        document.querySelector('.page1-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(-100vw)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    boxes = [
                        document.querySelector('.page2-box-1'),
                        document.querySelector('.page2-box-2'),
                        document.querySelector('.page2-box-3'),
                        document.querySelector('.page2-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(0)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    break;
                case 1:  // 第二页的框
                    boxes = [
                        document.querySelector('.page2-box-1'),
                        document.querySelector('.page2-box-2'),
                        document.querySelector('.page2-box-3'),
                        document.querySelector('.page2-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(-100vw)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    boxes = [
                        document.querySelector('.page3-box-1'),
                        document.querySelector('.page3-box-2'),
                        document.querySelector('.page3-box-3'),
                        document.querySelector('.page3-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(0)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    break;
                case 2:  // 第三页的框
                    boxes = [
                        document.querySelector('.page3-box-1'),
                        document.querySelector('.page3-box-2'),
                        document.querySelector('.page3-box-3'),
                        document.querySelector('.page3-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(-100vw)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    boxes = [
                        document.querySelector('.page4-box-1'),
                        document.querySelector('.page4-box-2'),
                        document.querySelector('.page4-box-3'),
                        document.querySelector('.page4-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(0)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    break;
                default:
                    boxes = []; // 如果没有匹配的页，框数组为空
                    break;
            }
        } else {
            switch (newIndex) {
                case 0:  // 第一页的框
                    boxes = [
                        document.querySelector('.page1-box-1'),
                        document.querySelector('.page1-box-2'),
                        document.querySelector('.page1-box-3'),
                        document.querySelector('.page1-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(0)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    boxes = [
                        document.querySelector('.page2-box-1'),
                        document.querySelector('.page2-box-2'),
                        document.querySelector('.page2-box-3'),
                        document.querySelector('.page2-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(100vw)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    break;
                case 1:  // 第二页的框
                    boxes = [
                        document.querySelector('.page2-box-1'),
                        document.querySelector('.page2-box-2'),
                        document.querySelector('.page2-box-3'),
                        document.querySelector('.page2-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(0)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    boxes = [
                        document.querySelector('.page3-box-1'),
                        document.querySelector('.page3-box-2'),
                        document.querySelector('.page3-box-3'),
                        document.querySelector('.page3-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(100vw)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    break;
                case 2:  // 第三页的框
                    boxes = [
                        document.querySelector('.page3-box-1'),
                        document.querySelector('.page3-box-2'),
                        document.querySelector('.page3-box-3'),
                        document.querySelector('.page3-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(0)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    boxes = [
                        document.querySelector('.page4-box-1'),
                        document.querySelector('.page4-box-2'),
                        document.querySelector('.page4-box-3'),
                        document.querySelector('.page4-box-4')
                    ];
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transform = `translateX(100vw)`;
                        }, (index + 1) * 100); // 框移动延迟逐渐增加
                    });
                    break;
                default:
                    boxes = []; // 如果没有匹配的页，框数组为空
                    break;
            }
        }

    }
}


// 模态窗口相关代码
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');

    window.toggleModal = function(modalId, iframeSrc) {
        var modal = document.getElementById(modalId);
        var iframe = modal.querySelector('iframe'); // 获取该模态窗口内的 iframe

        if (overlay.style.display === 'none' || overlay.style.display === '') {
            iframe.src = iframeSrc; // 设置新的 iframe 源，加载页面
            overlay.style.display = 'block'; // 显示遮罩层
            setTimeout(() => {
                overlay.classList.add('show');
                modal.style.display = 'block'; // 显示模态窗口
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
            }, 10);
        } else {
            modal.classList.remove('show');
            overlay.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                overlay.style.display = 'none';
                iframe.src = 'about:blank'; // 清除 iframe 的内容
            }, 300); // 等待动画完成后隐藏遮罩层和模态窗口
        }
    };
});