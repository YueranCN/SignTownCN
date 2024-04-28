const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');
const statusMessage = document.getElementById('statusMessage');
const startButton = document.getElementById('startButton');

let recordingInterval;
let countdownInterval;

function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.restore();
}

// 配置Holistic模型
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

// 绑定开始按钮点击事件
startButton.addEventListener('click', function() {
    startCountdown(3); // 点击按钮后开始倒计时
});

// 倒计时逻辑
function startCountdown(seconds) {
    let counter = seconds;
    countdownInterval = setInterval(() => {
        statusMessage.textContent = '开始录制' + counter;
        counter--;
        if (counter < 0) {
            clearInterval(countdownInterval);
            statusMessage.textContent = '录制中...';
            startRecording();
        }
    }, 1000);
}

// 录制视频逻辑
function startRecording() {
    let recordingTime = 5; // 录制时间为5秒
    statusMessage.textContent = '开始录制...';

    let chunks = [];
    let mediaRecorder;

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            videoElement.srcObject = stream;
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = function(e) {
                chunks.push(e.data);
            }

            mediaRecorder.onstop = function() {
                let blob = new Blob(chunks, { 'type' : 'video/mp4' });
                let videoURL = URL.createObjectURL(blob);

                // 存储视频数据到会话存储
                sessionStorage.setItem('recordedVideo', videoURL);

                statusMessage.textContent = '视频录制完成';
                window.parent.postMessage({ type: 'switchIframe', index: 3 }, '*');

                // 创建 FormData 对象并添加视频文件
                let formData = new FormData();
                formData.append('video', blob, 'recordedVideo.mp4');

                // 发送视频文件到服务器
                fetch('http://localhost:3000/upload', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())  // 假设服务器返回 JSON 格式的响应
                    .then(data => {
                        console.log('视频上传成功', data);
                        // 可以在这里处理服务器返回的数据
                    })
                    .catch(error => {
                        console.error('视频上传失败', error);
                    });

                window.parent.postMessage({ type: 'navigate', direction: 'next' }, '*');
            };

            mediaRecorder.start();

            countdownInterval = setInterval(() => {
                statusMessage.textContent = '录制中...' + recordingTime + 's';
                recordingTime--;
                if (recordingTime < 0) {
                    clearInterval(countdownInterval);
                    statusMessage.textContent = '录制结束';
                    mediaRecorder.stop();
                }
            }, 1000);
        })
        .catch(function(err) {
            console.error('无法访问摄像头', err);
        });
}