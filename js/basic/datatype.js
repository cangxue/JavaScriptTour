/**
 * Created by xiaoma on 2017/9/14.
 */


var age = 15;
if (age >= 18) {
    alert('adult');
} else {
    alert('teenager');
}

//********  arrayy  ********//
var arr = [1, 2];
arr.push('A', 'B');  // 向Array的末尾添加若干元素
arr.pop();  // 把Array的最后一个元素删除掉：

arr.unshift('A', 'B');  // 往Array的头部添加若干元素
arr.shift();  //则把Array的第一个元素删掉

// sort()可以对当前Array进行排序
arr.sort()

// reverse()把整个Array的元素给掉个个，也就是反转：
arr.reverse()

// splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：?
arr.splice(2, 3, 'Google', 'Facebook');
arr.splice(2, 2)
arr.splice(2. 0, 'Google', 'Facebook');

// concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array：
var added = arr.concat([1, 2, 3]);

// join()方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：
arr.join('-')


var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    alert(key);
    if (o.hasOwnProperty(key)) {
        alert(key)
    }
}

var m = new Map([['Michael', 98], ['Bob', 22]]);
m.get('Michael');
for (var x of m) {
    alert(x)
}

m.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    alert(element)
})
