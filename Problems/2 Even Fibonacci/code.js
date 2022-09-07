var sum = 0;
var num = 2;
var prevNum = 1;
var temp = 0;
while(true) {
    if(num > 4000000) { break; }
    if(num % 2 == 0)
        sum += num;
    temp = num;
    num = num + prevNum;
    prevNum = temp;
}
// solution: 4613632