/**
 * Created by xiaoma on 2017/9/15.
 */


var Student = {
    name: 'Robot',
    height: 1.5,
    run: function () {
        console.log(this.name + 'is runing...');
    }
};

var xiaoming = {
    name: '小明'
};

// 把xiaoming的原型指向了对象Student
xiaoming.__proto__ = Student;
xiaoming.name; // 小明
xiaoming.run(); // 小明 is running...

var Bird = {
    fly: function () {
        console.log(this.name + ' is flying...');
    }
};
xiaoming.__proto__ = Bird;
xiaoming.fly(); // 小明 is flying...
// 请注意，上述代码仅用于演示目的。在编写JavaScript代码时，
// 不要直接用obj.__proto__去改变一个对象的原型

// 创建原型继承的一种方法
// Object.create()方法可以传入一个原型对象，
// 并创建一个基于该原型的新对象，但是新对象什么属性都没有
function createStudent(name) {
    // 基于Student原型创建一个新对象：
    var s = Object.create(Student);
    // 初始化新对象
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); //小明 is running...
xiaoming.__proto__ === Student; // true



//  构造函数
function Student(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
}
// 用关键字new来调用这个函数，并返回一个对象：
var xiaoming = new Student('小明')；
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!
// 如果不写new，这就是一个普通函数，它返回undefined
// 如果写了new，它就变成了一个构造函数，它绑定的this指向新创建的对象，并默认返回this
// xiaoming ----> Student.prototype ----> Object.prototype ----> null

// 用new Student()创建的对象还从原型上获得了一个constructor属性，它指向函数Student本身：
xiaoming.constructor === Student.prototype.constructor; // ture
Student.prototype.constructor = Student; // true
Object.getPrototypeOf(xiaoming) === Student.prototype; //true
xiaoming instanceof Student; // true

function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};


// 编写一个createStudent()函数，在内部封装所有的new操作
function Student(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}
Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};
//优点：一是不需要new来调用，二是参数非常灵活
function createStudent(props) {
    return new Student(props || {})
}
var xiaoming = createStudent({
    name: '小明'
});
xiaoming.grade; // 1



// 原型继承
// PrimaryStudent构造函数:
function PrimaryStudent(props) {
    // 调用student构造函数，绑定this变量;
    Student.call(this, props);
    this.grade = props.grade || 1;
}
// new PrimaryStudent() ----> PrimaryStudent.prototype ----> Object.prototype ----> null
// new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null

// 空函数F:
function F() {}
// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
xiaoming.name; // 小明
xiaoming.grade; // 2

// 验证原型：
xiaoming.__proto__ === PrimaryStudent.prototype; // true
xiaoming.__proto__.__proto__ == Student.prototype; //true

// 验证继承关系：
xiaoming instanceof PrimaryStudent; // true
xiaoming instanceof Student; //true


// 如果把继承这个动作用一个inherits()函数封装起来，还可以隐藏F的定义，并简化代码：
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
// 这个inherits()函数可以复用：
function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// JavaScript的原型继承实现方式就是：

//    定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；

//    借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；

//    继续在新的构造函数的原型上定义新方法。


// class继承
// 用新的class关键字来编写Student
class Student {
    // 构造函数constructor
    constructor(name) {
        this.name = name;
    }
    // 定义在原型对象上的函数hello()
    hello() {
        alert('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
xiaoming.hello();

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 用super调用父类的构造方法；
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}