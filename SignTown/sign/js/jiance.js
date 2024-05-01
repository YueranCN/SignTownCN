const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

    const boxWidth = 400;
    const boxHeight = 400;
    const centerX = (canvasElement.width - boxWidth) / 2;
    const centerY = (canvasElement.height - boxHeight) / 2;
    canvasCtx.strokeStyle = '#FFF';
    canvasCtx.strokeRect(centerX, centerY, boxWidth, boxHeight);

    // 检查所有面部标记是否在框内
    const faceInBox = results.faceLandmarks && results.faceLandmarks.every(landmark => {
        return (
            landmark.x * canvasElement.width >= centerX &&
            landmark.x * canvasElement.width <= centerX + boxWidth &&
            landmark.y * canvasElement.height >= centerY &&
            landmark.y * canvasElement.height <= centerY + boxHeight
        );
    });

    const statusMessageDiv = document.getElementById('statusMessage');  // 获取状态消息的div元素
    const nextButton = document.getElementById('nextButton');

    if (faceInBox) {
        statusMessageDiv.textContent = '做得好！我们检测到你的手、身体和面孔';
        nextButton.disabled = false;  // 启用按钮
    } else {
        statusMessageDiv.textContent = '按边框调整好你的姿势';
        nextButton.disabled = true;  // 禁用按钮
    }

    canvasCtx.restore();
}


// 配置和启动 Holistic 模型
const holistic = new Holistic({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
    }
});
holistic.setOptions({
    modelComplexity: 1,
    smoothLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});
holistic.onResults(onResults);

// 启动摄像头
const camera = new Camera(videoElement, {
    onFrame: async () => {
        await holistic.send({ image: videoElement });
    },
    width: 1280,
    height: 720
});
camera.start();