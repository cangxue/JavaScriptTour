/**
 * Created by xiaoma on 2017/9/15.
 */


// 始终记住DOM是一个树形结构。操作一个DOM节点实际上就是这么几个操作：
//
//     更新：更新该DOM节点的内容，相当于更新了该DOM节点表示的HTML的内容；
//
//     遍历：遍历该DOM节点下的子节点，以便进行进一步操作；
//
//     添加：在该DOM节点下新增一个子节点，相当于动态增加了一个HTML节点；
//
//     删除：将该节点从HTML中删除，相当于删掉了该DOM节点的内容以及它包含的所有子节点。

// 返回ID为'test'的节点：
var test = document.getElementById('test');

// 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
var trs = document.getElementById('test_table').getElementsByTagName('tr');

// 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
var reds = document.getElementById('test-div').getElementsByClassName('red');

// 获取节点test下的所有直属子节点:
var cs = test.children;

// 获取节点test下第一个、最后一个子节点：
var first = test.firstElementChild;
var last = test.lastElementChild;

// 通过querySelector获取ID为q1的节点：
var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
var ps = q1.querySelectorAll('div.highlighted > p');

// 修改DOM
// 可以直接修改节点的文本，方法有两种：

// 一种是修改innerHTML属性
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本为abc
p.innerHTML = 'abc'; // <p id="p-id">abc</p>
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';

// 第二种是修改innerText或textContent属性
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p>

// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingTop = '2em';

// 插入DOM
<!-- HTML结构 -->
<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>

var
    js = document.getElementById('js'),
    list = document.getElementById('list');
list.appendChild(js);

var
    list = document.getElementById('list'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);

var
    list = document.getElementById('list'),
    ref = document.getElementById('python'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell, ref);

var
    i, c,
    list = document.getElementById('list');
for (i = 0; i < list.children.length; i++) {
    c = list.children[i]; // 拿到第i个子节点
}

var list = document.getElementById('test-list');
var lis = list.getElementsByClassName('lang');
for(var i = 0 ; i < lis.length ; i++){
     for(var j = 1 ; j < lis.length-i ; j++){
         var li1 = lis[j - 1];
         var li2 = lis[j];
         if(li1.innerText > li2.innerText){
             list.insertBefore(li2,li1);
         }
    }
}


// 删除DOM
// 拿到待删除节点:
var self = document.getElementById('to-be-removed');
// 拿到父节点
var parent = self.parentElement;
//删除
var removed = parent.removeChild(self);
removed === self; // true


<!-- HTML结构 -->
<ul id="test-list">
    <li>JavaScript</li>
    <li>Swift</li>
    <li>HTML</li>
    <li>ANSI C</li>
    <li>CSS</li>
    <li>DirectX</li>
</ul>
var li = document.getElementById("test-list");
Array.from(li.children).filter(x=>!['JavaScript', 'HTML','CSS'].includes(x.innerHTML)).forEach(x=>li.removeChild(x))



