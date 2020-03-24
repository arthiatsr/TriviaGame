var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);
var num3 = parseInt(process.argv[4]);
var oper = process.argv[2];
console.log(process.argv[2]);
switch(oper){
    case "add":
        console.log(num1+num2);
        break;
    case "sub": 
        console.log(num1-num2);
        break;
    case "mul":
        console.log(num1*num2);
        break;
    case "div":
        console.log(num1*num2);
        break;
    case "rem":
        console.log(num1%num2);
        break;
    case "exp":
        var num3 = num1;
        var num5;
        for(var i=1; i<=num2; i++){
            num5 = num1 * num3
        }
        console.log(num5);
        break;
    case "algebra":
        var a = 4;
        var b = 2;
        var res = 10;
        

        console.log(((res-b ) / a));
        break;

}