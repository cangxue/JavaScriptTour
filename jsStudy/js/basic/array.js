/**
 * Created by xiaoma on 2019/4/9.
 */

//  js变量类型
var string;
var name = "student", age = 12;

// 数组的定义
var names = [];                             //定义数组并初始化为空
names = ["小明", "小红", "小刚"];             //赋值，可以在定义时赋值
names = new Array();                        //定义数组并初始化为空
names = new Array(names.length);            //数组基类为Array，属性length为数组长度
names = new Array("小明", "小红", "小刚");    //字符串不区分单双引号，只要配对使用就行

//  增删改查
//  元素增加
names[4] = "小胡";                  //通过赋值，直接添加了两项，null和“小胡”
names.unshift("小李", "小兰");       //首部添加
names.push("小马")                  //末尾添加

// 元素删除
var item = names.pop();            //删除获取最后一项
item = names.shift();              //删除获取第一项
names.splice(2, 1, "小鸡");         //删除添加数据，修改源数组，第一个参数表示开始删除的位(包含),第二个参数表示要删除的数目，后面参数表示在删除位置处添加的元素

//  元素读取查找
var nameitem = names[2];           //使用[]读取数组，这是最简单的读取方式
names = names.slice(-4, 6);
names.indexOf("小明");

// 数组的拼接和字符串表示
names = names.concat("小王", "小黑");
var str = stringnames.join(",");

// 遍历
var boolresult = names.every(function (item, index, array) { //对数组中元素每一项进行布尔运算，返回false和true。every函数，全部元素返回true时返回true。some函数某一元素返回true时返回true 
    return (index > 2);
});

var nameresult = names.filter(function (item, index, array) { //返回数组，filter函数获取满足条件的项，map函数获取每一项计算值的集合，不改变原数组，forEach函数等价于for语句，对每项处理 
    return (index > 2);
});

nameresult = names.reduce(function (prev, cur, index, array) { //reduce从前向后迭代，reduceRight从后向前迭代。 
    return prev + "+" + cur; //迭代从第二项开始，prev初始值为第一项，cur初始值为第二项。计算值自动传给下一函数的prev，返回最后一次迭代产生的值
});

// 排序
names.reverse();  						//数组取反

names.sort();  							//数组排序sort(compare)，参数可为排序函数,空元素将排到最后

function compare(student1, student2) {    //比较函数，返回-1,0,1
    //return student1.age<student2.age?-1:(student1.age==student2.age?0:1);   //-1表示前对象小，1表示后对象小，0表示相等
    return student2.age - student1.age;  //正数自动转化为1，负数转化为-1
}

function array_max() {
    return Math.max.apply(Math, this);  //max取最大值，min取最小值。还有很多数学运算 
}
Array.prototype.max = array_max;        //重写数组原型链 
var x = new Array(1, 2, 3, 4, 5, 6);    //应用自定义原型函数 
var y = x.max();


