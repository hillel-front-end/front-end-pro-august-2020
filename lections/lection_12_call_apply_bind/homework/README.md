# Изучить материал
* https://htmlacademy.ru/blog/boost/tools/how-to-squash-commits-and-why-it-is-needed
* https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290 (начать с раздела - "Методы Apply и Call" можно и bind изучить, по желанию)



# Практика

1) Пусть есть объект `obj = {anonim: {say: 'Hello anonim'}, user: {say: 'Hello user'},  admin: {say: 'Hello admin'}}`, и ф-я: `function greeting(who) {}`

* при помощи метода call вызвать ф-ю greeting как метод объекта obj без записи в него, с одним из 3ьох значений "anonim", "admin", "user". Получить в ответ сообщение приветствия.
Пример: who('admin') /// Hello admin 

2) Пусть дан следующий код:


var user = {name: 'Алексей'}

function func(surname, patronymic) {
	alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname);
}

func(); //тут должно вывести 'привет, Алексей Алексеевич Петров'

* при помощи apply вывести сообщение 'привет, Алексей Алексеевич Петров'
'Алексеевич', 'Петров' должно быть параметрами ф-ии.

3)  

var user = {name: 'Алексей'}

function func(surname, patronymic) {
    alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname);
}

//Тут напишите конструкцию с bind()

func('Николаев', 'Иванович'); //тут должно вывести 'привет, Алексей Иванович Николаев '

* Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на объект user.
