/**
 * Created by xiaoma on 2017/9/15.
 */


<canvas id="test-canvas" width="300" height="200"></canvas>

<canvas id="test-stock" width="300" height="200">
    <p>Current Price: 25.51</p>
</canvas>

var canvas = document.getElementById('test-canvas');
if (canvas.getContext) {
    alert('你的浏览器支持Canvas!');
} else {
    alert('你的浏览器不支持Canvas!');
}

var ctx = canvas.getContext('2d');

gl = canvas.getContext("webgl");


var
    canvas = document.getElementById('test-shape-canvas'),
    ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, 200, 200); // 设置(0,0)位置大小为200x200的矩形为透明的
ctx.fillStyle = '#dddddd'; // 设置颜色
ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
// 利用Path绘制复杂路径:
var path = new Path2D();
path.arc(75, 75, 50, 0, Math.PI*2, true);
path.moveTo(110, 75);
path.arc(75, 75, 35, 0, Math.PI, false);
path.moveTo(65, 65);
path.arc(60, 65, 5, 0, Math.PI*2, true);
path.moveTo(95, 65);
path.arc(90, 65, 5, 0, Math.PI*2, true);
ctx.strokeStyle = '#0000ff';
ctx.stroke(path);



// 绘制文本
var
    canvas = document.getElementById('test-text-canvas'),
    ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = '#666666';
ctx.font = '24px Arial';
ctx.fillStyle = '#333333';
ctx.fillText('带阴影的文字', 20, 40);