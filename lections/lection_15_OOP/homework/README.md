# Изучить материал

* https://learn.javascript.ru/prototype
* https://learn.javascript.ru/new-prototype
* https://learn.javascript.ru/native-prototypes
* https://learn.javascript.ru/classes
* https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5

# Практика


Создать игру:
    
    Есть поле field, является экземпляром класса Field(width, height), предпочитаемые размеры 10 на 10.
    
    Есть герой person, класс Person(name, XPosition, YPosition)


    Поле являет собой двумерный массив, который состоит из нулей. Там где находится наш герой - стоит 1.

    Field имеет такие методы: 
        * renderField() - выводит поле в document, устанавливает разделители `<hr />` сверху и снизу
        * clearField() - убирает героя с доски
        * changeSize(newX, newY) - меняет размер поля
    
    Person имеет такие методы:
        * start() - герой появляется на доске
        * go(direction, step) - движение по переданом параметру (direction может быть: 'left', 'right', 'top', 'bottom') и с шагом step
        * resetPosition() - перенос в начальную позицию


Нужно самим решить какие методы получают аргументы, какие нет. Организовывать код можно любым образом.

Вызов методов происходит из консоли.


Суть такая: 

    field.renderField();
    person.start();
    person.go('left', 2);
    person.go('top', 1);
    field.renderField();

последовательно вызываются команды, renderField - отображает новую доску в document. В результате мы должны увидеть 2 нарисованных состояния поля.
