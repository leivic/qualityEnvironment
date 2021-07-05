let display1=false;
let display2=false;
let display3=false;
let display4=false;
let display5=false;
let display6=false;
let display7=false;
let display8=false;
let display9=false;
let display10=false;
let display11=false;
let display12=false;
let display13=false;
let display14=false;
let username="未登录";
let role="未登录 ";
var theDate = new Date();

let getmon=function(month){//这个month只是形参而已 在使用时传入使用的实参  一个文件内的变量只能与当前文件内出现的变量交互
    if (theDate.getMonth()<9) {
      month=theDate.getFullYear()+"-"+"0"+(theDate.getMonth()+1)	
    }
    else{
      month=theDate.getFullYear()+"-"+(theDate.getMonth()+1)
    }
  }


export default{
    display1,
    display2,
    display3,
    display4,
    display5,
    display6,
    display7,
    display8,
    display9,
    display10,
    display11,
    display12,
    display13,
    username,
    role,
    display14,
    theDate,
    getmon 
}