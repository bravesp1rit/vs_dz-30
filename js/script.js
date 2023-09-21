'use strict';

// Создайте функцию counter, которая будет создавать счетчик и иметь один необязательный параметр типа number. Вызов функции должен возвращать объект (счетчик) с тремя методами: increase, decrease, value.
//Вызов метода value должен возвращать текущее значение счетчика, increse – увеличивать его на 1, а decrease – уменьшать.
//Вызов функции counter должен создавать независимый счетчик – это значит, что вызов методов одного счетчика никак не должен влиять на любой другой счетчик.

void function (){
    function getCounter(){
        let number = 0;
        const increase = () => {
            number += 1;
            return number;
        }
        const decrease = () => {
            number -= 1;
            return number;
        }
        const value = () => {
            console.log(number);
            return number;
        }

        return {
            increase,
            decrease,
            value
        }
    }
    
    const counter = getCounter();
    counter.increase();
    counter.increase();
    counter.increase();
    counter.increase();
    counter.value();

    const counter2 = getCounter();
    counter2.decrease();
    counter2.decrease();
    counter2.decrease();
    counter2.value();
    
}()