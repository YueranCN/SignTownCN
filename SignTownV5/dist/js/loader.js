/**
 * 文件名: loader.js
 * 创建日期: 2024-04-27
 * 修改日期: 2024-04-27
 * 文件说明: 网站初始化脚本
 * 作者: Frank Wang
 */

// 检测是否基于 Chromium 的浏览器
function isChromiumBased() {
    // 使用 navigator.userAgent 检测浏览器类型是否包含 "Chrome" 或 "Chromium"
    return navigator.userAgent.includes("Chrome") || navigator.userAgent.includes("Chromium");
}

// 检测窗口大小是否至少是 720p
function isWindowSizeAtLeast720p() {
    const minWidth = 1280;  // 设定 720p 分辨率的最小宽度
    const minHeight = 720;  // 设定 720p 分辨率的最小高度
    // 检查当前窗口的宽度和高度是否满足最小分辨率要求
    return window.innerWidth >= minWidth && window.innerHeight >= minHeight;
}

// 主函数，检测浏览器兼容性
function checkCompatibility() {
    // 判断浏览器是否为基于 Chromium 的浏览器且窗口大小是否满足最小720p
    if (!isChromiumBased() || !isWindowSizeAtLeast720p()) {
        // 如果不符合条件，则警告用户，并提示重新检测设置
        alert('请使用基于 Chromium 的浏览器且窗口大小至少为 1280x720 的设备访问本网站。点击确定重新检测设置。');
        // 使用 location.reload() 重新加载页面，以便再次检测
        location.reload();
        return false; // 返回 false，取消后续脚本的执行
    }
    return true; // 返回 true，继续执行后续脚本
}

// 在文档加载完毕后执行
document.addEventListener("DOMContentLoaded", function() {
    // 定义一个数组，包含需要预加载的图片路径
    const imagesToPreload = [
        "images/banner.png",
        "images/bannerk.png",
        "images/people.png",
        // 可以添加更多图片路径
    ];

    let imagesLoaded = 0; // 初始化计数器，用于跟踪已加载的图片数量
    const totalImages = imagesToPreload.length; // 总图片数量

    // 定义当每张图片加载完成时调用的函数
    function imageLoaded() {
        imagesLoaded++; // 图片加载计数器增加
        // 如果所有图片都已加载完成
        if (imagesLoaded === totalImages) {
            // 获取加载器元素，并将其隐藏
            document.getElementById('loader').style.display = 'none';
        }
    }

    // 遍历预加载图片数组，为每张图片创建 Image 对象并设置相应的事件处理
    imagesToPreload.forEach(imageSrc => {
        const img = new Image(); // 创建 Image 对象
        img.onload = imageLoaded; // 图片加载成功时触发 imageLoaded 函数
        img.onerror = imageLoaded; // 图片加载失败时也触发 imageLoaded 函数，以防止加载器永远显示
        img.src = imageSrc; // 设置图片的源路径
    });
});
