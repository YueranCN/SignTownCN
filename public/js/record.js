/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use-strict";

let cameraState = "idle";



// 启动摄像头
export const setupCamera = async () => {
  /**
   * init camera
   * init record button
   * handle record
   * update state record finish (3 secs)
   */

  const videoOutput = document.getElementById("video-camera-id");
  const canvasElement = document.getElementById("myCanvas");
  const canvasCtx = canvasElement.getContext("2d");
  function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );

    // Draw the center box
    const boxWidth = 197;
    const boxHeight = 240;
    const centerX = (canvasElement.width - boxWidth) / 2;
    const centerY = (canvasElement.height - boxHeight) / 2;
    canvasCtx.strokeStyle = "transparent";
    canvasCtx.strokeRect(centerX, centerY, boxWidth, boxHeight);

    // Check if all facial landmarks are in the box
    const faceInBox =
      results.faceLandmarks &&
      results.faceLandmarks.every((landmark) => {
        return (
          landmark.x * canvasElement.width >= centerX &&
          landmark.x * canvasElement.width <= centerX + boxWidth &&
          landmark.y * canvasElement.height >= centerY &&
          landmark.y * canvasElement.height <= centerY + boxHeight
        );
      });

    // Display message based on position
    canvasCtx.fillStyle = "#FF0000";
    canvasCtx.font = "24px Arial";
    const p = document.getElementById('human-guide-text')
    if (faceInBox) {
      p.textContent = "位置正确";
    } else {
      p.textContent = "调整位置";

    }
    canvasCtx.restore();
  }
  const holistic = new Holistic({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
    },
  });
  holistic.setOptions({
    modelComplexity: 1,
    smoothLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });
  holistic.onResults(onResults);
  let isCameraSetup = false;

  const onLoadedVideo = () => {
    if (videoOutput !== null && isCameraSetup) {
      videoOutput.play();

    }
  };
  // 当视频播放时开始监听
  videoOutput.addEventListener('play', () => {
    // 使用递归调用requestAnimationFrame
    async function listenFrames() {
      if (!videoOutput.paused && !videoOutput.ended) {
        // 在这里处理每一帧的逻辑
        await holistic.send({ image: videoOutput })
        // 继续监听下一帧
        requestAnimationFrame(listenFrames);
      }
    }
    // 开始监听帧
    requestAnimationFrame(listenFrames);
  });

  // 当视频暂停或结束时停止监听
  videoOutput.addEventListener('pause', () => {
    cancelAnimationFrame(listenFrames);
  });
  videoOutput.addEventListener('ended', () => {
    cancelAnimationFrame(listenFrames);
  });
  const setupCamera = async () => {
    const constraints = {
      audio: false,
      video: {
        facingMode: "user", // 'user' or 'environment'
      },
    };

    if (videoOutput !== null) {
      const mediaStream = await navigator.mediaDevices
        .getUserMedia(constraints)
        .catch((err) => {
          console.log(err.name);
          props.action();
          if (err.name === "NotAllowedError") {
            console.log("camera permission deniend");
            return;
          } else {
            console.log("camera undefined");
            return;
          }
        });
      console.log('mediaStream', mediaStream);
      if (mediaStream) {
        videoOutput.srcObject = mediaStream;
        // 等待视频加载完成
        isCameraSetup = true;
        onLoadedVideo();
        console.log(`--- set up camera ---`);

      }
    } else return;
  };
  setupCamera();
};

export const captureImage = () => {
  cameraState = "capturing";
  const canvasElem = document.getElementById("canvas-capture-id");
  const videoElem = document.getElementById("video-camera-id");

  const canvasCtx = canvasElem.getContext("2d");

  canvasCtx.clearRect(0, 0, canvasElem.width, canvasElem.height);

  canvasCtx?.drawImage(
    videoElem,
    (videoElem.videoWidth - videoElem.videoHeight) / 2,
    0,
    videoElem?.videoHeight,
    videoElem?.videoHeight,
    0,
    0,
    canvasElem?.width,
    canvasElem?.height
  );

  return {
    imageData: canvasCtx?.getImageData(
      0,
      0,
      canvasElem.width,
      canvasElem.height
    ),
    dataUrl: canvasElem?.toDataURL("image/png"),
  };
};
