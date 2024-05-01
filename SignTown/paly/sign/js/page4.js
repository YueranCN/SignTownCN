document.addEventListener('DOMContentLoaded', function() {
    // 获取开始游戏按钮，并设置点击事件
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', function() {
        // 使用postMessage通知父页面跳转到play.html
        window.parent.hidePlayPage();
    });

    // 获取再试一次按钮，并设置点击事件
    const retryButton = document.getElementById('retryButton');
    retryButton.addEventListener('click', function() {
        // 发送消息到父窗口
        window.parent.postMessage({ type: 'navigate', direction: 'prev' }, '*');
    });
});