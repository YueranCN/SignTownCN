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
    var button = document.getElementById('startButton');
    button.disabled = !button.disabled;
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
                document.cookie = "recordedVideo=" + encodeURIComponent(videoURL) + "; path=/; max-age=86400";

                window.parent.postMessage({ type: 'switchIframe', index: 3 }, '*');

                // 创建 FormData 对象并添加视频文件
                let formData = new FormData();
                formData.append('file', blob, 'recordedVideo.mp4');

                // 发送视频文件到服务器
                // 使用fetch API发送POST请求
                fetch('http://127.0.0.1:5000/upload/', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        const fruit = data.response;
                        // 要进行对比的字符串
                        const storedParam1 = sessionStorage.getItem('param1');
                        const storedParam2 = sessionStorage.getItem('param2');

                        let matchFound = false;
                        let matchedParam = '';

                        if (fruit === storedParam1) {
                            matchFound = true;
                            matchedParam = storedParam1;
                        } else if (fruit === storedParam2) {
                            matchFound = true;
                            matchedParam = storedParam2;
                        }

                        if (matchFound) {

                        } else {

                        }
                    })
                    .catch(error => {
                        document.getElementById('statusMessagee').textContent = 'Error: ' + error;
                    });
            };

            mediaRecorder.start();

            countdownInterval = setInterval(() => {
                statusMessage.textContent = '录制中...' + recordingTime + 's';
                recordingTime--;
                if (recordingTime < 0) {
                    clearInterval(countdownInterval);
                    // statusMessage.textContent = '录制结束';
                    mediaRecorder.stop();
                }
            }, 1000);
        })
        .catch(function(err) {
            console.error('无法访问摄像头', err);
        });
}