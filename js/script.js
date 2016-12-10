
var num;
var power;
var result;

function pow(num, power) {
  result = Math.pow(num, power);
  return result;
}

pow(prompt('Пожалуйста, введите целое число', 2), prompt('Пожалуйста, введите нужный степень', 2));


console.log('Результат =', result);

var i=0;
var arr = [1,2,3,4,5];

for(i=0;i<=4;i++) {
  arr[i] = prompt('Пожалуйста, введите имя', 'Андрей');
}

var n = prompt('Пожалуйста, введите свое имя');

if (arr[0] == n) {
   alert(n + ',' + ' Вы удачно вошли');
} else if (arr[1] == n) {
  alert(n + ',' + ' Вы удачно вошли');
} else if (arr[2] == n) {
  alert(n + ',' + ' Вы удачно вошли');
} else if (arr[3] == n) {
  alert(n + ',' + ' Вы удачно вошли');
} else if (arr[4] == n) {
  alert(n + ',' + ' Вы удачно вошли');
} else {
  alert('Введено неправильное имя');
}
