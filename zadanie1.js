 const y = prompt ('Введи число')
 const x = prompt ('Введи число')
 function number (y,x) { 
 if (y>x){
    console.log(y + ' больше чем ' + x);
     alert(y + ' больше чем ' + x);
 }else if (y<x){
     console.log(y + ' меньше чем ' + x);
   alert(y + ' меньше чем ' + x);
 }else {
     console.log(y + ' и ' + x + ' равны ');
    alert(y + ' и ' + x + ' равны ');
 } 
 }
 
number(y,x);