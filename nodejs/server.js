const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// 设置 multer 存储配置
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')  // 确保这个文件夹已经存在
    },
    filename: function (req, file, cb) {
        // 每次都使用同一个文件名
        cb(null, 'fixedVideoName.mp4')
    }
});

const upload = multer({ storage: storage });

// 提供一个 POST 路由来接收视频文件
app.post('/upload', upload.single('video'), (req, res) => {
    if (req.file) {
        console.log('视频已接收：', req.file.path);
        res.send({ message: '视频上传成功', filePath: req.file.path });
    } else {
        res.status(400).send({ message: '视频上传失败' });
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
