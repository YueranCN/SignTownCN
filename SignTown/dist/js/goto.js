/**
 * 文件名: goto.js
 * 创建日期: 2024-04-28
 * 修改日期: 2024-04-28
 * 文件说明: goto页面切换脚本
 * 作者: Frank Wang
 */

document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('iframe-container');
    let currentPage = 1;
    const totalPages = 5;

    window.addEventListener('message', function(event) {
        if (event.origin !== window.location.origin) {
            return;
        }

        const { type, direction } = event.data;

        // 检查是否接收到跳转到play.html的命令
        if (type === 'gotoPlay') {
            window.location.href = 'paly/indexk.html'; // 跳转到 play.html
            return; // 处理完毕后退出函数
        }

        if (type === 'navigate') {
            if ((direction === 'next' && currentPage < totalPages) || (direction === 'prev' && currentPage > 1)) {
                // 先淡出
                iframe.style.opacity = 0;

                // 设置延时以在淡出后更改 iframe 源
                setTimeout(() => {
                    if (direction === 'next') {
                        currentPage++;
                    } else if (direction === 'prev') {
                        currentPage--;
                    }
                    iframe.src = `sign/page${currentPage}.html`;

                    // 等待 iframe 加载新页面并淡入
                    iframe.onload = () => {
                        iframe.style.opacity = 1;
                    };
                }, 500); // 透明度变化的持续时间
            }
        }
    });
});
