/**
 * Created by xiaoma on 2017/9/14.
 */

'use strict';


function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

// function (x) { ... }是一个匿名函数
// 通过变量abs就可以调用该函数
var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

abs(10)
abs(-9)


function foo(x) {
    alert(x); //10
    for (var i=0; i<arguments.length; i++) {
        alert(arguments[i]); //10, 20, 30
    }
}
foo(10, 20, 30);

// foo(a[, b], c)
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    // ...
}

function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []


var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

xiaoming.age;
xiaoming.age();


var xiaoming2 = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

xiaoming2.age(); // 25

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming3 = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming3.age(); // 25
getAge.apply(xiaoming3, []); // 25, this指向xiaoming, 参数为空

Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5


// 高阶函数
function add(x, y, f) {
    return f(x) + f(y);
}

add(-5, 8, Math.abs()); // 11


function pow(x) {
    return x * x;
}

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr1.map(pow);  // [1, 4, 9, 16, 25, 36, 49, 64, 81]

var arr2 = [1, 3, 5, 7, 9];
arr2.reduce(function (x, y) {
    return x + typeof ;
}); // 25

var arr3 = [1, 2, 3, 4, 5, 6, 9, 10, 5];
var r2 = arr3.filter(function (x) {
    return x % 2 !== 0;
});
r2; // [1, 5, 9, 15]

var arr4 = ['A', '', 'B', null, undefined, 'C', '  '];
var r3 = arr4.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
r3; // ['A', 'B', 'C']


// 去除Array的重复元素
var arr5 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
var r5 = arr5.filter(function (element, index, self) {
    return self.indexOf(element) == index;
});
alert(r5.toString()); // apple,strawberry,banana,pear,orange


['Google', 'Apple', 'Microsoft'].sort(); // ['Apple', 'Google', 'Microsoft'];

var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 2, 10, 20]


// *********** 闭包 **************
function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }

    return sum;
}

var f = lazy_sum([1, 2, 3, 4, 5]);
f(); // 15

function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); // 1
f2(); // 4
f3(); // 9


// 两个参数:
(x, y) => x * x + y * y


var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
obj.getAge(); // 25

function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 1;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n ++;
    }
    return a;
}

for (var x of fib(5)) {
    console.log(x); // 依次输出0, 1, 1, 2, 3
}

123..toString(); // '123', 注意是两个点！
(123).toString(); // '123'


var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
JSON.stringify(xiaoming, null, '  ');