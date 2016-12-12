
var num;
var power;
var k;
var result;

function pow(num, power) {
  if(num%1 == 0 && power%1 == 0) {
    result=num;
    for (k=1;k<power;k++) {
    result=result*num;
    }
  } else {
  alert('Введено не целое число');
  } 
}

pow(prompt('Пожалуйста, введите целое число', 2), prompt('Пожалуйста, введите нужный степень', 2));


console.log('Результат =', result);

var i=0;
var arr = [];
var count = 0;

for(i=0;i<=4;i++) {
  arr[i] = prompt('Пожалуйста, введите имя', 'Андрей');
}

 var n = prompt('Пожалуйста, введите свое имя');

for(i=0;i<=4;i++) {
  if(arr[i] == n) {
    count++;
  } 
} 

if (count > 0) {
  alert(n + ',' + ' Вы удачно вошли');
} else {
  alert('Введено неправильное имя');
}
